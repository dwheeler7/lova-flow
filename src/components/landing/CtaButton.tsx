import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface CtaButtonProps {
  text?: string;
  link?: { href: string; target?: string };
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  showArrow?: boolean;
  glowShadow?: boolean;
}

const CtaButton = ({
  text = "Click me",
  link,
  variant = "default",
  size = "default",
  showArrow = false,
  glowShadow = false,
}: CtaButtonProps) => {
  const className = cn(
    "gap-2 px-8 text-base font-semibold",
    glowShadow && "shadow-[var(--shadow-glow)]"
  );

  if (link) {
    return (
      <Button variant={variant} size={size} className={className} asChild>
        <a href={link.href} target={link.target}>
          {text}
          {showArrow && <ArrowRight className="h-4 w-4" />}
        </a>
      </Button>
    );
  }

  return (
    <Button variant={variant} size={size} className={className}>
      {text}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </Button>
  );
};

export default CtaButton;
