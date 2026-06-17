import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";

type CallButtonProps = {
  label?: string;
  size?: "default" | "lg" | "sm";
  className?: string;
};

export function CallButton({ label = `Call ${business.phoneDisplay}`, size = "default", className }: CallButtonProps) {
  return (
    <Button asChild size={size} className={className}>
      <a href={business.phoneHref} aria-label={`Call La Gaviota at ${business.phoneDisplay}`}>
        <Phone aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}
