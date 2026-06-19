import type { Metadata } from "next";
import { OrderForm } from "@/components/sections/order-form";
import { SEOHead } from "@/components/seo/seo-head";

export const metadata: Metadata = SEOHead({
  title: "Order Pickup | La Gaviota Mexican Restaurant Denver",
  description:
    "Order tacos, pupusas, seafood, tortas and plates for pickup from La Gaviota Mexican Restaurant in Denver.",
  path: "/order",
});

export default function OrderPage() {
  return <OrderForm />;
}
