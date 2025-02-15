import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
const Header = dynamic(() => import("@/app/components/Header/Header"));
const Footer = dynamic(() => import("@/app/components/Footer/Footer"));
import "./styles/main.scss";

const GTM: string = "GTM-KMBJZDN5";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexandre Desmot | Otoktone | Développeur Web Bretagne",
  description:
    "Alexandre Desmot | Otoktone, conception et développement d'application web. Design, création de site web et hébergement serveur en Bretagne.",
  metadataBase: new URL("https://www.otoktone.fr"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: { url: "/favicon.ico", type: "image/x-icon" },
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Alexandre Desmot | Otoktone | Développeur Web Bretagne",
    description:
      "Alexandre Desmot | Otoktone, conception et développement d'application web. Design, création de site web et hébergement serveur en Bretagne.",
    url: "https://www.otoktone.fr",
    type: "website",
    images: [
      {
        url: "/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Otoktone | Alexandre Desmot | Développeur web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Desmot | Otoktone | Développeur Web Bretagne",
    description:
      "Alexandre Desmot | Otoktone, conception et développement d'application web. Design, création de site web et hébergement serveur en Bretagne.",
    images: [
      {
        url: "/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Otoktone | Alexandre Desmot | Développeur web",
      },
    ],
  },
  keywords: [
    "Otoktone",
    "Alexandre Desmot",
    "création site internet",
    "développeur web",
    "Vannes",
    "Bretagne",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId={GTM} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
