import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
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
    default: "theslash — Création de sites web professionnels pour entrepreneurs | Studio web francophone",
    template: "%s | theslash",
  },
  description:
    "theslash crée des sites web modernes, performants et optimisés pour Google. Sites vitrines, landing pages, refontes et applications web sur mesure pour entrepreneurs francophones.",
  metadataBase: new URL("https://theslash.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://theslash.fr",
    siteName: "theslash",
    images: [{ url: "/link.svg", width: 1200, height: 630, alt: "theslash" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/link.svg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const isKeystatic = pathname.startsWith("/keystatic") || pathname.startsWith("/api/keystatic");

  return (
    <html lang="fr" className={inter.variable}>

      <body
        style={{ fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif", backgroundColor: "#F5F0E8" }}
        className="min-h-screen flex flex-col antialiased"
      >
        {!isKeystatic && <ScrollRestorer />}
        {!isKeystatic && <Header />}
        {isKeystatic ? children : <main className="flex-1">{children}</main>}
        {!isKeystatic && <Footer />}
      </body>
    </html>
  );
}
