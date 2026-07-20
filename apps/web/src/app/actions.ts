"use server"

import { stashItemSchema } from "@/lib/schemas"

export type ActionState = {
  errors?: {
    email?: string[]
    itemName?: string[]
  }
  message?: string
}

export async function submitStashItem(
  prevState: ActionState,
  formData: FormData,
) {
  const validatedFields = stashItemSchema.safeParse({
    email: formData.get("email"),
    itemName: formData.get("item"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to stash item.",
    }
  }

  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    message: `Success! Stashed item: ${validatedFields.data.itemName} for ${validatedFields.data.email}`,
  }
}
