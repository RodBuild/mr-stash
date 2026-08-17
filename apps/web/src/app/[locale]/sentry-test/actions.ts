"use server"

import * as Sentry from "@mr-stash/sentry"
import { headers } from "next/headers"

export async function testServerActionError() {
  return Sentry.withServerActionInstrumentation(
    "testServerActionError",
    {
      headers: await headers(),
    },
    async () => {
      Sentry.captureMessage("Sentry Test Server Action called")

      const error = new Error(
        "This is a test error thrown from a Server Action",
      )
      Sentry.captureException(error)

      throw error
    },
  )
}
