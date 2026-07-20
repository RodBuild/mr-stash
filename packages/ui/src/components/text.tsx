import * as React from "react"
import { clsx } from "clsx"

type TextElement = "p" | "span" | "div" | "label" | "small"
type TextSize = "none" | "xs" | "sm" | "md" | "lg" | "xl"
type TextTone = "default" | "muted" | "primary" | "secondary" | "destructive"
type TextWeight = "normal" | "medium" | "semibold" | "bold"

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Rendered element. Defaults to paragraph for body copy.
   */
  as?: TextElement
  size?: TextSize
  tone?: TextTone
  weight?: TextWeight
}

const textSizes: Record<TextSize, string> = {
  none: "",
  xs: "text-body-xs",
  sm: "text-body-sm",
  md: "text-body-md",
  lg: "text-body-lg",
  xl: "text-body-xl",
}

const textTones: Record<TextTone, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  destructive: "text-destructive",
}

const textWeights: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Comp = "p",
      size = "md",
      tone = "default",
      weight = "normal",
      className,
      ...props
    },
    ref,
  ) => {
    const Component = Comp as React.ElementType

    return (
      <Component
        ref={ref}
        className={clsx(
          "tracking-normal",
          textSizes[size],
          textTones[tone],
          textWeights[weight],
          className,
        )}
        {...props}
      />
    )
  },
)

Text.displayName = "Text"

export interface ParagraphProps extends Omit<TextProps, "as"> {}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => (
    <Text ref={ref as React.Ref<HTMLElement>} as="p" {...props} />
  ),
)

Paragraph.displayName = "Paragraph"
