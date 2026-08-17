"use client"

import { useLocale } from "@/context/LocaleContext"
import { locales } from "@/i18n/settings"
import { Button } from "@mr-stash/ui"
import { Icons } from "@mr-stash/icons"
import { HeaderMenu } from "./HeaderMenu"
import type { LocaleLabels } from "./types"

interface LocaleMenuProps {
  labels: LocaleLabels
}

export function LocaleMenu({ labels }: LocaleMenuProps) {
  const { locale, changeLocale } = useLocale()
  const currentLocale = locales.find((language) => language.code === locale)
  const currentLanguage = currentLocale?.name ?? locale

  return (
    <HeaderMenu
      label={labels.menuLabel}
      renderTrigger={(triggerProps) => (
        <Button
          {...triggerProps}
          variant="ghost"
          size="sm"
          aria-label={`${labels.currentLanguage}: ${currentLanguage}.`}
          title={`${labels.currentLanguage}: ${currentLanguage}`}
        >
          <Icons.Globe />
          <span className="uppercase">{locale}</span>
        </Button>
      )}
    >
      {(close) =>
        locales.map((language) => (
          <button
            key={language.code}
            type="button"
            role="menuitemradio"
            aria-checked={locale === language.code}
            className="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm"
            onClick={() => {
              changeLocale(language.code)
              close()
            }}
          >
            <span className="text-muted-foreground w-6 text-left text-xs font-medium">
              {language.label}
            </span>
            <span className="flex-1 text-left">{language.name}</span>
            {locale === language.code && <span aria-hidden="true">✓</span>}
          </button>
        ))
      }
    </HeaderMenu>
  )
}
