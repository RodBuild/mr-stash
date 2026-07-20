"use client"

import { DirectionProvider } from "@radix-ui/react-direction"
import { getDir } from "@/i18n/settings"

interface DirectionWrapperProps {
  children: React.ReactNode
  locale: string
}

export function DirectionWrapper({ children, locale }: DirectionWrapperProps) {
  const dir = getDir(locale)
  return <DirectionProvider dir={dir}>{children}</DirectionProvider>
}
