import * as React from "react"
import { clsx } from "clsx"

type ControlSize = "sm" | "md" | "lg"

export interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  invalid?: boolean
  size?: ControlSize
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid = false, size = "md", ...props }, ref) => (
    <select
      ref={ref}
      aria-invalid={invalid || undefined}
      className={clsx("ui-select", className)}
      data-invalid={invalid ? "true" : undefined}
      data-size={size}
      {...props}
    />
  ),
)

Select.displayName = "Select"
