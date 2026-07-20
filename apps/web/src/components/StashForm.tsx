"use client"

import { useActionState } from "react"
import { submitStashItem, type ActionState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const initialState: ActionState = {
  message: "",
  errors: {},
}

export function StashForm() {
  const [state, formAction, isPending] = useActionState(
    submitStashItem,
    initialState,
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stash an Item</CardTitle>
        <CardDescription>
          This form uses a <strong>Server Action</strong> and{" "}
          <strong>Zod</strong> for typed validation.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            {state?.errors?.email && (
              <p className="text-destructive text-sm">
                {state.errors.email[0]}
              </p>
            )}
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="item">Stash Item</Label>
            <Input
              type="text"
              id="item"
              name="item"
              placeholder="Item name"
              required
            />
            {state?.errors?.itemName && (
              <p className="text-destructive text-sm">
                {state.errors.itemName[0]}
              </p>
            )}
          </div>
          {state?.message && (
            <p
              className={`text-sm ${state.message.includes("Success") ? "text-green-600" : "text-destructive"}`}
            >
              {state.message}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Stashing..." : "Submit Stash"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
