import { business } from "@/lib/site";

export function SchemaRestaurant() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    servesCuisine: ["Mexican", "Central American", "Salvadoran", "Honduran"],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressStreet,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: business.country,
    },
    telephone: business.phoneDisplay,
    email: business.email,
    openingHours: "Mo-Su 09:00-19:00",
    priceRange: "$",
    url: business.url,
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
