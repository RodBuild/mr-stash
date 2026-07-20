import { ColorDemoBoard } from "@/components/ColorDemoBoard"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <>
      <style>{`
        :root {
          /* Emerald 600 */
          --primary: 158.1 64.4% 51.6%;
          --primary-foreground: 0 0% 100%;
          
          /* Beige/Sand */
          --secondary: 30 20% 90%;
          --secondary-foreground: 160 50% 10%;

          /* Base Tones - Warm Off-White */
          --background: 40 20% 99%;
          --foreground: 160 40% 15%;
          --card: 0 0% 100%;
          --card-foreground: 160 40% 15%;
          --popover: 0 0% 100%;
          --popover-foreground: 160 40% 15%;
          --muted: 150 10% 94%;
          --muted-foreground: 160 20% 40%;
          --accent: 150 10% 94%;
          --accent-foreground: 160 40% 15%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --border: 160 10% 90%;
          --input: 160 10% 90%;
          --ring: 158.1 64.4% 51.6%;
          --radius: 0.5rem;
        }

        [data-theme='dark'] {
          /* Deep Forest Green */
          --background: 160 50% 5%;
          --foreground: 150 20% 98%;
          
          /* Dark Green Card */
          --card: 160 50% 8%;
          --card-foreground: 150 20% 98%;
          --popover: 160 50% 8%;
          --popover-foreground: 150 20% 98%;

          /* Emerald 500 (lighter) */
          --primary: 158.1 64.4% 51.6%;
          --primary-foreground: 0 0% 100%;

          /* Beige/Sand */
          --secondary: 30 20% 90%;
          --secondary-foreground: 160 50% 10%;

          --muted: 160 30% 15%;
          --muted-foreground: 150 10% 70%;
          --accent: 160 30% 15%;
          --accent-foreground: 150 10% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 160 30% 15%;
          --input: 160 30% 15%;
          --ring: 158.1 64.4% 51.6%;
        }
      `}</style>
      <ColorDemoBoard
        title="Option 3: Forest Expedition"
        locale={locale}
        description="Organic and grounded. Emerald green paired with sandy beige for an outdoor-inspired feel."
        PaletteDetails={
          <div className="flex justify-center gap-4 py-4">
            <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold">
              Pri
            </div>
            <div className="bg-secondary text-secondary-foreground flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold">
              Sec
            </div>
            <div className="bg-background text-foreground flex h-12 w-12 items-center justify-center rounded-full border text-xs font-bold">
              Bg
            </div>
          </div>
        }
      />
    </>
  )
}
