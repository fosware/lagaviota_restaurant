import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyMobileCTA } from "@/components/layout/sticky-mobile-cta";
import { SchemaRestaurant } from "@/components/seo/schema-restaurant";
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
        alt: "Mexican food plate from La Gaviota Mexican Restaurant in Denver",
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
    ],
    apple: "/favicon.svg",
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
    <html lang="en">
      <body className="min-h-screen antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SchemaRestaurant />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
