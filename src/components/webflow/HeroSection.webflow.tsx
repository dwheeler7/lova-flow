import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import HeroSection from "../landing/HeroSection";

export default declareComponent(HeroSection, {
  name: "Hero Section",
  description: "A full hero section with badge, gradient heading, description, and CTA buttons.",
  group: "Landing",
  props: {
    badgeText: props.Text({
      name: "Badge Text",
      defaultValue: "Now in public beta",
    }),
    headingLine1: props.Text({
      name: "Heading Line 1",
      defaultValue: "Build faster.",
    }),
    headingHighlight: props.Text({
      name: "Heading Highlight",
      defaultValue: "Ship smarter.",
    }),
    description: props.Text({
      name: "Description",
      defaultValue:
        "The modern platform for teams who move fast. Streamline your workflow, automate the boring stuff, and focus on what matters.",
    }),
    primaryCtaText: props.Text({
      name: "Primary CTA Text",
      defaultValue: "Get Started Free",
    }),
    primaryCtaLink: props.Link({
      name: "Primary CTA Link",
    }),
    secondaryCtaText: props.Text({
      name: "Secondary CTA Text",
      defaultValue: "See Demo",
    }),
    secondaryCtaLink: props.Link({
      name: "Secondary CTA Link",
    }),
    showGlow: props.Boolean({
      name: "Show Glow",
      defaultValue: true,
    }),
    animate: props.Boolean({
      name: "Animate",
      defaultValue: true,
    }),
  },
  options: { applyTagSelectors: true },
});
