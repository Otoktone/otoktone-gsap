import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
const Header = dynamic(() => import("@/app/components/Header/Header"));
const Footer = dynamic(() => import("@/app/components/Footer/Footer"));
const CookieBanner = dynamic(
  () => import("@/app/components/CookieBanner/CookieBanner")
);
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
  title: "Alexandre Desmot | Otoktone | Développeur Web Bretagne Vannes",
  description:
    "Alexandre Desmot | Développeur Web à Vannes (Bretagne). Conception, développement et intégration d'applications web. Création de sites et hébergement en France.",
  metadataBase: new URL("https://otoktone.fr"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: { url: "/favicon.ico", type: "image/x-icon" },
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Alexandre Desmot | Otoktone | Développeur Web Bretagne Vannes",
    description:
      "Alexandre Desmot | Développeur Web à Vannes (Bretagne). Conception, développement et intégration d'applications web. Création de sites et hébergement en France.",
    url: "https://otoktone.fr",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Otoktone | Alexandre Desmot | Développeur Web Bretagne Vannes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Desmot | Otoktone | Développeur Web Bretagne Vannes",
    description:
      "Alexandre Desmot | Développeur Web à Vannes (Bretagne). Conception, développement et intégration d'applications web. Création de sites et hébergement en France.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du site Otoktone | Alexandre Desmot | Développeur web Vannes",
      },
    ],
  },
  keywords: [
    "Otoktone",
    "Alexandre Desmot",
    "création site",
    "création site internet",
    "site internet",
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
        <CookieBanner />
      </body>
    </html>
  );
}
