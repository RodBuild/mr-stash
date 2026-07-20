import { FeatureFlagProvider } from "@mr-stash/flags"

export function FlagsProvider({ children }: { children: React.ReactNode }) {
  return (
    <FeatureFlagProvider
      apiKey={process.env.NEXT_PUBLIC_HARNESS_FF_API_KEY || ""}
      target={{
        identifier: process.env.NEXT_PUBLIC_HARNESS_FF_TARGET_ID || "anonymous",
        name:
          process.env.NEXT_PUBLIC_HARNESS_FF_TARGET_NAME || "Anonymous User",
      }}
    >
      {children}
    </FeatureFlagProvider>
  )
}
