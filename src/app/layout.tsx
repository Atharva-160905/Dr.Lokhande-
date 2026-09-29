import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { MedicalClinicJsonLd } from "@/components/common/JsonLd";
import { clinicConfig } from "@/data/clinic";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(clinicConfig.seo.siteUrl),
  title: {
    default: clinicConfig.seo.defaultTitle,
    template: clinicConfig.seo.titleTemplate,
  },
  description: clinicConfig.seo.description,
  keywords: clinicConfig.seo.keywords,
  authors: [
    { name: "Dr. Vijayanand Lokhande" },
    { name: "Dr. Rutuja Lokhande" },
  ],
  creator: clinicConfig.name,
  publisher: clinicConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: clinicConfig.seo.defaultTitle,
    description: clinicConfig.seo.description,
    url: clinicConfig.seo.siteUrl,
    siteName: clinicConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/clinic/hero-team.jpg",
        width: 1200,
        height: 630,
        alt: clinicConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: clinicConfig.seo.defaultTitle,
    description: clinicConfig.seo.description,
    images: ["/images/clinic/hero-team.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/WebsiteLogo.png",
    apple: "/WebsiteLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-primary antialiased font-sans pb-16 lg:pb-0">
        <MedicalClinicJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
