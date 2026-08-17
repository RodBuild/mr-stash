"use client"

import { useState } from "react"
import { Button } from "@mr-stash/ui"
import { Icons } from "@mr-stash/icons"
import { SearchPalette } from "./SearchPalette"
import type { SearchLabels } from "./types"

interface SearchTriggerProps {
  labels: SearchLabels
}

export function SearchTrigger({ labels }: SearchTriggerProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        aria-haspopup="dialog"
        aria-expanded={isSearchOpen}
        aria-label={labels.dialogLabel}
        title={labels.dialogLabel}
        onClick={() => setIsSearchOpen(true)}
      >
        <Icons.Search />
        <span className="hidden sm:inline">{labels.button}</span>
      </Button>
      <SearchPalette
        labels={labels}
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  )
}
