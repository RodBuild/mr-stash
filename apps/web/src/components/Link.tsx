import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import React from "react"
import { buttonVariants } from "./ui/button"
import { VariantProps } from "class-variance-authority"

interface StyledLinkProps
  extends LinkProps, VariantProps<typeof buttonVariants> {
  className?: string
  children: React.ReactNode
}

const StyledLink = React.forwardRef<HTMLAnchorElement, StyledLinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)
StyledLink.displayName = "StyledLink"

export { StyledLink }
