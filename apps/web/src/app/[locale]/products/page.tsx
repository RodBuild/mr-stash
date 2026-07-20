import { ProductCard } from "@/components/ProductCard"
import { Section } from "@/components/Section"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"

// Mock data for products
const PRODUCTS = [
  {
    id: "1",
    name: "Classic Leather Jacket",
    description:
      "Vintage 1980s leather jacket, gently used with a beautiful patina.",
    price: 125.0,
    condition: "Used" as const,
  },
  {
    id: "2",
    name: 'MacBook Pro M1 13"',
    description: "Certified refurbished by Mr. Stash. Battery health 100%.",
    price: 899.0,
    condition: "Mint" as const,
  },
  {
    id: "3",
    name: "Vintage Ray-Ban Aviators",
    description: "Original gold frames with green lenses. No scratches.",
    price: 150.0,
    condition: "Used" as const,
  },
  {
    id: "4",
    name: "Tesla Model 3 Floor Mats",
    description: "Brand new, never opened all-weather floor mats.",
    price: 120.0,
    condition: "New" as const,
  },
  {
    id: "5",
    name: "Sony WH-1000XM4",
    description: "Noise cancelling headphones. Used for one flight only.",
    price: 200.0,
    condition: "Mint" as const,
  },
  {
    id: "6",
    name: "Denim Trucker Hat",
    description: "Cool vintage dad hat. Cleaned and sanitized.",
    price: 25.0,
    condition: "Used" as const,
  },
]

import { useTranslation } from "@/i18n/server"

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { t } = await useTranslation(locale, "translation")

  return (
    <div className="bg-background min-h-screen">
      <Section>
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
            <p className="text-muted-foreground">
              Check out our latest collection of premium diecast cars.
            </p>
            <Label>Tester</Label>
          </div>
          <Separator />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
