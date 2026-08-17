"use client"

import {
  type ReactNode,
  type Ref,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"

export type HeaderMenuTriggerProps = {
  "aria-controls": string | undefined
  "aria-expanded": boolean
  "aria-haspopup": "menu"
  onClick: () => void
  ref: Ref<HTMLButtonElement>
}

type HeaderMenuProps = {
  children: (close: () => void) => ReactNode
  label: string
  renderTrigger: (props: HeaderMenuTriggerProps) => ReactNode
}

export function HeaderMenu({
  children,
  label,
  renderTrigger,
}: HeaderMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick)
    document.addEventListener("keydown", closeOnEscape)

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [isMenuOpen])

  return (
    <div className="relative" ref={menuRef}>
      {renderTrigger({
        ref: triggerRef,
        "aria-controls": isMenuOpen ? menuId : undefined,
        "aria-expanded": isMenuOpen,
        "aria-haspopup": "menu",
        onClick: () => setIsMenuOpen((isOpen) => !isOpen),
      })}

      {isMenuOpen && (
        <div
          id={menuId}
          role="menu"
          aria-label={label}
          className="bg-popover animate-in fade-in zoom-in-95 absolute top-full right-0 z-50 mt-3.5 w-36 rounded-md border p-1 shadow-md duration-150"
        >
          {children(() => setIsMenuOpen(false))}
        </div>
      )}
    </div>
  )
}
