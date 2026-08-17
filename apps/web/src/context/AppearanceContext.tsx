"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { APPEARANCE_COOKIE } from "@/config/constants"

export type Appearance = "light" | "dark" | "system"
export type ResolvedAppearance = Exclude<Appearance, "system">

interface AppearanceContextType {
  appearance: Appearance
  resolvedAppearance: ResolvedAppearance
  setAppearance: (appearance: Appearance) => void
}

const AppearanceContext = createContext<AppearanceContextType | undefined>(
  undefined,
)

export function AppearanceProvider({
  children,
  initialAppearance,
}: {
  children: React.ReactNode
  initialAppearance: Appearance
}) {
  const [appearance, setAppearanceState] =
    useState<Appearance>(initialAppearance)
  const [resolvedAppearance, setResolvedAppearance] =
    useState<ResolvedAppearance>(
      initialAppearance === "dark" ? "dark" : "light",
    )

  const resolveAppearance = useCallback(
    (value: Appearance): ResolvedAppearance => {
      if (value !== "system") {
        return value
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    },
    [],
  )

  const applyAppearance = useCallback(
    (newAppearance: Appearance) => {
      const resolved = resolveAppearance(newAppearance)

      setResolvedAppearance(resolved)
      document.documentElement.dataset.theme = resolved
    },
    [resolveAppearance],
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const syncAppearance = () => applyAppearance(appearance)

    syncAppearance()

    if (appearance !== "system") {
      return
    }

    mediaQuery.addEventListener("change", syncAppearance)
    return () => mediaQuery.removeEventListener("change", syncAppearance)
  }, [appearance, applyAppearance])

  const setAppearance = useCallback(
    (newAppearance: Appearance) => {
      applyAppearance(newAppearance)
      setAppearanceState(newAppearance)
      document.cookie = `${APPEARANCE_COOKIE}=${newAppearance}; path=/; max-age=31536000; samesite=lax`
    },
    [applyAppearance],
  )

  const value = useMemo(
    () => ({ appearance, resolvedAppearance, setAppearance }),
    [appearance, resolvedAppearance, setAppearance],
  )

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  )
}

export function useAppearance() {
  const context = useContext(AppearanceContext)
  if (context === undefined) {
    throw new Error("useAppearance must be used within an AppearanceProvider")
  }
  return context
}
