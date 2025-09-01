import OpenAI from "openai";
import { WebSocket } from "ws";
const systemPrompt = `
You are a friendly and expert CTF (Capture The Flag) assistant. Your name is 'Cypher'.
Your goal is to help users solve cybersecurity challenges without giving away the direct answer or "flag".
Follow these rules strictly:
1.  **Be concise:** Keep your answers short and to the point.
2.  **Guide, don't solve:** Provide hints, explain concepts, or suggest tools. Never provide the final exploit code or the flag itself.
3.  **Encourage learning:** Frame your answers in a way that encourages the user to learn the underlying concept.
4.  **Use a friendly, slightly informal tone.** Start your responses in a helpful way. For example: "I can help with that!" or "Good question!".
5. Use emojis`;
export class StreamingChatHandler {
  private ws: WebSocket;
  private openai: OpenAI;

  constructor(ws: WebSocket, openaiApiKey: string) {
    this.ws = ws;
    this.openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: openaiApiKey,
      defaultHeaders: {
        "HTTP-Referer": "http://localhost",
        "X-Title": "My Awesome App",
      },
    });
  }

  public async streamChat(prompt: string): Promise<void> {
    if (this.ws.readyState !== WebSocket.OPEN) return;
    try {
      const stream = await this.openai.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        stream: true,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          this.ws.send(JSON.stringify({ type: "chat", data: content }));
        }
      }
      this.ws.send(JSON.stringify({ type: "chat-end" }));
    } catch (error) {
      this.ws.send(
        JSON.stringify({ type: "error", data: "AI Chat streaming failed." })
      );
    }
  }
}
