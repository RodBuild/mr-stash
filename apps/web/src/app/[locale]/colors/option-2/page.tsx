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
          /* Purple 600 */
          --primary: 262.1 83.3% 57.8%;
          --primary-foreground: 210 40% 98%;
          
          /* Amber 400 */
          --secondary: 38 92% 50%;
          --secondary-foreground: 260 50% 10%;

          /* Base Tones */
          --background: 260 20% 98%;
          --foreground: 260 20% 10%;
          --card: 0 0% 100%;
          --card-foreground: 260 20% 10%;
          --popover: 0 0% 100%;
          --popover-foreground: 260 20% 10%;
          --muted: 260 10% 96%;
          --muted-foreground: 260 10% 45%;
          --accent: 260 10% 96%;
          --accent-foreground: 260 20% 10%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --border: 260 10% 90%;
          --input: 260 10% 90%;
          --ring: 262.1 83.3% 57.8%;
          --radius: 0.5rem;
        }

        [data-theme='dark'] {
          /* Deep Violet Black */
          --background: 260 50% 5%;
          --foreground: 260 10% 98%;
          
          /* Dark Purple Card */
          --card: 260 50% 8%;
          --card-foreground: 260 10% 98%;
          --popover: 260 50% 8%;
          --popover-foreground: 260 10% 98%;

          /* Purple 500 (lighter for dark mode) */
          --primary: 263.4 70% 65%;
          --primary-foreground: 210 40% 98%;

          /* Amber */
          --secondary: 38 92% 50%;
          --secondary-foreground: 260 50% 10%;

          --muted: 260 30% 15%;
          --muted-foreground: 260 10% 65%;
          --accent: 260 30% 15%;
          --accent-foreground: 260 10% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 260 30% 15%;
          --input: 260 30% 15%;
          --ring: 263.4 70% 65%;
        }
      `}</style>
      <ColorDemoBoard
        title="Option 2: Royal Amethyst"
        locale={locale}
        description="A regal combination of deep purple and amber. Feels luxurious and creative."
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
