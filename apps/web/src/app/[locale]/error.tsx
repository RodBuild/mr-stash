"use client" // Error boundaries must be Client Components

import { useEffect } from "react"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service here (e.g. Sentry)
    console.error("Caught by Next.js Error Boundary:", error)
  }, [error])

  return (
    <div className="m-4 flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="w-full max-w-md space-y-6 text-center">
        {/* Error Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
          <svg
            className="h-8 w-8 text-red-600 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Oops! Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            We caught an unexpected error.
          </p>
        </div>

        {/* Display exactly what broke for easier debugging */}
        <div className="mt-4 rounded-md border border-red-100 bg-red-50 p-4 text-left dark:border-red-900/50 dark:bg-red-950/30">
          <p className="overflow-x-auto font-mono text-sm text-red-800 dark:text-red-300">
            {error.message || "Unknown Error"}
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-gray-200"
        >
          Try to recover
        </button>
      </div>
    </div>
  )
}
