"use server";

import * as Sentry from "@mr-stash/sentry";

export async function testServerActionError() {
  Sentry.captureMessage("Sentry Test Server Action called");
  throw new Error("This is a test error thrown from a Server Action");
}
