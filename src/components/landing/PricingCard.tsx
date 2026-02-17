import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { useInView } from "../../hooks/useInView";

interface PricingCardProps {
  planName?: string;
  price?: string;
  period?: string;
  description?: string;
  features?: string;
  ctaText?: string;
  ctaLink?: { href: string; target?: string };
  highlighted?: boolean;
  buttonStyle?: "default" | "outline";
  animate?: boolean;
}

const PricingCard = ({
  planName = "Pro",
  price = "$29",
  period = "/mo",
  description = "For growing teams",
  features = "Feature 1\nFeature 2\nFeature 3",
  ctaText = "Start Free Trial",
  ctaLink,
  highlighted = false,
  buttonStyle = "default",
  animate = true,
}: PricingCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const featureList = features.split("\n").filter(Boolean);

  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-xl border p-8",
        highlighted
          ? "border-primary/50 bg-card shadow-[var(--shadow-glow)]"
          : "border-border bg-card",
        animate && "opacity-0",
        animate && isInView && "animate-fade-in-up"
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
          Popular
        </div>
      )}

      <h3 className="mb-1 text-lg font-semibold text-foreground">{planName}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        {period && <span className="text-muted-foreground">{period}</span>}
      </div>

      {ctaLink ? (
        <Button className="mb-6 w-full" variant={buttonStyle} asChild>
          <a href={ctaLink.href} target={ctaLink.target}>
            {ctaText}
          </a>
        </Button>
      ) : (
        <Button className="mb-6 w-full" variant={buttonStyle}>
          {ctaText}
        </Button>
      )}

      <ul className="space-y-3">
        {featureList.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Check className="h-4 w-4 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
