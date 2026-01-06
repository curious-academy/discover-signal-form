import * as z from "zod";

// export interface Card {
//   id: string;
//   name: string;
// }


export const cardSchema = z.object({
  id: z.string().min(1, "Id is required"),
  name: z.string().min(3, "Name is required")
});

export type Card = z.infer<typeof cardSchema>;
