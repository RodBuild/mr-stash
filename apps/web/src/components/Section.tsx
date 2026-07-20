import { cn } from "@/lib/utils"
import React from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-12 md:py-16 lg:py-24", className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4">{children}</div>
        ) : (
          children
        )}
      </section>
    )
  },
)
Section.displayName = "Section"

export { Section }
