"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@mr-stash/ui"
import { Icons } from "@mr-stash/icons"
import type { SearchLabels } from "./types"

interface SearchPaletteProps {
  labels: SearchLabels
  onClose: () => void
  open: boolean
}

export function SearchPalette({ labels, onClose, open }: SearchPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [onClose, open])

  if (!open) return null

  return (
    <>
      <button
        type="button"
        aria-label={labels.close}
        className="fixed inset-x-0 top-16 bottom-0 z-40 cursor-default bg-black/20 backdrop-blur-[1px]"
        onClick={onClose}
      />
      <section
        aria-label={labels.dialogLabel}
        aria-modal="true"
        className="bg-popover animate-in fade-in zoom-in-95 fixed top-[18vh] left-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 overflow-hidden rounded-xl border shadow-xl duration-150"
        role="dialog"
      >
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="flex items-center gap-3 p-3">
            <Icons.Search className="text-muted-foreground h-5 w-5" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label={labels.dialogLabel}
              placeholder={labels.placeholder}
              autoComplete="off"
              className="h-10 border-0 bg-transparent px-0 text-base shadow-none focus-visible:border-0 focus-visible:shadow-none"
            />
            <kbd className="text-muted-foreground rounded border px-1.5 py-0.5 text-xs">
              ESC
            </kbd>
          </div>
        </form>
        <div className="text-muted-foreground border-t px-4 py-3 text-sm">
          {query ? labels.pending : labels.empty}
        </div>
      </section>
    </>
  )
}
