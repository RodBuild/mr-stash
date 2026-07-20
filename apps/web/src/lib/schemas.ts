import { z } from "zod"

export const stashItemSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  itemName: z
    .string()
    .min(2, { message: "Item name must be at least 2 characters" }),
})

export type StashItemCallback = z.infer<typeof stashItemSchema>
