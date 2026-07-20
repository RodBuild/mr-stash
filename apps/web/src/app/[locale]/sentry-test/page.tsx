"use client";

import { useState } from "react";
import * as Sentry from "@mr-stash/sentry";
import { testServerActionError } from "./actions";
import { Button } from "@/components/ui/button";

export default function SentryTestPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const triggerFrontendError = () => {
    throw new Error("This is a test frontend client-side error");
  };

  const triggerApiError = async () => {
    setLoading(true);
    setMessage("");
    try {
      // Intentionally call the API route that will throw an error
      await fetch("./sentry-test/api");
      setMessage("API call finished (should not be reached if error was thrown)");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setMessage(`Caught API error: ${e.message}`);
      } else {
        setMessage(`Caught API error`);
      }
    } finally {
      setLoading(false);
    }
  };

  const triggerServerActionError = async () => {
    setLoading(true);
    setMessage("");
    try {
      await testServerActionError();
      setMessage("Server action finished (should not be reached if error was thrown)");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setMessage(`Caught Server Action error: ${e.message}`);
      } else {
        setMessage(`Caught Server Action error`);
      }
    } finally {
      setLoading(false);
    }
  };

  const triggerCaptureMessage = () => {
    Sentry.captureMessage("This is a manual test message captured from the client", "info");
    setMessage("Message captured via Sentry.captureMessage");
  };

  const triggerUnhandledPromiseRejection = () => {
    // Intentionally unhandled promise
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("This is a test unhandled promise rejection"));
      }, 500);
    });
    setMessage("Unhandled promise rejection triggered in 500ms");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 font-sans">
      <h1 className="text-3xl font-bold">Sentry Integration Test</h1>
      <p className="text-lg text-muted-foreground max-w-xl text-center">
        Use the buttons below to trigger various types of errors and events.
        Then check your Sentry dashboard to verify they were captured correctly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
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
        <div className="mt-4 p-4 rounded-md bg-muted text-muted-foreground border">
          {message}
        </div>
      )}
    </div>
  );
}
