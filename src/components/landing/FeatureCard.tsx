import { useRef } from "react";
import { Zap, Shield, BarChart3, Layers, Globe, Sparkles, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { useInView } from "../../hooks/useInView";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Shield,
  BarChart3,
  Layers,
  Globe,
  Sparkles,
};

interface FeatureCardProps {
  iconName?: string;
  title?: string;
  description?: string;
  animate?: boolean;
  index?: number;
}

const FeatureCard = ({
  iconName = "Zap",
  title = "Feature Title",
  description = "Feature description goes here.",
  animate = true,
  index = 0,
}: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const Icon = iconMap[iconName] ?? Zap;

  return (
    <div
      ref={ref}
      className={cn(
        "group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30",
        animate && "opacity-0",
        animate && isInView && "animate-fade-in-up"
      )}
      style={animate ? { animationDelay: `${index * 80}ms` } : undefined}
    >
      <div className="mb-4 inline-flex rounded-lg bg-secondary p-2.5">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
