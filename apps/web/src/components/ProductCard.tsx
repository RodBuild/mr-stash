import Link from "next/link"
import { Icons } from "@mr-stash/icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: {
    id: string
    name: string
    description: string
    price: number
    image?: string
    condition: "New" | "Used" | "Mint"
  }
}

export function ProductCard({
  product,
  className,
  ...props
}: ProductCardProps) {
  return (
    <Card
      className={cn("flex h-full flex-col overflow-hidden", className)}
      {...props}
    >
      <div className="bg-muted/50 text-muted-foreground flex aspect-video w-full items-center justify-center">
        {/* Placeholder for real image */}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        ) : (
          <span className="text-4xl">📦</span>
        )}
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1 text-lg">{product.name}</CardTitle>
          <span
            className={cn(
              "rounded-full px-2 py-1 text-xs font-medium",
              product.condition === "New"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                : product.condition === "Mint"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                  : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
            )}
          >
            {product.condition}
          </span>
        </div>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-primary text-2xl font-bold">
          ${product.price.toLocaleString()}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2">
          <Icons.ShoppingCart className="h-4 w-4" />
          Add to Stash
        </Button>
      </CardFooter>
    </Card>
  )
}
