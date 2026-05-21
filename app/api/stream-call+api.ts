import { StreamClient } from "@stream-io/node-sdk";
import { getLessonById } from "@/data/lessons";

export async function POST(request: Request) {
  const body = await request.json();
  const { callId, userId, lessonId, language } = body as {
    callId?: string;
    userId?: string;
    lessonId?: string;
    language?: string;
  };

  if (!callId || !userId) {
    return Response.json(
      { error: "callId and userId are required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;

  if (!apiKey || !apiSecret) {
    return Response.json(
      { error: "Stream credentials are not configured" },
      { status: 500 }
    );
  }

  const client = new StreamClient(apiKey, apiSecret);
  const callType = "audio_room";
  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  // Ensure the agent user exists with admin role so it can publish audio
  await client.upsertUsers([
    { id: "lingo-teacher", name: "Lingo", role: "admin" },
  ]);

  const call = client.video.call(callType, callId);

  await call.getOrCreate({
    data: {
      created_by_id: userId,
      custom: {
        lessonId: lessonId ?? "",
        language: language ?? "",
        topic: lesson?.aiTeacherPrompt.topic ?? "",
        systemPrompt: lesson?.aiTeacherPrompt.systemPrompt ?? "",
        introMessage: lesson?.aiTeacherPrompt.introMessage ?? "",
        vocabulary: JSON.stringify(
          lesson?.goals.flatMap((g) => g.vocabulary ?? []) ?? []
        ),
        phrases: JSON.stringify(
          lesson?.goals.flatMap((g) => g.phrases ?? []) ?? []
        ),
      },
      settings_override: {
        audio: {
          default_device: "speaker",
        },
      },
    },
  });

  // Add agent as call member with host role so it can publish audio
  await call.updateCallMembers({
    update_members: [{ user_id: "lingo-teacher", role: "host" }],
  });

  // Put call in live state so audio can flow
  try {
    await call.goLive();
  } catch {
    // Already live — fine
  }

  return Response.json({ callId, callType });
}
