import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Section } from "@/components/Section"

const OPTIONS = [
  { id: 1, name: "Electric Classic", desc: "Blue & Gold (Current)" },
  { id: 2, name: "Royal Amethyst", desc: "Purple & Amber" },
  { id: 3, name: "Forest Expedition", desc: "Emerald & Beige" },
  { id: 4, name: "Speedster Red", desc: "Crimson & Slate" },
  { id: 5, name: "Cyber Teal", desc: "Teal & Orange" },
]

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <Section className="space-y-8 py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Choose Your Palette</h1>
        <p className="text-muted-foreground text-lg">
          Explore 5 distinct color themes. Click one to view the full demo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {OPTIONS.map((opt) => (
          <Link
            key={opt.id}
            href={`/${locale}/colors/option-${opt.id}`}
            className="group block h-full"
          >
            <Card className="group-hover:border-primary h-full transition-all group-hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Option {opt.id}</span>
                </CardTitle>
                <CardDescription className="text-foreground text-base font-medium">
                  {opt.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{opt.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  )
}
