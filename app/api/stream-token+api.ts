import { StreamClient } from "@stream-io/node-sdk";

export async function POST(request: Request) {
  const body = await request.json();
  const { userId, userName } = body as { userId?: string; userName?: string };

  if (!userId) {
    return Response.json({ error: "userId is required" }, { status: 400 });
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

  await client.upsertUsers([
    {
      id: userId,
      name: userName ?? userId,
      role: "user",
    },
  ]);

  const token = client.generateUserToken({ user_id: userId });

  return Response.json({ token, apiKey });
}
