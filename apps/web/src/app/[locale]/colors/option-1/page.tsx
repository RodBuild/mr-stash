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
          /* Electric Blue */
          --primary: 221.7 85.5% 50%;
          --primary-foreground: 210 40% 98%;
          
          /* Gold */
          --secondary: 47.9 95.8% 53.1%;
          --secondary-foreground: 222.2 47.4% 11.2%;

           /* Base Tones */
          --background: 0 0% 100%;
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
          --ring: 221.7 85.5% 50%;
          --radius: 0.5rem;
        }

        [data-theme='dark'] {
          /* Pure Black Background */
          --background: 0 0% 0%;
          --foreground: 210 40% 98%;
          
          /* Dark Gray Card */
          --card: 222 0% 6%;
          --card-foreground: 210 40% 98%;
          --popover: 222 0% 6%;
          --popover-foreground: 210 40% 98%;

          /* Electric Blue - Same as light */
          --primary: 221.7 85.5% 50%;
          --primary-foreground: 210 40% 98%;

          /* Gold */
          --secondary: 47.9 95.8% 53.1%;
          --secondary-foreground: 222.2 47.4% 11.2%;

          --muted: 217.2 32.6% 17.5%;
          --muted-foreground: 215 20.2% 65.1%;
          --accent: 217.2 32.6% 17.5%;
          --accent-foreground: 210 40% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 40% 98%;
          --border: 217.2 32.6% 17.5%;
          --input: 217.2 32.6% 17.5%;
          --ring: 221.7 85.5% 50%;
        }
      `}</style>
      <ColorDemoBoard
        title="Option 1: Electric Classic"
        locale={locale}
        description="The original concept. High-contrast Electric Blue and Gold against a deep black background."
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
