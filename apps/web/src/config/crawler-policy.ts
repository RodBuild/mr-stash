export const blockedCrawlerUserAgents = [
  "AI2Bot",
  "Ai2Bot-Dolma",
  "Amazonbot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "cohere-ai",
  "Diffbot",
  "FacebookBot",
  "GPTBot",
  "Google-Extended",
  "ImagesiftBot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "OAI-AdsBot",
  "OAI-SearchBot",
  "omgili",
  "omgilibot",
  "Perplexity-User",
  "PerplexityBot",
  "Timpibot",
  "YouBot",
] as const

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

const blockedCrawlerMatchers = blockedCrawlerUserAgents.map((userAgent) => {
  const escapedUserAgent = escapeRegExp(userAgent)

  return new RegExp(`(?:^|[^a-z0-9_-])${escapedUserAgent}(?:[^a-z0-9_-]|$)`, "i")
})

export function isBlockedCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false

  return blockedCrawlerMatchers.some((matcher) => matcher.test(userAgent))
}
