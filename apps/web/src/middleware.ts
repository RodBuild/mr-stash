import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import acceptLanguage from "accept-language-parser"
import { fallbackLng, languages, cookieName } from "./i18n/settings"

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
}

export function middleware(req: NextRequest) {
  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.pick(
      languages,
      req.cookies.get(cookieName)?.value || "",
    )
  if (!lng)
    lng = acceptLanguage.pick(
      languages,
      req.headers.get("Accept-Language") || "",
    )
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    )
  }

  // If the referer has a different locale, we might want to respect that (optional, usually cookie is enough)
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") || "")
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    )
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
