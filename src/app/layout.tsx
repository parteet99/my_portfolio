import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { WelcomeScreen } from "@/components/welcome-screen";
import "./globals.css";
import { AnimatedBackground } from "@/components/animations/animated-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Parteetjot Singh | Frontend Developer",
  description:
    "Portfolio of Parteetjot Singh — Frontend Developer crafting modern web experiences.",
  icons: {
    icon: "/P.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          <AnimatedBackground />
          <WelcomeScreen />
          <Navbar />
          <main className="flex flex-1 flex-col pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
