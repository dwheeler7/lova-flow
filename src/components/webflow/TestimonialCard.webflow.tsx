// TestimonialCard — Webflow DevLink wrapper
import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import TestimonialCard from "../landing/TestimonialCard";

export default declareComponent(TestimonialCard, {
  name: "Testimonial Card",
  description: "A single customer testimonial card with star rating, quote, and author.",
  group: "Landing",
  props: {
    quote: props.Text({
      name: "Quote",
      defaultValue:
        "This platform cut our release cycle in half. The team collaboration features alone are worth every penny.",
    }),
    name: props.Text({
      name: "Author Name",
      defaultValue: "Sarah Chen",
    }),
    role: props.Text({
      name: "Author Role",
      defaultValue: "CTO at Meridian",
    }),
    initials: props.Text({
      name: "Avatar Initials",
      defaultValue: "SC",
    }),
    stars: props.Number({
      name: "Stars (0–5)",
      defaultValue: 5,
    }),
    animate: props.Boolean({
      name: "Animate",
      defaultValue: true,
    }),
    index: props.Number({
      name: "Stagger Index",
      defaultValue: 0,
    }),
  },
  options: { applyTagSelectors: true },
});
