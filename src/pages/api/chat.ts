import type { NextApiRequest, NextApiResponse } from "next";
import Groq from "groq-sdk";
import fs from "fs";
import path from "path";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Cache variable for doc
let cachedDoc: string | null = null;

// In-memory session store
const sessionMemory: Record<string, { role: "user" | "assistant"; content: string }[]> = {};

function getDocument(): string {
  if (!cachedDoc) {
    const documentPath = path.join(process.cwd(), "public", "docs", "doc.txt");
    cachedDoc = fs.readFileSync(documentPath, "utf-8");
  }
  return cachedDoc;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message content is required" });
    }

    // fallback session id if not provided
    const sid = sessionId || "default";

    const documentText = getDocument();

    const systemPrompt = `
You are a helpful and conversational assistant.
You can ONLY use the following document for answering questions.
Do not start answers with phrases like "According to the document" or "Based on the document."
Do not use Markdown formatting, bullet points, or asterisks (*).
Respond in clean plain text paragraphs only.
Respond in a friendly and natural tone, as if you were speaking to the user directly.
If the user greets you (e.g., "Hi", "Hello"), respond politely with a greeting.
If the answer is not found in the document, reply exactly with "I don’t know."
Whenever appropriate, ask the user an open-ended follow-up question to keep the conversation flowing. 
For example, after giving an answer, you might ask "How does that relate to your situation?" or "Would you like to explore that further?"
Where appropriate, encourage the user to reach out to the service provider (Tunji Babajide) for support, coaching, or further details.

Document below:
${documentText}
`;

    // Initialize memory if new
    if (!sessionMemory[sid]) {
      sessionMemory[sid] = [];
    }

    // Add user message
    sessionMemory[sid].push({ role: "user", content: message });

    // Keep only last 20
    if (sessionMemory[sid].length > 20) {
      sessionMemory[sid] = sessionMemory[sid].slice(-20);
    }

    // Build messages
    const messages = [
      { role: "system", content: systemPrompt },
      ...sessionMemory[sid],
    ];

   const chatCompletion = await groq.chat.completions.create({
  model: "llama3-8b-8192",
  messages: messages as any, // 👈 bypass TS complaint
});


    const responseMessage =
      chatCompletion.choices[0]?.message?.content || "No response from model";

    // Save assistant reply
    sessionMemory[sid].push({ role: "assistant", content: responseMessage });

    return res.status(200).json({ response: responseMessage });
  } catch (error: any) {
    console.error("Error in chat API:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
