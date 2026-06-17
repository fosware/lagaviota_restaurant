import { ContactCard } from "./contact-card";
import { HoursCard } from "./hours-card";
import { MapEmbed } from "./map-embed";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Visit or call"
          title="Find La Gaviota on South Quebec in Denver."
          description="Call for carryout, catering and party packages, or use the map for directions to the restaurant."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-6">
            <ContactCard />
            <HoursCard />
          </div>
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
