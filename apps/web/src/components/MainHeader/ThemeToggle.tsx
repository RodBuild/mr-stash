"use client"

import { useAppearance } from "@/context/AppearanceContext"
import { Button } from "@mr-stash/ui"
import { Icons } from "@mr-stash/icons"
import type { ThemeLabels } from "./types"

interface ThemeToggleProps {
  labels: ThemeLabels
}

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const { appearance, resolvedAppearance, setAppearance } = useAppearance()
  const nextAppearance = resolvedAppearance === "dark" ? "light" : "dark"
  const Icon = resolvedAppearance === "dark" ? Icons.Moon : Icons.Sun
  const description = `${labels.currentTheme}: ${labels[appearance]}. ${labels.toggleTo} ${labels[nextAppearance]}.`

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={description}
      aria-pressed={resolvedAppearance === "dark"}
      title={description}
      onClick={() => setAppearance(nextAppearance)}
    >
      <Icon />
    </Button>
  )
}
