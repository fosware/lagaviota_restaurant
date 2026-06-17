import Link from "next/link";
import { CalendarCheck, MapPin, Phone, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { business } from "@/lib/site";

const actions = [
  {
    title: "Order Carryout",
    copy: "Call ahead and pick up tacos, tamales, burritos or a full plate.",
    href: business.phoneHref,
    label: "Call to order",
    icon: Phone,
  },
  {
    title: "Explore the Menu",
    copy: "Browse Mexican favorites, seafood, pupusas, tortas, drinks and more.",
    href: "/menu",
    label: "View menu",
    icon: Utensils,
  },
  {
    title: "Plan Catering",
    copy: "Ask about food for birthdays, graduations, parties and family gatherings.",
    href: "/catering",
    label: "Get catering",
    icon: CalendarCheck,
  },
  {
    title: "Find Us",
    copy: "Visit La Gaviota on South Quebec in Denver, open daily.",
    href: "/contact",
    label: "Location",
    icon: MapPin,
  },
];

export function QuickActions() {
  return (
    <section className="bg-accent pb-10 pt-14 lg:py-10">
      <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        {actions.map((action) => (
          <Link key={action.title} href={action.href} className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <Card className="h-full border-white/20 bg-white transition-transform group-hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="grid size-10 place-items-center rounded-md bg-secondary text-secondary-foreground">
                    <action.icon className="size-5" aria-hidden="true" />
                  </span>
                  {action.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-bold leading-6 text-muted-foreground">{action.copy}</p>
                <p className="mt-4 text-sm font-black text-primary">{action.label}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
