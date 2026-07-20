"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx"

type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link"
type ButtonSize = "none" | "sm" | "md" | "lg" | "icon"

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-disabled" | "disabled"
> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  disabled?: boolean
  debounceMs?: number
}

function isIconOnly(children: React.ReactNode) {
  const childArray = React.Children.toArray(children).filter(
    (child) => !(typeof child === "string" && child.trim() === ""),
  )

  if (childArray.length !== 1) return false

  const child = childArray[0]
  return React.isValidElement(child) && child.type !== React.Fragment
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      onClick,
      variant = "primary",
      size = "md",
      asChild = false,
      disabled = false,
      debounceMs = 500,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"
    const debounceLockedUntil = React.useRef(0)
    const iconOnly = size !== "none" && isIconOnly(children)

    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }

        if (!debounceMs || debounceMs <= 0) {
          onClick?.(event)
          return
        }

        const now = Date.now()
        if (now < debounceLockedUntil.current) {
          debounceLockedUntil.current = now + debounceMs
          event.preventDefault()
          event.stopPropagation()
          return
        }

        debounceLockedUntil.current = now + debounceMs
        onClick?.(event)
      },
      [debounceMs, disabled, onClick],
    )

    return (
      <Comp
        {...props}
        aria-disabled={disabled || undefined}
        className={clsx("ui-button", className)}
        data-disabled={disabled ? "true" : undefined}
        data-icon-only={iconOnly ? "true" : undefined}
        data-size={size}
        data-variant={variant}
        ref={ref}
        onClick={handleClick}
      >
        {children}
      </Comp>
    )
  },
)
Button.displayName = "Button"
