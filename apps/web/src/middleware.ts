import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import acceptLanguage from "accept-language-parser"
import { fallbackLng, languages, cookieName } from "./i18n/settings"
import { isBlockedCrawler } from "./config/crawler-policy"

const aiOptOutHeader = "noai, noimageai"

function withCrawlerPolicyHeaders(response: NextResponse) {
  response.headers.set("X-Robots-Tag", aiOptOutHeader)
  return response
}

export const config = {
  // Matcher ignoring framework assets and root metadata files.
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml|sw.js).*)",
  ],
}

export function middleware(req: NextRequest) {
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

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
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
