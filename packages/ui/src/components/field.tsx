import * as React from "react"
import { clsx } from "clsx"

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  invalid?: boolean
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, invalid = false, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx("ui-field", className)}
      data-invalid={invalid ? "true" : undefined}
      {...props}
    />
  ),
)

Field.displayName = "Field"

export interface FieldHintProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldHint = React.forwardRef<HTMLParagraphElement, FieldHintProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={clsx("ui-field-hint", className)} {...props} />
  ),
)

FieldHint.displayName = "FieldHint"

export interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldError = React.forwardRef<
  HTMLParagraphElement,
  FieldErrorProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx("ui-field-error", className)}
    role="alert"
    {...props}
  />
))

FieldError.displayName = "FieldError"
