import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { useInView } from "../../hooks/useInView";

interface HeroSectionProps {
  badgeText?: string;
  headingLine1?: string;
  headingHighlight?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaLink?: { href: string; target?: string };
  secondaryCtaText?: string;
  secondaryCtaLink?: { href: string; target?: string };
  showGlow?: boolean;
  animate?: boolean;
}

const HeroSection = ({
  badgeText = "Now in public beta",
  headingLine1 = "Build faster.",
  headingHighlight = "Ship smarter.",
  description = "The modern platform for teams who move fast. Streamline your workflow, automate the boring stuff, and focus on what matters.",
  primaryCtaText = "Get Started Free",
  primaryCtaLink,
  secondaryCtaText = "See Demo",
  secondaryCtaLink,
  showGlow = true,
  animate = true,
}: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {showGlow && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-glow)" }}
        />
      )}

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div
          ref={ref}
          className={cn(
            "mx-auto max-w-3xl",
            animate && "opacity-0",
            animate && isInView && "animate-fade-in-up"
          )}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {badgeText}
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {headingLine1}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-300 bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {primaryCtaLink ? (
              <Button
                size="lg"
                className="gap-2 px-8 text-base font-semibold shadow-[var(--shadow-glow)]"
                asChild
              >
                <a href={primaryCtaLink.href} target={primaryCtaLink.target}>
                  {primaryCtaText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button
                size="lg"
                className="gap-2 px-8 text-base font-semibold shadow-[var(--shadow-glow)]"
              >
                {primaryCtaText}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}

            {secondaryCtaLink ? (
              <Button
                variant="outline"
                size="lg"
                className="px-8 text-base"
                asChild
              >
                <a href={secondaryCtaLink.href} target={secondaryCtaLink.target}>
                  {secondaryCtaText}
                </a>
              </Button>
            ) : (
              <Button variant="outline" size="lg" className="px-8 text-base">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
