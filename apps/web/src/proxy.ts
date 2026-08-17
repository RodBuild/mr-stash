import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import acceptLanguage from "accept-language-parser"
import {
  fallbackLng,
  languages,
  cookieName,
  isLocaleCode,
} from "./i18n/settings"
import { isBlockedCrawler } from "./config/crawler-policy"

const aiOptOutHeader = "noai, noimageai"

function withCrawlerPolicyHeaders(response: NextResponse) {
  response.headers.set("X-Robots-Tag", aiOptOutHeader)
  return response
}

export const config = {
  // Matcher ignoring framework assets and root metadata files.
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon\\.ico|icon\\.svg|robots\\.txt|sitemap\\.xml|sw\\.js|\\.well-known).*)",
  ],
}

export function proxy(req: NextRequest) {
  if (isBlockedCrawler(req.headers.get("user-agent"))) {
    return withCrawlerPolicyHeaders(
      new NextResponse("Crawler access denied", { status: 403 }),
    )
  }

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

  const [, routeLocale] = req.nextUrl.pathname.split("/")

  // Redirect requests without a supported locale as their first path segment.
  if (!isLocaleCode(routeLocale)) {
    return withCrawlerPolicyHeaders(
      NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url)),
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
    return withCrawlerPolicyHeaders(response)
  }

  return withCrawlerPolicyHeaders(NextResponse.next())
}
