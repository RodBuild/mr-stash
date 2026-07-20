import type { NextConfig } from "next"
import { withSharedSentryConfig } from "@mr-stash/sentry"

const nextConfig: NextConfig = {
  /* config options here */
}

export default withSharedSentryConfig(nextConfig)
