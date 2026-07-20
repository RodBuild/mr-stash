"use client"

import Link from "next/link"
import { useAppearance } from "@/context/AppearanceContext"
import { LocaleSwitcher } from "@/components/LocaleSwitcher"
import { Button } from "@/components/ui/button"
import { Icons } from "@mr-stash/icons"

export function MainHeader() {
  const { appearance, setAppearance } = useAppearance()

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-30 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-primary text-xl font-black tracking-tight">
            MR STASH
          </span>
        </Link>

        {/* Right: Actions */}
        <nav className="flex items-center gap-2">
          {/* Locale Selector */}
          <LocaleSwitcher />

          {/* Theme Toggle (Text based) */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setAppearance(appearance === "dark" ? "light" : "dark")
            }
            className="w-16 transition-all"
          >
            <div className="relative flex items-center gap-2">
              {/* Icon changes based on theme, but we also show text */}
              {appearance === "dark" ? (
                <Icons.Moon className="h-4 w-4" />
              ) : (
                <Icons.Sun className="h-4 w-4" />
              )}
              <span className="hidden sm:inline-block">
                {appearance === "dark" ? "Dark" : "Light"}
              </span>
            </div>
          </Button>

          {/* Products */}
          <Button variant="ghost" size="sm" asChild>
            <Link href="/products">
              <Icons.Package className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Products</span>
            </Link>
          </Button>

          {/* Search */}
          <Button variant="ghost" size="sm">
            <Icons.Search className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Search</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
