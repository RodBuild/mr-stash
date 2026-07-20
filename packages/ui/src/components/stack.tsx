import * as React from "react"
import { clsx } from "clsx"

type StackElement = "div" | "section" | "form" | "main" | "article" | "nav"
type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl"
type StackAlign = "stretch" | "start" | "center" | "end"
type StackJustify = "start" | "center" | "end" | "between"

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: StackElement
  gap?: StackGap
  align?: StackAlign
  justify?: StackJustify
}

export const Stack = React.forwardRef<HTMLElement, StackProps>(
  (
    {
      as: Comp = "div",
      gap = "md",
      align = "stretch",
      justify = "start",
      className,
      ...props
    },
    ref,
  ) => {
    const Component = Comp as React.ElementType

    return (
      <Component
        ref={ref}
        className={clsx("ui-stack", className)}
        data-align={align}
        data-gap={gap}
        data-justify={justify}
        {...props}
      />
    )
  },
)

Stack.displayName = "Stack"
