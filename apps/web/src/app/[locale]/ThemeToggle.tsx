"use client"

import { useAppearance } from "@/context/AppearanceContext"

export function ThemeToggle() {
  const { appearance, setAppearance } = useAppearance()

  const toggleAppearance = () => {
    setAppearance(appearance === "dark" ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={toggleAppearance}
      aria-pressed={appearance === "dark"}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-900"
    >
      {appearance === "dark" ? "Dark" : "Light"}
      <span className="text-[10px] tracking-[0.2em] uppercase">
        {appearance === "dark" ? "On" : "Off"}
      </span>
    </button>
  )
}
