/**
 * Centralized color theme definitions.
 * Each theme contains CSS variable values for both light (:root) and dark ([data-theme='dark']) modes.
 * These are injected dynamically based on the Harness Feature Flag `theme_switcher`.
 */

export type ThemeId = "theme_1" | "theme_2" | "theme_3" | "theme_4" | "theme_5"

export const DEFAULT_THEME: ThemeId = "theme_1"

export interface ThemeDefinition {
  id: ThemeId
  name: string
  description: string
  light: Record<string, string>
  dark: Record<string, string>
}

export const THEMES: Record<ThemeId, ThemeDefinition> = {
  theme_1: {
    id: "theme_1",
    name: "Electric Classic",
    description: "Electric Blue and Gold against a deep black background.",
    light: {
      "--primary": "221.7 85.5% 50%",
      "--primary-foreground": "210 40% 98%",
      "--secondary": "47.9 95.8% 53.1%",
      "--secondary-foreground": "222.2 47.4% 11.2%",
      "--background": "0 0% 100%",
      "--foreground": "222.2 84% 4.9%",
      "--card": "0 0% 100%",
      "--card-foreground": "222.2 84% 4.9%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "222.2 84% 4.9%",
      "--muted": "210 40% 96.1%",
      "--muted-foreground": "215.4 16.3% 46.9%",
      "--accent": "210 40% 96.1%",
      "--accent-foreground": "222.2 47.4% 11.2%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "214.3 31.8% 91.4%",
      "--input": "214.3 31.8% 91.4%",
      "--ring": "221.7 85.5% 50%",
      "--radius": "0.5rem",
    },
    dark: {
      "--background": "0 0% 0%",
      "--foreground": "210 40% 98%",
      "--card": "222 0% 6%",
      "--card-foreground": "210 40% 98%",
      "--popover": "222 0% 6%",
      "--popover-foreground": "210 40% 98%",
      "--primary": "221.7 85.5% 50%",
      "--primary-foreground": "210 40% 98%",
      "--secondary": "47.9 95.8% 53.1%",
      "--secondary-foreground": "222.2 47.4% 11.2%",
      "--muted": "217.2 32.6% 17.5%",
      "--muted-foreground": "215 20.2% 65.1%",
      "--accent": "217.2 32.6% 17.5%",
      "--accent-foreground": "210 40% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "217.2 32.6% 17.5%",
      "--input": "217.2 32.6% 17.5%",
      "--ring": "221.7 85.5% 50%",
    },
  },
  theme_2: {
    id: "theme_2",
    name: "Royal Amethyst",
    description: "Deep purple and amber. Luxurious and creative.",
    light: {
      "--primary": "262.1 83.3% 57.8%",
      "--primary-foreground": "210 40% 98%",
      "--secondary": "38 92% 50%",
      "--secondary-foreground": "260 50% 10%",
      "--background": "260 20% 98%",
      "--foreground": "260 20% 10%",
      "--card": "0 0% 100%",
      "--card-foreground": "260 20% 10%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "260 20% 10%",
      "--muted": "260 10% 96%",
      "--muted-foreground": "260 10% 45%",
      "--accent": "260 10% 96%",
      "--accent-foreground": "260 20% 10%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "260 10% 90%",
      "--input": "260 10% 90%",
      "--ring": "262.1 83.3% 57.8%",
      "--radius": "0.5rem",
    },
    dark: {
      "--background": "260 50% 5%",
      "--foreground": "260 10% 98%",
      "--card": "260 50% 8%",
      "--card-foreground": "260 10% 98%",
      "--popover": "260 50% 8%",
      "--popover-foreground": "260 10% 98%",
      "--primary": "263.4 70% 65%",
      "--primary-foreground": "210 40% 98%",
      "--secondary": "38 92% 50%",
      "--secondary-foreground": "260 50% 10%",
      "--muted": "260 30% 15%",
      "--muted-foreground": "260 10% 65%",
      "--accent": "260 30% 15%",
      "--accent-foreground": "260 10% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "260 30% 15%",
      "--input": "260 30% 15%",
      "--ring": "263.4 70% 65%",
    },
  },
  theme_3: {
    id: "theme_3",
    name: "Forest Expedition",
    description:
      "Emerald green paired with sandy beige for an outdoor-inspired feel.",
    light: {
      "--primary": "158.1 64.4% 51.6%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "30 20% 90%",
      "--secondary-foreground": "160 50% 10%",
      "--background": "40 20% 99%",
      "--foreground": "160 40% 15%",
      "--card": "0 0% 100%",
      "--card-foreground": "160 40% 15%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "160 40% 15%",
      "--muted": "150 10% 94%",
      "--muted-foreground": "160 20% 40%",
      "--accent": "150 10% 94%",
      "--accent-foreground": "160 40% 15%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "160 10% 90%",
      "--input": "160 10% 90%",
      "--ring": "158.1 64.4% 51.6%",
      "--radius": "0.5rem",
    },
    dark: {
      "--background": "160 50% 5%",
      "--foreground": "150 20% 98%",
      "--card": "160 50% 8%",
      "--card-foreground": "150 20% 98%",
      "--popover": "160 50% 8%",
      "--popover-foreground": "150 20% 98%",
      "--primary": "158.1 64.4% 51.6%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "30 20% 90%",
      "--secondary-foreground": "160 50% 10%",
      "--muted": "160 30% 15%",
      "--muted-foreground": "150 10% 70%",
      "--accent": "160 30% 15%",
      "--accent-foreground": "150 10% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "160 30% 15%",
      "--input": "160 30% 15%",
      "--ring": "158.1 64.4% 51.6%",
    },
  },
  theme_4: {
    id: "theme_4",
    name: "Speedster Red",
    description: "High-energy crimson red with cool, technical slate greys.",
    light: {
      "--primary": "346.8 77.2% 49.8%",
      "--primary-foreground": "355.7 100% 97.3%",
      "--secondary": "215.4 16.3% 46.9%",
      "--secondary-foreground": "0 0% 100%",
      "--background": "210 20% 98%",
      "--foreground": "222.2 84% 4.9%",
      "--card": "0 0% 100%",
      "--card-foreground": "222.2 84% 4.9%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "222.2 84% 4.9%",
      "--muted": "210 40% 96.1%",
      "--muted-foreground": "215.4 16.3% 46.9%",
      "--accent": "210 40% 96.1%",
      "--accent-foreground": "222.2 47.4% 11.2%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "214.3 31.8% 91.4%",
      "--input": "214.3 31.8% 91.4%",
      "--ring": "346.8 77.2% 49.8%",
      "--radius": "0.5rem",
    },
    dark: {
      "--background": "0 0% 0%",
      "--foreground": "210 40% 98%",
      "--card": "217 19% 10%",
      "--card-foreground": "210 40% 98%",
      "--popover": "217 19% 10%",
      "--popover-foreground": "210 40% 98%",
      "--primary": "343 85% 60%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "215 20% 65%",
      "--secondary-foreground": "222.2 47.4% 11.2%",
      "--muted": "217 19% 20%",
      "--muted-foreground": "215 20% 65%",
      "--accent": "217 19% 20%",
      "--accent-foreground": "210 40% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "217 19% 20%",
      "--input": "217 19% 20%",
      "--ring": "343 85% 60%",
    },
  },
  theme_5: {
    id: "theme_5",
    name: "Neon Teal",
    description: "Teal and orange for a modern, energetic feel.",
    light: {
      "--primary": "175.3 77.1% 40%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "24.6 95% 53.1%",
      "--secondary-foreground": "0 0% 100%",
      "--background": "0 0% 100%",
      "--foreground": "200 50% 10%",
      "--card": "0 0% 100%",
      "--card-foreground": "200 50% 10%",
      "--popover": "0 0% 100%",
      "--popover-foreground": "200 50% 10%",
      "--muted": "200 20% 94%",
      "--muted-foreground": "200 20% 40%",
      "--accent": "200 20% 94%",
      "--accent-foreground": "200 50% 10%",
      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "200 20% 90%",
      "--input": "200 20% 90%",
      "--ring": "175.3 77.1% 40%",
      "--radius": "0.5rem",
    },
    dark: {
      "--background": "200 50% 10%",
      "--foreground": "200 10% 98%",
      "--card": "200 50% 13%",
      "--card-foreground": "200 10% 98%",
      "--popover": "200 50% 13%",
      "--popover-foreground": "200 10% 98%",
      "--primary": "175 80% 50%",
      "--primary-foreground": "200 50% 10%",
      "--secondary": "24.6 95% 53.1%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "200 30% 20%",
      "--muted-foreground": "200 10% 65%",
      "--accent": "200 30% 20%",
      "--accent-foreground": "200 10% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "210 40% 98%",
      "--border": "200 30% 20%",
      "--input": "200 30% 20%",
      "--ring": "175 80% 50%",
    },
  },
}

/**
 * Generate a CSS string for a given theme ID.
 * Injects CSS variables into :root and [data-theme='dark'] selectors.
 */
export function getThemeCSS(themeId: ThemeId): string {
  const theme = THEMES[themeId] || THEMES[DEFAULT_THEME]

  const lightVars = Object.entries(theme.light)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n")

  const darkVars = Object.entries(theme.dark)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n")

  return `
:root {
${lightVars}
}

[data-theme='dark'] {
${darkVars}
}
`
}
