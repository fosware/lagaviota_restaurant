import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { business } from "@/lib/site";

type Breadcrumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  const schemaItems = [{ label: "Home", href: "/" }, ...items].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${business.url}${item.href}`,
  }));

  return (
    <>
      <nav className="container-page pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm font-bold text-muted-foreground">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              <Home className="size-4" aria-hidden="true" />
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.href} className="inline-flex items-center gap-2">
              <ChevronRight className="size-4" aria-hidden="true" />
              <Link
                href={item.href}
                aria-current="page"
                className="text-foreground hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaItems,
          }),
        }}
      />
    </>
  );
}
