import { useEffect, useRef, useState } from "react";
import {
  StreamVideoClient,
  type Call,
} from "@stream-io/video-react-native-sdk";
import { useUser } from "@clerk/expo";
import { getApiUrl } from "@/lib/api";

export type CallStatus = "idle" | "connecting" | "joined" | "error" | "ended";
export type AgentStatus = "idle" | "connecting" | "connected" | "failed";

interface UseStreamCallProps {
  lessonId: string;
  language: string;
}

export function useStreamCall({ lessonId, language }: UseStreamCallProps) {
  const { user } = useUser();
  const [status, setStatus] = useState<CallStatus>("idle");
  const [agentStatus, setAgentStatus] = useState<AgentStatus>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientRef = useRef<StreamVideoClient | null>(null);
  const callRef = useRef<Call | null>(null);
  const mountedRef = useRef(true);
  const agentSessionIdRef = useRef<string | null>(null);
  const callIdRef = useRef<string | null>(null);
  // Capture baseUrl once at mount so cleanup can use it after unmount
  const baseUrlRef = useRef<string>(getApiUrl());

  const stopAgent = async () => {
    const sessionId = agentSessionIdRef.current;
    const callId = callIdRef.current;
    if (!sessionId || !callId) return;
    agentSessionIdRef.current = null;
    try {
      await fetch(`${baseUrlRef.current}/api/agent-stop`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callId, sessionId }),
      });
    } catch {
      // Best-effort — ignore errors during cleanup
    }
  };

  const cleanup = async () => {
    await stopAgent();
    try {
      if (callRef.current) {
        await callRef.current.leave();
        callRef.current = null;
      }
    } catch {}
    try {
      if (clientRef.current) {
        await clientRef.current.disconnectUser();
        clientRef.current = null;
      }
    } catch {}
  };

  const startAgent = async (callId: string) => {
    if (!mountedRef.current) return;
    setAgentStatus("connecting");
    try {
      const res = await fetch(`${baseUrlRef.current}/api/agent-start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callId, lessonId }),
      });
      if (!res.ok) throw new Error("Agent start failed");
      const data = await res.json();
      if (!mountedRef.current) return;
      agentSessionIdRef.current = data.sessionId ?? null;
      setAgentStatus("connected");
    } catch {
      if (!mountedRef.current) return;
      setAgentStatus("failed");
    }
  };

  const startCall = async () => {
    if (!user || !mountedRef.current) return;

    setStatus("connecting");
    setError(null);

    try {
      const baseUrl = baseUrlRef.current;

      // 1. Get Stream user token from API route
      const tokenRes = await fetch(`${baseUrl}/api/stream-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          userName: user.fullName ?? user.id,
        }),
      });

      if (!tokenRes.ok) throw new Error("Failed to get session token");
      const { token, apiKey } = await tokenRes.json();

      if (!mountedRef.current) return;

      // 2. Create or get the call via API route (also sets up agent user + goLive)
      const callId = `lesson-${lessonId}-${user.id}`;
      callIdRef.current = callId;

      const callRes = await fetch(`${baseUrl}/api/stream-call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callId, userId: user.id, lessonId, language }),
      });

      if (!callRes.ok) throw new Error("Failed to initialize lesson session");
      const { callType } = await callRes.json();

      if (!mountedRef.current) return;

      // 3. Create the Stream video client
      const streamClient = new StreamVideoClient({
        apiKey,
        user: { id: user.id, name: user.fullName ?? user.id },
        token,
      });
      clientRef.current = streamClient;

      // 4. Join the call (audio-only — camera disabled)
      const call = streamClient.call(callType, callId);
      callRef.current = call;

      await call.join({ create: true });
      await call.camera.disable();

      if (!mountedRef.current) {
        await cleanup();
        return;
      }

      setStatus("joined");
      setIsMuted(false);

      // 5. Start the AI agent (non-blocking — status tracked separately)
      startAgent(callId);
    } catch (err) {
      if (!mountedRef.current) return;
      setError(
        err instanceof Error ? err.message : "Connection failed. Try again."
      );
      setStatus("error");
    }
  };

  const toggleMute = async () => {
    if (!callRef.current) return;
    try {
      await callRef.current.microphone.toggle();
      setIsMuted((prev) => !prev);
    } catch {}
  };

  const endCall = async () => {
    await cleanup();
    if (mountedRef.current) {
      setStatus("ended");
    }
  };

  const retryCall = () => {
    setStatus("idle");
    setAgentStatus("idle");
    setError(null);
    startCall();
  };

  useEffect(() => {
    mountedRef.current = true;

    // Small delay guards against React strict-mode double-mount
    const timer = setTimeout(() => {
      if (mountedRef.current) startCall();
    }, 50);

    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { status, agentStatus, isMuted, error, toggleMute, endCall, retryCall };
}
