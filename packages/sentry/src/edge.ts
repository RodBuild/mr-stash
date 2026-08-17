import * as Sentry from "@sentry/nextjs"
import { getSentryEnvironment } from "./environment"

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: getSentryEnvironment(),
    tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
    enableLogs: true,
  })
} else {
  console.warn("Sentry DSN not found. Sentry edge monitoring is disabled.")
}
