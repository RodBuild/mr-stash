import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../src/components/button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["md", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    asChild: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
}

// export const Secondary: Story = {
//   args: {
//     children: "Secondary Button",
//     variant: "secondary",
//   },
// }

// export const Destructive: Story = {
//   args: {
//     children: "Destructive Button",
//     variant: "destructive",
//   },
// }

// export const Outline: Story = {
//   args: {
//     children: "Outline Button",
//     variant: "outline",
//   },
// }

// export const Ghost: Story = {
//   args: {
//     children: "Ghost Button",
//     variant: "ghost",
//   },
// }

// export const Link: Story = {
//   args: {
//     children: "Link Button",
//     variant: "link",
//   },
// }

// export const Sizes: Story = {
//   render: () => (
//     <div className="flex items-center gap-4">
//       <Button size="sm">Small</Button>
//       <Button size="default">Default</Button>
//       <Button size="lg">Large</Button>
//       <Button size="icon">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 4.5v15m7.5-7.5h-15"
//           />
//         </svg>
//       </Button>
//     </div>
//   ),
// }

// export const AsChildLink: Story = {
//   render: () => (
//     <Button asChild variant="outline">
//       <a href="https://google.com" target="_blank" rel="noopener noreferrer">
//         Rendered as anchor Link
//       </a>
//     </Button>
//   ),
// }
