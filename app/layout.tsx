import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipLink } from "@/components/layout/skip-link";
import { StickyMobileCTA } from "@/components/layout/sticky-mobile-cta";
import { SchemaRestaurant } from "@/components/seo/schema-restaurant";
import { LanguageProvider } from "@/lib/i18n";
import { business, seo } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: seo.title,
    template: "%s | La Gaviota Mexican Restaurant",
  },
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: business.url,
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/fajitas-combinadas.webp",
        width: 1200,
        height: 800,
        alt: "Mexican and Central American food plate from La Gaviota Mexican Restaurant in Denver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/fajitas-combinadas.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#a65f3f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen antialiased">
        <LanguageProvider>
          <SkipLink />
          <SchemaRestaurant />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
