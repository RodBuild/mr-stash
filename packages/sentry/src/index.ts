import { withSentryConfig } from "@sentry/nextjs"

// Re-export all standard Sentry utilities (captureException, captureMessage, etc.)
export * from "@sentry/nextjs"

/**
 * Reusable wrapper for Next.js configs inside the monorepo.
 * Centralizes standard build-time configurations for Sentry.
 */
export function withSharedSentryConfig(
  nextConfig: Parameters<typeof withSentryConfig>[0],
) {
  return withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    authToken: process.env.SENTRY_AUTH_TOKEN,

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // tunnelRoute: "/monitoring",

    webpack: {
      // Enables automatic instrumentation of Vercel Cron Monitors
      automaticVercelMonitors: true,

      // Tree-shaking options for reducing bundle size
      treeshake: {
        // Automatically tree-shake Sentry logger statements to reduce bundle size
        removeDebugLogging: true,
      },
    },
  })
}
