"use client"

import { useState } from "react"
import * as Sentry from "@mr-stash/sentry"
import { testServerActionError } from "./actions"
import { Button } from "@mr-stash/ui"

export default function SentryTestPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const triggerFrontendError = () => {
    const error = new Error("This is a test frontend client-side error")
    Sentry.captureException(error)

    throw error
  }

  const triggerApiError = async () => {
    setLoading(true)
    setMessage("")
    try {
      const response = await fetch(`./sentry-test/api?t=${Date.now()}`, {
        cache: "no-store",
      })

      if (!response.ok) {
        setMessage(`API test event sent. Route returned ${response.status}.`)
        return
      }

      setMessage("API call finished")
    } catch (e: unknown) {
      if (e instanceof Error) {
        setMessage(`Caught API error: ${e.message}`)
      } else {
        setMessage(`Caught API error`)
      }
    } finally {
      setLoading(false)
    }
  }

  const triggerServerActionError = async () => {
    setLoading(true)
    setMessage("")
    try {
      await testServerActionError()
      setMessage(
        "Server action finished (should not be reached if error was thrown)",
      )
    } catch (e: unknown) {
      if (e instanceof Error) {
        setMessage(`Caught Server Action error: ${e.message}`)
      } else {
        setMessage(`Caught Server Action error`)
      }
    } finally {
      setLoading(false)
    }
  }

  const triggerCaptureMessage = () => {
    Sentry.captureMessage(
      "This is a manual test message captured from the client",
      "info",
    )
    setMessage("Message captured via Sentry.captureMessage")
  }

  const triggerUnhandledPromiseRejection = () => {
    // Intentionally unhandled promise
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("This is a test unhandled promise rejection"))
      }, 500)
    })
    setMessage("Unhandled promise rejection triggered in 500ms")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 font-sans">
      <h1 className="text-3xl font-bold">Sentry Integration Test</h1>
      <p className="text-muted-foreground max-w-xl text-center text-lg">
        Use the buttons below to trigger various types of errors and events.
        Then check your Sentry dashboard to verify they were captured correctly.
      </p>

      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
        <Button
          variant="destructive"
          onClick={triggerFrontendError}
          disabled={loading}
        >
          Trigger Frontend Error
        </Button>

        <Button
          variant="destructive"
          onClick={triggerApiError}
          disabled={loading}
        >
          Trigger API Route Error
        </Button>

        <Button
          variant="destructive"
          onClick={triggerServerActionError}
          disabled={loading}
        >
          Trigger Server Action Error
        </Button>

        <Button
          variant="secondary"
          onClick={triggerUnhandledPromiseRejection}
          disabled={loading}
        >
          Trigger Unhandled Promise
        </Button>

        <Button
          variant="outline"
          onClick={triggerCaptureMessage}
          disabled={loading}
          className="md:col-span-2"
        >
          Capture Manual Message
        </Button>
      </div>

      {message && (
        <div className="bg-muted text-muted-foreground mt-4 rounded-md border p-4">
          {message}
        </div>
      )}
    </div>
  )
}
