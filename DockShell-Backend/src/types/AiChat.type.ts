import { z } from "zod";
const AiChatSchema = z.object({
  message: z.string(),
});
export { AiChatSchema };
