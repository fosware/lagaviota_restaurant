import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { business } from "@/lib/site";

export function ContactCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <address className="space-y-4 not-italic">
          <p className="flex gap-3 text-sm font-bold leading-6">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <span>{business.address}</span>
          </p>
          <p className="flex gap-3 text-sm font-bold leading-6">
            <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <a className="hover:text-primary" href={business.phoneHref}>
              {business.phoneDisplay}
            </a>
          </p>
          <p className="flex gap-3 break-all text-sm font-bold leading-6">
            <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <a className="hover:text-primary" href={business.emailHref}>
              {business.email}
            </a>
          </p>
        </address>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button asChild>
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Call Now
            </a>
          </Button>
          <Button asChild variant="accent">
            <a href={business.mapsUrl} target="_blank" rel="noreferrer">
              <Navigation aria-hidden="true" />
              Get Directions
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
