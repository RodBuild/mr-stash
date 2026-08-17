"use client"

import { useEffect } from "react"
import * as Sentry from "@mr-stash/sentry"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <main className="flex min-h-screen items-center justify-center bg-white p-8 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
          <div className="w-full max-w-md space-y-6 text-center">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Something went wrong
              </h1>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                We caught an unexpected error.
              </p>
            </div>

            <button
              onClick={() => reset()}
              className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-gray-200"
            >
              Try to recover
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
