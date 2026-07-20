import * as React from "react"
import { clsx } from "clsx"

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type HeadingSize = "none" | "sm" | "md" | "lg" | "xl"
type HeadingVariant =
  | "default"
  | "muted"
  | "primary"
  | "secondary"
  | "destructive"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Semantic heading element. Use this for document structure.
   */
  as?: HeadingElement
  /**
   * Visual heading size. Use this for design scale.
   */
  size?: HeadingSize
  variant?: HeadingVariant
}

const headingSizes: Record<HeadingSize, string> = {
  none: "",
  sm: "text-heading-sm",
  md: "text-heading-md",
  lg: "text-heading-lg",
  xl: "text-heading-xl",
}

const headingVariants: Record<HeadingVariant, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  destructive: "text-destructive",
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { as: Comp = "h2", size = "md", variant = "default", className, ...props },
    ref,
  ) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          "scroll-m-20 text-balance",
          headingSizes[size],
          headingVariants[variant],
          className,
        )}
        {...props}
      />
    )
  },
)

Heading.displayName = "Heading"
