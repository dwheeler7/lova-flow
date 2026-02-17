import { useRef } from "react";
import { cn } from "../../lib/utils";
import { useInView } from "../../hooks/useInView";

interface TestimonialCardProps {
  quote?: string;
  name?: string;
  role?: string;
  initials?: string;
  stars?: number;
  animate?: boolean;
  index?: number;
}

const TestimonialCard = ({
  quote = "This platform cut our release cycle in half. The team collaboration features alone are worth every penny.",
  name = "Sarah Chen",
  role = "CTO at Meridian",
  initials = "SC",
  stars = 5,
  animate = true,
  index = 0,
}: TestimonialCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-6 rounded-2xl border border-border bg-card p-8",
        animate && "opacity-0",
        animate && isInView && "animate-fade-in-up"
      )}
      style={animate ? { animationDelay: `${index * 100}ms` } : undefined}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: Math.min(Math.max(stars, 0), 5) }).map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 fill-primary text-primary"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="flex-1 text-base leading-relaxed text-foreground">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
