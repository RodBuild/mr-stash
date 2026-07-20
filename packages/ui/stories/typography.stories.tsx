import type { Meta, StoryObj } from "@storybook/react"
import { Heading } from "../src/components/heading"
import { Paragraph, Text } from "../src/components/text"

const meta = {
  title: "Typography",
  parameters: {
    layout: "centered",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Headings: Story = {
  render: () => (
    <div className="flex max-w-3xl flex-col gap-4">
      <Heading as="h1" size="xl">
        The <span className="text-primary">Stash</span> is Open.
      </Heading>
      <Heading as="h1" size="xl">
        Flexible financing for premium inventory
      </Heading>
      <Heading as="h2" size="lg">
        See our newest offers
      </Heading>
      <Heading as="h3" size="md">
        24 months financing at 7.95 APR
      </Heading>
      <Heading as="h4" size="sm" variant="muted">
        Available on select vehicles
      </Heading>
    </div>
  ),
}

export const BodyCopy: Story = {
  render: () => (
    <div className="flex max-w-2xl flex-col gap-4">
      <Paragraph size="lg">
        Use paragraphs for normal body copy, descriptions, and supporting
        content that should read as a complete thought.
      </Paragraph>
      <Paragraph>
        The default paragraph size is tuned for comfortable reading in cards,
        dialogs, and page sections.
      </Paragraph>
      <Paragraph size="sm" tone="muted">
        Muted small text works well for helper copy, metadata, disclaimers, and
        secondary descriptions.
      </Paragraph>
      <Text as="span" size="xs" tone="primary" weight="medium">
        Inline text can use Text with as="span".
      </Text>
    </div>
  ),
}

export const CardExample: Story = {
  render: () => (
    <section className="bg-card text-card-foreground w-[360px] rounded-lg border p-5 shadow-sm">
      <Heading as="h2" size="lg">
        See our newest offers
      </Heading>
      <div className="bg-background mt-4 rounded-md border p-4">
        <Heading as="h3" size="md">
          24 months financing at 7.95 APR
        </Heading>
        <Paragraph size="sm" tone="muted" className="mt-2">
          Enjoy flexible monthly payments on select vehicles with approval from
          participating lenders.
        </Paragraph>
      </div>
    </section>
  ),
}
