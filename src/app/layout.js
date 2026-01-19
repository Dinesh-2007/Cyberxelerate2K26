import { Geist_Mono, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section";
import ThemeSwitch from "@/components/ui/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { SparklesCore } from "@/components/ui/sparkles";
import { Analytics } from "@vercel/analytics/react";
import RegClosed from "@/components/RegClosed";

// Custom fonts
const soloLevelingFont = localFont({
  src: "../fonts/BlackKnight-Regular.ttf",
  display: "swap",
});
const unifrakturMaguntia = localFont({
  src: "../fonts/UnifrakturMaguntia-Regular.ttf",
  display: "swap",
});
const mirageFinal = localFont({
  src: "../fonts/Mirage-final.ttf",
  display: "swap",
});
const metalGothic = localFont({
  src: "../fonts/MetalGothic-DemoVersion-Regular.ttf",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

// Metadata
export const metadata = {
  title: "CyberXelerate 2K25",
  description:
    "CyberXelerate 2K25 at RMK College of Engineering and Technology offers technical and non-technical competitions, including coding challenges and penetration testing. No registration fees. Cash prizes available!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth !scroll-snap-y-mandatory">
      <body
        className={`${mirageFinal.className} antialiased bg-gradient-to-r from-white via-blue-600 to-red-700 text-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#423d3d]" />
          <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-transparent" />
        </div>

        {/* <div className="fixed top-0 left-0 right-0 z-10 py-10">
          <RegClosed />
        </div> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="w-full h-full absolute -z-20">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <main className="relative min-h-screen flex flex-col">
              {children}
              <Analytics />
              <div className="z-20">
                <ThemeSwitch />
              </div>
            </main>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
