import { getLessonById } from "@/data/lessons";

export async function POST(request: Request) {
  const body = await request.json();
  const { callId, lessonId } = body as {
    callId?: string;
    lessonId?: string;
  };

  if (!callId) {
    return Response.json({ error: "callId is required" }, { status: 400 });
  }

  const agentServerUrl = process.env.AGENT_SERVER_URL;
  if (!agentServerUrl) {
    return Response.json(
      { error: "Agent server not configured" },
      { status: 500 }
    );
  }

  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  const sessionPayload: Record<string, unknown> = {
    call_type: "audio_room",
  };

  if (lesson) {
    sessionPayload.language = lesson.aiTeacherPrompt.language;
    sessionPayload.topic = lesson.aiTeacherPrompt.topic;
    sessionPayload.system_prompt = lesson.aiTeacherPrompt.systemPrompt;
    sessionPayload.intro_message = lesson.aiTeacherPrompt.introMessage;
    sessionPayload.vocabulary = lesson.goals.flatMap((g) => g.vocabulary ?? []);
    sessionPayload.phrases = lesson.goals.flatMap((g) => g.phrases ?? []);
  }

  try {
    const res = await fetch(
      `${agentServerUrl}/calls/${encodeURIComponent(callId)}/sessions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sessionPayload),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return Response.json(
        { error: `Agent start failed: ${text}` },
        { status: 502 }
      );
    }

    const data = await res.json();
    const sessionId = data.session_id ?? data.id ?? null;
    return Response.json({ sessionId });
  } catch (err) {
    console.error("agent-start error:", err);
    return Response.json({ error: "Failed to reach agent server" }, { status: 502 });
  }
}
