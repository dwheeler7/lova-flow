import { useRef } from "react";
import { cn } from "../../lib/utils";
import { useInView } from "../../hooks/useInView";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface TestimonialsSectionProps {
  heading?: string;
  subheading?: string;
  testimonials?: string;
  animate?: boolean;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "This platform cut our release cycle in half. The team collaboration features alone are worth every penny.",
    name: "Sarah Chen",
    role: "CTO at Meridian",
    initials: "SC",
  },
  {
    quote: "We migrated from three different tools into this one. Setup took a day; we haven't looked back.",
    name: "James Okafor",
    role: "VP Engineering at Stackform",
    initials: "JO",
  },
  {
    quote: "The analytics dashboard gives us real-time visibility we never had before. Game-changer for our ops team.",
    name: "Priya Nair",
    role: "Head of Operations at Loopline",
    initials: "PN",
  },
];

function parseTestimonials(raw: string): Testimonial[] {
  return raw
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [quote = "", name = "", role = "", initials = ""] = line.split("|");
      return { quote, name, role, initials };
    });
}

const TestimonialsSection = ({
  heading = "Loved by teams worldwide",
  subheading = "Don't just take our word for it — here's what our customers say.",
  testimonials,
  animate = true,
}: TestimonialsSectionProps) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, threshold: 0.2 });

  const items = testimonials ? parseTestimonials(testimonials) : defaultTestimonials;

  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn(
            "mb-16 text-center",
            animate && "opacity-0",
            animate && headingInView && "animate-fade-in-up"
          )}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">{subheading}</p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <TestimonialCard key={i} {...t} animate={animate} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
