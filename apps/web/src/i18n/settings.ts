export const fallbackLng = "en"

export const locales = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "zh", label: "ZH", name: "中文" },
  { code: "ja", label: "JA", name: "日本語" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "hi", label: "HI", name: "हिन्दी" },
] as const

export type LocaleCode = (typeof locales)[number]["code"]

export const languages = locales.map((locale) => locale.code)

export function isLocaleCode(value: string): value is LocaleCode {
  return locales.some((locale) => locale.code === value)
}

export const cookieName = "mr-stash-lang"
export const defaultNS = "translation"

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}

export function getDir(locale: string) {
  return locale === "ar" || locale === "he" ? "rtl" : "ltr"
}
