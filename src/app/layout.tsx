import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IKON SKILLS | AI-Powered Micro-Credentials & Degrees",
  description: "Master verified skills and stack them into university degrees with IKON SKILLS.",
};

import ReduxProviderWrapper from "@/redux/readux-provider/reduxProviderWrapper";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${cormorant.variable} ${jetbrains.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ReduxProviderWrapper>
          <Toaster position="top-right" richColors />
          <div className="page-bg-overlay" />
          <Navbar />
          <div className="relative z-10 flex-1">{children}</div>
          <Footer />
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
