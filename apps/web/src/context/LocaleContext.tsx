"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { useParams, usePathname, useRouter } from "next/navigation"
import { cookieName, fallbackLng, languages } from "@/i18n/settings"

interface LocaleContextType {
  locale: string
  changeLocale: (newLocale: string) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()

  // Use params.locale if available, otherwise fallback
  const currentLocale = (params?.locale as string) || fallbackLng

  const [locale, setLocale] = useState(currentLocale)

  useEffect(() => {
    // 1. Sync State with URL
    if (languages.includes(currentLocale) && currentLocale !== locale) {
      setLocale(currentLocale)
    }

    // 2. Sync LocalStorage -> Cookie (if missing)
    // This runs on mount. If cookie is missing but LS has a preference, we set cookie and reload.
    // This fixes the "first visit" issue if user cleared cookies but not LS.
    const stored = localStorage.getItem(cookieName)
    if (stored && languages.includes(stored) && stored !== currentLocale) {
      // If we are on /en but stored is /es, we should probably redirect?
      // Or we just update the cookie so next refresh is correct.
      // Let's rely on user action to change types, but ensure cookie matches LS on load.
      document.cookie = `${cookieName}=${stored}; path=/`
    }

    // 3. Persist current URL locale to LS/Cookie to keep them in sync
    localStorage.setItem(cookieName, currentLocale)
    document.cookie = `${cookieName}=${currentLocale}; path=/`
  }, [currentLocale, locale])

  const changeLocale = (newLocale: string) => {
    if (!languages.includes(newLocale)) return

    // 1. Update State
    setLocale(newLocale)

    // 2. Persist to LS and Cookie
    localStorage.setItem(cookieName, newLocale)
    document.cookie = `${cookieName}=${newLocale}; path=/`

    // 3. Redirect
    // Replace the locale segment in the pathname
    const segments = pathname.split("/")
    segments[1] = newLocale
    const newPath = segments.join("/")

    router.push(newPath)
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
