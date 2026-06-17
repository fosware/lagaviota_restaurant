import {
  Beef,
  Beer,
  Coffee,
  Fish,
  Sandwich,
  Soup,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MenuCategory as MenuCategoryType } from "@/lib/site";
import { cn } from "@/lib/utils";

const categoryIcons = {
  "Tacos La Gaviota": UtensilsCrossed,
  "Burritos Smothered": Beef,
  Antojitos: Sandwich,
  Seafood: Fish,
  "Breakfast & Soups": Soup,
  "Sides, Postres & Drinks": Beer,
};

const categoryAccent = {
  "Tacos La Gaviota": "bg-[#fff3df] text-primary",
  "Burritos Smothered": "bg-secondary/30 text-[#7d5520]",
  Antojitos: "bg-accent/12 text-accent",
  Seafood: "bg-[#e8f4f6] text-accent",
  "Breakfast & Soups": "bg-[#f7ead8] text-primary",
  "Sides, Postres & Drinks": "bg-secondary/25 text-[#7d5520]",
};

export function MenuCategory({ category, index }: { category: MenuCategoryType; index: number }) {
  const Icon = categoryIcons[category.name as keyof typeof categoryIcons] ?? Wheat;
  const accentClass = categoryAccent[category.name as keyof typeof categoryAccent] ?? "bg-muted text-primary";

  return (
    <Card
      id={category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
      className={cn(
        "scroll-mt-28 overflow-hidden",
        index === 0 && "lg:col-span-2",
      )}
    >
      <CardHeader className="border-b bg-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            {category.eyebrow ? <Badge variant="outline">{category.eyebrow}</Badge> : null}
            <CardTitle className="mt-3 flex items-center gap-3">
              <span className={cn("grid size-11 shrink-0 place-items-center rounded-md", accentClass)}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              {category.name}
            </CardTitle>
          </div>
          <span className="rounded-md bg-muted px-3 py-2 text-xs font-black uppercase text-muted-foreground">
            {category.items.length} options
          </span>
        </div>
        <p className="text-sm font-bold leading-6 text-muted-foreground">
          {category.description}
        </p>
      </CardHeader>
      <CardContent className="bg-[#fffdf8]">
        <ul className="grid gap-0 divide-y">
          {category.items.map((item, itemIndex) => (
            <li key={item.name} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-black">{item.name}</p>
              {item.description ? (
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              ) : null}
              </div>
              {itemIndex < 2 ? (
                <span className="w-fit rounded-md bg-muted px-2.5 py-1 text-xs font-black text-muted-foreground">
                  Good for carryout
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
