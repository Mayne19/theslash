import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRestorer from "@/components/ScrollRestorer";

/*
  inter.variable → injecte --font-inter sur <html>
  globals.css     → font-family: var(--font-inter), ... sur body & headings
*/
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "/ theslash — Création de sites web | Studio web francophone",
    template: "%s | / theslash",
  },
  description:
    "/ theslash crée des sites web modernes, performants et optimisés pour Google. Sites vitrines, landing pages, refontes et applications web sur mesure pour entrepreneurs francophones.",
  metadataBase: new URL("https://theslash.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://theslash.fr",
    siteName: "/ theslash",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo-icone.png" sizes="any" />
      </head>
      <body
        style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif", backgroundColor: "#F5F0E8" }}
        className="min-h-screen flex flex-col antialiased"
      >
        <ScrollRestorer />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
