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
          /* Teal 600 */
          --primary: 175.3 77.1% 40%;
          --primary-foreground: 0 0% 100%;
          
          /* Orange 500 */
          --secondary: 24.6 95% 53.1%;
          --secondary-foreground: 0 0% 100%;

          /* Base Tones */
          --background: 0 0% 100%;
          --foreground: 200 50% 10%;
          --card: 0 0% 100%;
          --card-foreground: 200 50% 10%;
          --popover: 0 0% 100%;
          --popover-foreground: 200 50% 10%;
          --muted: 200 20% 94%;
          --muted-foreground: 200 20% 40%;
          --accent: 200 20% 94%;
          --accent-foreground: 200 50% 10%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --border: 200 20% 90%;
          --input: 200 20% 90%;
          --ring: 175.3 77.1% 40%;
          --radius: 0.5rem;
        }

        [data-theme='dark'] {
          /* Dark Slate */
          --background: 200 50% 10%;
          --foreground: 200 10% 98%;
          
          /* Darker Slate Card */
          --card: 200 50% 13%;
          --card-foreground: 200 10% 98%;
          --popover: 200 50% 13%;
          --popover-foreground: 200 10% 98%;

          /* Teal 400 (Neon) */
          --primary: 175 80% 50%;
          --primary-foreground: 200 50% 10%;

          /* Orange 500 */
          --secondary: 24.6 95% 53.1%;
          --secondary-foreground: 0 0% 100%;

          --muted: 200 30% 20%;
          --muted-foreground: 200 10% 65%;
          --accent: 200 30% 20%;
          --accent-foreground: 200 10% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 200 30% 20%;
          --input: 200 30% 20%;
          --ring: 175 80% 50%;
        }
      `}</style>
      <ColorDemoBoard
        title="Option 5: Cyber Teal"
        locale={locale}
        description="Modern and punchy. Vivid teal with high-visibility orange accents for a tech-startup look."
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
