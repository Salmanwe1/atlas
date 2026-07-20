import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Atlas — The Future of Independent Fashion Commerce",
  description: "Pakistan's premium digital destination for independent fashion, jewelry, footwear, and accessory brands. Grow beyond Instagram with a professional storefront, unified checkout, and automated operations.",
  metadataBase: new URL("https://project-atlas.pk"),
  openGraph: {
    title: "Project Atlas — The Future of Independent Fashion Commerce",
    description: "Grow beyond Instagram with a professional storefront, unified checkout, and automated operations.",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Atlas — The Future of Independent Fashion Commerce",
    description: "Pakistan's premium digital destination for independent fashion brands.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-gold-accent/30 selection:text-white">
        <SmoothScroll>
          <div className="noise-overlay" />
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
