import * as React from "react"
import { clsx } from "clsx"

type ControlSize = "sm" | "md" | "lg"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean
  size?: ControlSize
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid = false, size = "md", ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={clsx("ui-textarea", className)}
      data-invalid={invalid ? "true" : undefined}
      data-size={size}
      {...props}
    />
  ),
)

Textarea.displayName = "Textarea"
