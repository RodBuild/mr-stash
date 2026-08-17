import { NextResponse } from "next/server"
import * as Sentry from "@mr-stash/sentry"

export async function GET() {
  Sentry.captureMessage("Sentry Test API Route called")

  const error = new Error(
    "This is a test error thrown from the Sentry Test API Route",
  )
  Sentry.captureException(error)

  return NextResponse.json(
    { error: "Sentry test API error captured" },
    { status: 500 },
  )
}
