import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SEOHead } from "@/components/seo/seo-head";
import { CallButton } from "@/components/sections/call-button";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = SEOHead({
  title: "Gallery | Mexican Food Photos in Denver",
  description:
    "See tacos, seafood, pupusas, burritos, salsa bar and Mexican dishes from La Gaviota Mexican Restaurant in Denver.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Gallery", href: "/gallery" }]} />
      <section className="bg-background pb-16 pt-10 sm:pb-20 lg:pt-12">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-start">
            <SectionHeading
              eyebrow="Gallery"
              title="Plates with color, salsa and Denver appetite."
              description="A tighter look at tacos, seafood, pupusas, burritos and salsa bar favorites from La Gaviota. Photos should be approved before launch."
            />
            <div className="rounded-lg border bg-card p-5 shadow-sm">
              <p className="text-sm font-black uppercase text-accent">Hungry now?</p>
              <p className="mt-2 text-2xl font-black">Call ahead for carryout.</p>
              <p className="mt-2 text-sm font-bold leading-5 text-muted-foreground">
                Choose the craving, then confirm availability by phone.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <CallButton label="Call to Order" />
                <Button asChild variant="outline">
                  <Link href="/menu">View Menu</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>
    </>
  );
}
