import * as React from "react"
import { clsx } from "clsx"

type ControlSize = "sm" | "md" | "lg"

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  invalid?: boolean
  size?: ControlSize
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid = false, size = "md", ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={clsx("ui-input", className)}
      data-invalid={invalid ? "true" : undefined}
      data-size={size}
      {...props}
    />
  ),
)

Input.displayName = "Input"
