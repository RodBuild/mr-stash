"use client"

import { useState } from "react"
import { useLocale } from "@/context/LocaleContext"
import { Button } from "@/components/ui/button"
import { languages } from "@/i18n/settings"
import { Icons } from "@mr-stash/icons"
import { cn } from "@/lib/utils"

export function LocaleSwitcher() {
  const { locale, changeLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (lang: string) => {
    changeLocale(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icons.Globe className="h-4 w-4" />
        <span className="uppercase">{locale}</span>
      </Button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown/Overlay Content */}
      {isOpen && (
        <div className="bg-popover animate-in fade-in zoom-in-95 absolute top-full right-0 z-50 mt-2 w-48 rounded-md border p-1 shadow-md duration-200">
          <div className="grid grid-cols-1 gap-1">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleSelect(lang)}
                className={cn(
                  "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded-sm px-4 py-2 text-sm font-medium transition-colors",
                  locale === lang && "bg-accent/50 text-accent-foreground",
                )}
              >
                {/* You could add flags here later */}
                <span className="flex-1 text-left uppercase">{lang}</span>
                {locale === lang && (
                  <span className="text-primary ml-2">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
