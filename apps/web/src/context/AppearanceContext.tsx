"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { APPEARANCE_COOKIE } from "@/config/constants"

type Appearance = "light" | "dark"

interface AppearanceContextType {
  appearance: Appearance
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
  initialAppearance?: Appearance
}) {
  const [appearance, setAppearanceState] = useState<Appearance>(
    initialAppearance || "light",
  )

  // 1. Initial Load Logic - Sync with LS if needed, but respect server initialAppearance
  useEffect(() => {
    const stored = localStorage.getItem(APPEARANCE_COOKIE)
    if (
      !initialAppearance &&
      stored &&
      (stored === "light" || stored === "dark")
    ) {
      setAppearanceState(stored)
      document.cookie = `${APPEARANCE_COOKIE}=${stored}; path=/; max-age=31536000`
    }
  }, [initialAppearance])

  // 2. Sync with localStorage and DOM and Cookie
  const setAppearance = (newAppearance: Appearance) => {
    setAppearanceState(newAppearance)
    localStorage.setItem(APPEARANCE_COOKIE, newAppearance)
    document.documentElement.dataset.theme = newAppearance
    document.cookie = `${APPEARANCE_COOKIE}=${newAppearance}; path=/; max-age=31536000`
  }

  // 3. MutationObserver for external changes (robustness)
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const currentAttr = document.documentElement.dataset.theme
          if (currentAttr === "light" || currentAttr === "dark") {
            if (currentAttr !== appearance) {
              setAppearance(currentAttr as Appearance)
            }
          }
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    })

    return () => observer.disconnect()
  }, [appearance])

  return (
    <AppearanceContext.Provider value={{ appearance, setAppearance }}>
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
