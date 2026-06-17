import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { business } from "@/lib/site";

export function HoursCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="size-5 text-primary" aria-hidden="true" />
          Business Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4 border-b pb-3">
            <dt className="font-black">Monday-Sunday</dt>
            <dd className="font-bold text-muted-foreground">9:00 am-7:00 pm</dd>
          </div>
          <div className="rounded-md bg-muted p-3 text-sm font-bold leading-6 text-muted-foreground">
            Call ahead for carryout, catering questions and party packages.
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
