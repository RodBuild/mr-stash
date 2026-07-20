"use client"

import * as React from "react"
import { clsx } from "clsx"
import { Icons } from "@mr-stash/icons"
import { Button } from "./button"

type DialogSize = "sm" | "md" | "lg"

interface DialogContextValue {
  close: () => void
  descriptionId: string
  showCloseButton: boolean
  titleId: string
}

const DialogContext = React.createContext<DialogContextValue | null>(null)

function useDialogContext(component: string) {
  const context = React.useContext(DialogContext)

  if (!context) {
    throw new Error(`${component} must be used inside Dialog.`)
  }

  return context
}

export interface DialogProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
  open: boolean
  onOpenChange: (open: boolean) => void
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  size?: DialogSize
  children: React.ReactNode
}

export function Dialog({
  open,
  onOpenChange,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  size = "md",
  className,
  children,
  ...props
}: DialogProps) {
  const titleId = React.useId()
  const descriptionId = React.useId()

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      onOpenChange(nextOpen)
    },
    [onOpenChange],
  )

  const close = React.useCallback(() => {
    setOpen(false)
  }, [setOpen])

  React.useEffect(() => {
    if (!open || !closeOnEscape) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return

      event.preventDefault()
      close()
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [close, closeOnEscape, open])

  if (!open) return null

  return (
    <DialogContext.Provider
      value={{ close, descriptionId, showCloseButton, titleId }}
    >
      <div className="ui-dialog-root">
        <div
          className="ui-dialog-backdrop"
          onClick={closeOnBackdropClick ? close : undefined}
        />
        <div
          {...props}
          aria-describedby={descriptionId}
          aria-labelledby={titleId}
          aria-modal="true"
          className={clsx("ui-dialog-panel", className)}
          data-size={size}
          role="dialog"
        >
          {children}
        </div>
      </div>
    </DialogContext.Provider>
  )
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean
}

export function DialogHeader({
  className,
  children,
  showCloseButton,
  ...props
}: DialogHeaderProps) {
  const { close, showCloseButton: rootShowCloseButton } =
    useDialogContext("DialogHeader")
  const shouldShowCloseButton = showCloseButton ?? rootShowCloseButton

  return (
    <div {...props} className={clsx("ui-dialog-header", className)}>
      <div className="ui-dialog-heading">{children}</div>
      {shouldShowCloseButton && (
        <Button
          aria-label="Close dialog"
          className="ui-dialog-close"
          onClick={close}
          size="icon"
          variant="ghost"
        >
          <Icons.X size={16} />
        </Button>
      )}
    </div>
  )
}

export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

/**
 * Use inside `DialogHeader`.
 */
export function DialogTitle({
  as: Comp = "h2",
  className,
  ...props
}: DialogTitleProps) {
  const { titleId } = useDialogContext("DialogTitle")

  return (
    <Comp
      {...props}
      className={clsx("ui-dialog-title", className)}
      id={titleId}
    />
  )
}

/**
 * Use inside `DialogHeader`.
 */
export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { descriptionId } = useDialogContext("DialogDescription")

  return (
    <p
      {...props}
      className={clsx("ui-dialog-description", className)}
      id={descriptionId}
    />
  )
}

export function DialogBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx("ui-dialog-body", className)} />
}

export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx("ui-dialog-footer", className)} />
}
