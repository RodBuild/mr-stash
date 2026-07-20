import { createInstance } from "i18next"
import { initReactI18next } from "react-i18next/initReactI18next"
import { getOptions, fallbackLng, languages } from "./settings"

// Simple implementation to load resources without i18next-resources-to-backend
const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance()

  await i18nInstance.use(initReactI18next).init({
    ...getOptions(lng, ns),
    resources: {
      // We manually preload the requested language and fallback
      [lng]: {
        [ns]: (await import(`./locales/${lng}/${ns}.json`)).default,
      },
      // Also load fallback if different
      ...(lng !== fallbackLng
        ? {
            [fallbackLng]: {
              [ns]: (await import(`./locales/${fallbackLng}/${ns}.json`))
                .default,
            },
          }
        : {}),
    },
  })

  return i18nInstance
}

export async function useTranslation(
  lng: string,
  ns: string = "translation",
  options: { keyPrefix?: string } = {},
) {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  }
}
