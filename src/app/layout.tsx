import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRestorer from "@/components/ScrollRestorer";

/*
  inter.variable → injecte --font-inter sur <html>
  globals.css     → font-family: var(--font-inter), ... sur body & headings
*/
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700", "800"],
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
    images: [{ url: "/link.png", width: 1200, height: 630, alt: "theslash" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/link.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      {/* Preconnect to reduce DNS + TCP latency for GA */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-NQP0TCMF3D" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NQP0TCMF3D');
      `}</Script>

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
