import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import profile from "@/profile.json";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const systemPrompt = `${profile.chatbot_system_prompt}

Here is the full profile data you may reference:
${JSON.stringify(profile, null, 2)}`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      max_tokens: 512,
    });

    const reply = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[/api/chat]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
