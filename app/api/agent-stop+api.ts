export async function POST(request: Request) {
  const body = await request.json();
  const { callId, sessionId } = body as {
    callId?: string;
    sessionId?: string;
  };

  if (!callId || !sessionId) {
    return Response.json(
      { error: "callId and sessionId are required" },
      { status: 400 }
    );
  }

  const agentServerUrl = process.env.AGENT_SERVER_URL;
  if (!agentServerUrl) {
    return Response.json(
      { error: "Agent server not configured" },
      { status: 500 }
    );
  }

  try {
    await fetch(
      `${agentServerUrl}/calls/${encodeURIComponent(callId)}/sessions/${encodeURIComponent(sessionId)}`,
      { method: "DELETE" }
    );
  } catch {
    // Best-effort cleanup — ignore network errors
  }

  return Response.json({ ok: true });
}
