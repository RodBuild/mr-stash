import type { MetadataRoute } from "next"
import { blockedCrawlerUserAgents } from "@/config/crawler-policy"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...blockedCrawlerUserAgents.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  }
}

