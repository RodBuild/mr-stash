import type { SVGProps } from "react"

export type IconProps = SVGProps<SVGSVGElement>

function BrandIcon({ children, viewBox = "0 0 24 24", ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      role="img"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  )
}

export function Facebook(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M14 8.5V6.8c0-.8.3-1.3 1.4-1.3H17V2.7c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5v1.5H7.2v3.2h2.9v9.8H14v-9.8h2.9l.5-3.2H14Z" />
    </BrandIcon>
  )
}

export function Instagram(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M7.8 2.5h8.4c2.9 0 5.3 2.4 5.3 5.3v8.4c0 2.9-2.4 5.3-5.3 5.3H7.8c-2.9 0-5.3-2.4-5.3-5.3V7.8c0-2.9 2.4-5.3 5.3-5.3Zm0 1.9c-1.9 0-3.4 1.5-3.4 3.4v8.4c0 1.9 1.5 3.4 3.4 3.4h8.4c1.9 0 3.4-1.5 3.4-3.4V7.8c0-1.9-1.5-3.4-3.4-3.4H7.8Zm4.2 3.4a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 1.9a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6Zm4.4-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </BrandIcon>
  )
}

export function Linkedin(props: IconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M6.5 8.7v12.8H2.8V8.7h3.7ZM4.7 2.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Zm6.2 6.2.1 1.8c.8-1.2 2.1-2.1 4-2.1 3 0 5.2 2 5.2 6.2v6.9h-3.7v-6.4c0-2-.7-3.3-2.4-3.3-1.3 0-2.1.9-2.5 1.8-.1.3-.2.8-.2 1.2v6.7H7.8V8.7h3.1Z" />
    </BrandIcon>
  )
}

export const LinkedIn = Linkedin
