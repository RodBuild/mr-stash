export const fallbackLng = "en"
export const languages = [
  fallbackLng,
  "es", // Spanish
  "pt", // Portuguese
  "ru", // Russian
  "ar", // Arabic
  "zh", // Chinese (Simplified)
  "ja", // Japanese
  "it", // Italian
  "fr", // French
  "hi", // Hindi
]
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
