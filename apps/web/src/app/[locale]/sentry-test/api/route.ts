import { NextResponse } from "next/server";
import * as Sentry from "@mr-stash/sentry";

export async function GET() {
  Sentry.captureMessage("Sentry Test API Route called");

  throw new Error("This is a test error thrown from the Sentry Test API Route");

  // This will never be reached, but needed for TS to not complain about return type
  return NextResponse.json({ success: true });
}
