import { business } from "@/lib/site";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-lg border bg-muted">
      <iframe
        title="Interactive map to La Gaviota Mexican Restaurant in Denver"
        src={business.mapEmbed}
        className="h-[320px] w-full md:h-[430px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
