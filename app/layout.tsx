import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = { themeColor: "#111111" };

export const metadata: Metadata = {
  title: "BRANDON — Logo, website, webshop en ondersteuning",
  description:
    "BRANDON bouwt logo's, huisstijlen, websites en webshops die strak ogen en goed werken. Creatief, opvallend en klaar om vertrouwen op te bouwen.",
  authors: [{ name: "BRANDON" }],
  openGraph: {
    title: "BRANDON — Logo, website, webshop en ondersteuning",
    description: "Alles wat nodig is om sterk online te staan. Strak, premium en creatief.",
    type: "website",
    images: ["/img/seo-afbeelding.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
