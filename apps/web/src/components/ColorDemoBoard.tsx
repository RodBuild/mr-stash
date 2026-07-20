import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/app/[locale]/ThemeToggle"
import { Section } from "@/components/Section"
import Link from "next/link"

interface ColorDemoBoardProps {
  title: string
  description: string
  PaletteDetails: React.ReactNode
  locale: string
}

export function ColorDemoBoard({
  title,
  description,
  PaletteDetails,
  locale,
}: ColorDemoBoardProps) {
  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <div className="bg-muted/20 border-b">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/colors`}
              className="text-muted-foreground hover:text-primary text-sm"
            >
              &larr; Back to Colors
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <ThemeToggle />
        </Section>
      </div>

      <Section className="space-y-12 py-12">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-primary text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Stash Collection
          </h2>
          <p className="text-muted-foreground text-xl">{description}</p>
          {PaletteDetails}
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Join the Stash</CardTitle>
              <CardDescription>
                Enter your details to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="rodrigo@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Sign Up with Primary</Button>
              <Button variant="secondary" className="w-full">
                Sign Up with Secondary
              </Button>
            </CardFooter>
          </Card>

          {/* Typography & Elements */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Typography & Elements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Heading 3</h3>
                  <p className="leading-7">
                    This is a generic paragraph using the default text color. It
                    should have good contrast against the background.
                    <br />
                    <span className="text-muted-foreground">
                      This is muted text for secondary information.
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Primary</Button>
                  <Button size="sm" variant="secondary">
                    Secondary
                  </Button>
                  <Button size="sm" variant="destructive">
                    Destructive
                  </Button>
                  <Button size="sm" variant="outline">
                    Outline
                  </Button>
                  <Button size="sm" variant="ghost">
                    Ghost
                  </Button>
                  <Button size="sm" variant="link">
                    Link
                  </Button>
                </div>

                <div className="bg-accent text-accent-foreground rounded-lg border p-4">
                  This is an <strong>accent</strong> block. Useful for
                  highlights or callouts.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
