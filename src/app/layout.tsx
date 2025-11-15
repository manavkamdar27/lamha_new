import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Lamhaa | Best Indian Restaurant in New Jersey & Pennsylvania",
  description: "Lamhaa is celebrated as the best Indian restaurant in New Jersey and Pennsylvania, offering refined dining, private events, and modern Indian cuisine.",
  keywords: "best Indian restaurant New Jersey, best Indian restaurant Pennsylvania, Lamhaa, Indian fine dining, NJ PA catering, private events",
  authors: [{ name: "Lamhaa" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Lamhaa | Best Indian Restaurant in New Jersey & Pennsylvania",
    description: "Discover why Lamhaa is trusted as the best Indian restaurant in both New Jersey and Pennsylvania with curated menus, tasting events, and bespoke celebrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamhaa | Best Indian Restaurant in NJ & PA",
    description: "Fine Indian dining, private events, and catering across New Jersey and Pennsylvania.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
