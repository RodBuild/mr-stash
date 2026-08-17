// Expected values:
// - local Next dev: "development"
// - Vercel Preview deployments: "preview"
// - Vercel Production deployments: "production"
//
// NEXT_PUBLIC_VERCEL_ENV lets browser-side Sentry events use the same
// environment tag as server-side events when Vercel system env vars are exposed.
export function getSentryEnvironment() {
  return (
    process.env.NEXT_PUBLIC_VERCEL_ENV ||
    process.env.VERCEL_ENV ||
    process.env.NODE_ENV
  )
}
