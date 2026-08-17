import Link from "next/link"
import { useTranslation } from "@/i18n/server"
import { LocaleMenu } from "./LocaleMenu"
import { SearchTrigger } from "./SearchTrigger"
import { ThemeToggle } from "./ThemeToggle"

interface MainHeaderProps {
  locale: string
}

export async function MainHeader({ locale }: MainHeaderProps) {
  const { t } = await useTranslation(locale)

  const searchLabels = {
    button: t("mainHeader.search.button"),
    close: t("mainHeader.search.close"),
    dialogLabel: t("mainHeader.search.dialogLabel"),
    empty: t("mainHeader.search.empty"),
    pending: t("mainHeader.search.pending"),
    placeholder: t("mainHeader.search.placeholder"),
  }
  const localeLabels = {
    currentLanguage: t("mainHeader.language.current"),
    menuLabel: t("mainHeader.language.menuLabel"),
  }
  const themeLabels = {
    currentTheme: t("mainHeader.theme.current"),
    dark: t("mainHeader.theme.dark"),
    light: t("mainHeader.theme.light"),
    system: t("mainHeader.theme.system"),
    toggleTo: t("mainHeader.theme.toggleTo"),
  }

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-30 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-primary text-xl font-black tracking-tight">
            MR STASH
          </span>
        </Link>

        <nav
          className="flex items-center gap-2"
          aria-label="Utility navigation"
        >
          <SearchTrigger labels={searchLabels} />
          <LocaleMenu labels={localeLabels} />
          <ThemeToggle labels={themeLabels} />
        </nav>
      </div>
    </header>
  )
}
