"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react"
import {
  FFContextProvider,
  useFeatureFlag,
} from "@harnessio/ff-react-client-sdk"

export interface FeatureFlagsTarget {
  identifier: string
  name?: string
}

interface FeatureFlagProviderProps {
  apiKey: string
  target: FeatureFlagsTarget
  children: React.ReactNode
}

const LOCAL_STORAGE_KEY = "mr-stash-flags"

// ─── Context API ──────────────────────────────────────────────
interface FeatureFlagContextType {
  getFlag: (flagName: string, defaultValue: string) => string
  setOverride: (flagName: string, value: string) => void
  removeOverride: (flagName: string) => void
  overrides: Record<string, string>
}

const FeatureFlagContext = createContext<FeatureFlagContextType>({
  getFlag: (_flagName: string, defaultValue: string) => defaultValue,
  setOverride: () => {},
  removeOverride: () => {},
  overrides: {},
})

export function useFeatureFlags() {
  return useContext(FeatureFlagContext)
}

// ─── Inner Logic ──────────────────────────────────────────────
function FeatureFlagInner({ children }: { children: React.ReactNode }) {
  // Harness SDK hooks — add new flags here as the app grows
  const harnessFlags: Record<string, string | boolean | number> = {
    theme_switcher: useFeatureFlag("theme_switcher"),
  }

  // Local Storage Overrides State
  const [overrides, setOverrides] = useState<Record<string, string>>({})
  const [isMounted, setIsMounted] = useState(false)

  // Load from local storage on mount and listen to cross-tab changes
  useEffect(() => {
    setIsMounted(true)
    const loadOverrides = () => {
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (stored) {
          setOverrides(JSON.parse(stored))
        }
      } catch (err) {
        console.error("Failed to parse mr-stash-flags from localStorage", err)
      }
    }

    loadOverrides()

    // Listen to changes from other tabs
    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key === LOCAL_STORAGE_KEY) {
        loadOverrides()
      }
    }
    window.addEventListener("storage", handleStorageEvent)
    return () => window.removeEventListener("storage", handleStorageEvent)
  }, [])

  const setOverride = useCallback((flagName: string, value: string) => {
    setOverrides((prev) => {
      const updated = { ...prev, [flagName]: value }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  const removeOverride = useCallback((flagName: string) => {
    setOverrides((prev) => {
      const updated = { ...prev }
      delete updated[flagName]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  const getFlag = useCallback(
    (flagName: string, defaultValue: string): string => {
      // 1. Check local overrides first (only after mount to prevent hydration crashes)
      if (isMounted && overrides[flagName] !== undefined) {
        return overrides[flagName]
      }

      // 2. Check Harness flags
      const harnessValue = harnessFlags[flagName]
      if (harnessValue !== undefined) {
        return String(harnessValue)
      }

      // 3. Fallback
      return defaultValue
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMounted, overrides, ...Object.values(harnessFlags)],
  )

  const contextValue = useMemo(
    () => ({ getFlag, setOverride, removeOverride, overrides }),
    [getFlag, setOverride, removeOverride, overrides],
  )

  return (
    <FeatureFlagContext.Provider value={contextValue}>
      {children}
    </FeatureFlagContext.Provider>
  )
}

// ─── Exported Provider ─────────────────────────────────────────
export function FeatureFlagProvider({
  apiKey,
  target,
  children,
}: FeatureFlagProviderProps) {
  if (!apiKey) {
    console.warn(
      "⚠️ Harness API Key is missing. Feature flags will use default fallback values.",
    )
    // Even without Harmess API Key, we can still load the Inner Provider
    // so our local overrides STILL WORK completely offline/locally!
    return <FeatureFlagInner>{children}</FeatureFlagInner>
  }

  return (
    <FFContextProvider
      apiKey={apiKey}
      target={target}
      fallback={false}
      options={{
        baseUrl: "https://config.ff.harness.io/api/1.0",
        eventUrl: "https://events.ff.harness.io/api/1.0",
      }}
    >
      <FeatureFlagInner>{children}</FeatureFlagInner>
    </FFContextProvider>
  )
}
