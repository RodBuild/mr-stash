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
          /* Crimson/Rose 600 */
          --primary: 346.8 77.2% 49.8%;
          --primary-foreground: 355.7 100% 97.3%;
          
          /* Slate 600 */
          --secondary: 215.4 16.3% 46.9%;
          --secondary-foreground: 0 0% 100%;

          /* Base Tones - Cool White */
          --background: 210 20% 98%;
          --foreground: 222.2 84% 4.9%;
          --card: 0 0% 100%;
          --card-foreground: 222.2 84% 4.9%;
          --popover: 0 0% 100%;
          --popover-foreground: 222.2 84% 4.9%;
          --muted: 210 40% 96.1%;
          --muted-foreground: 215.4 16.3% 46.9%;
          --accent: 210 40% 96.1%;
          --accent-foreground: 222.2 47.4% 11.2%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --border: 214.3 31.8% 91.4%;
          --input: 214.3 31.8% 91.4%;
          --ring: 346.8 77.2% 49.8%;
          --radius: 0.5rem;
        }

        [data-theme='dark'] {
          /* Pure Carbon Black */
          --background: 0 0% 0%;
          --foreground: 210 40% 98%;
          
          /* Dark Slate Card */
          --card: 217 19% 10%;
          --card-foreground: 210 40% 98%;
          --popover: 217 19% 10%;
          --popover-foreground: 210 40% 98%;

          /* Rose 500 */
          --primary: 343 85% 60%;
          --primary-foreground: 0 0% 100%;

          /* Slate 400 */
          --secondary: 215 20% 65%;
          --secondary-foreground: 222.2 47.4% 11.2%;

          --muted: 217 19% 20%;
          --muted-foreground: 215 20% 65%;
          --accent: 217 19% 20%;
          --accent-foreground: 210 40% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 217 19% 20%;
          --input: 217 19% 20%;
          --ring: 343 85% 60%;
        }
      `}</style>
      <ColorDemoBoard
        title="Option 4: Speedster Red"
        locale={locale}
        description="Fast and aggressive. High-energy crimson red with cool, technical slate greys."
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
