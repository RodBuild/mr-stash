import type { Preview } from "@storybook/react"
import "./preview.css"
import { getThemeCSS, type ThemeId } from "../src/config/themes"
import { themes } from "storybook/theming"

const preview: Preview = {
  globalTypes: {
    mode: {
      description: "Color mode (light or dark)",
      toolbar: {
        title: "Mode",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
          { value: "system", title: "System", icon: "browser" },
        ],
        dynamicTitle: true,
      },
    },
    palette: {
      description: "Design theme palette",
      toolbar: {
        title: "Palette",
        icon: "paintbrush",
        items: [
          { value: "theme_1", title: "Electric Classic" },
          { value: "theme_2", title: "Royal Amethyst" },
          { value: "theme_3", title: "Forest Expedition" },
          { value: "theme_4", title: "Speedster Red" },
          { value: "theme_5", title: "Neon Teal" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    mode: "dark",
    palette: "theme_1",
  },
  decorators: [
    (Story, context) => {
      const mode = (context.globals.mode as string) ?? "dark"
      const palette = (context.globals.palette as ThemeId) ?? "theme_1"
      const css = getThemeCSS(palette)

      return (
        <div
          data-theme={mode}
          className={mode}
          style={{
            minHeight: "100vh",
            backgroundColor: "hsl(var(--background))",
            color: "hsl(var(--foreground))",
            padding: "2rem",
          }}
        >
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      disable: true,
    },
    docs: {
      theme: themes.dark,
    },
  },
}

export default preview
