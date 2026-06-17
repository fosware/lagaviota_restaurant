import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { business } from "@/lib/site";

export function CateringInquiryForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Future Catering Request Form</CardTitle>
        <p className="text-sm font-bold leading-6 text-muted-foreground">
          This form is prepared for a confirmed endpoint. For now, please call the
          restaurant to discuss catering and party packages.
        </p>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" aria-describedby="form-status">
          <div className="grid gap-2">
            <label className="text-sm font-black" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="min-h-11 rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
              autoComplete="name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-black" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="min-h-11 rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
              autoComplete="tel"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-black" htmlFor="event">
              Event details
            </label>
            <textarea
              id="event"
              name="event"
              rows={4}
              className="rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            />
          </div>
          <p id="form-status" className="rounded-md bg-muted p-3 text-sm font-bold leading-6 text-muted-foreground">
            Online submissions are not active until the restaurant confirms where requests should be sent.
          </p>
          <Button type="button" disabled>
            Request Form Pending
          </Button>
          <Button asChild variant="accent">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
