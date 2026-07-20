"use client"

import { Section } from "@/components/Section"
import { Button, Heading, Text } from "@mr-stash/ui"

export default function HomePage() {
  const HeadingComp = (
    <>
      The <span className="text-primary">Stash</span> is Open.
    </>
  )

  return (
    <>
      <main className="bg-background min-h-screen">
        <Section className="space-y-6 py-20 text-center">
          <Heading as="h1" size="xl" variant="destructive">
            The <span className="text-primary">Stash</span> is Open.
          </Heading>
          <Heading size="lg">{HeadingComp}</Heading>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Discover the finest collection of diecast cars and premium
            collectibles. Curated for the true enthusiast.
          </p>
          <Text>Hello guys I am doing something cool</Text>
          <Button size="lg">Button</Button>
          <Button variant="destructive">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="link">Button</Button>
          <Button variant="secondary">Button</Button>
        </Section>
      </main>
    </>
  )
}
