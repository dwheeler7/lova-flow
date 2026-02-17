import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import PricingCard from "../landing/PricingCard";

export default declareComponent(PricingCard, {
  name: "Pricing Card",
  description: "A pricing tier card with features list and CTA button.",
  group: "Landing",
  props: {
    planName: props.Text({
      name: "Plan Name",
      defaultValue: "Pro",
    }),
    price: props.Text({
      name: "Price",
      defaultValue: "$29",
    }),
    period: props.Text({
      name: "Period",
      defaultValue: "/mo",
    }),
    description: props.Text({
      name: "Description",
      defaultValue: "For growing teams",
    }),
    features: props.Text({
      name: "Features (one per line)",
      defaultValue: "Feature 1\nFeature 2\nFeature 3",
    }),
    ctaText: props.Text({
      name: "CTA Text",
      defaultValue: "Start Free Trial",
    }),
    ctaLink: props.Link({
      name: "CTA Link",
    }),
    highlighted: props.Boolean({
      name: "Highlighted",
      defaultValue: false,
    }),
    buttonStyle: props.Variant({
      name: "Button Style",
      options: ["default", "outline"],
      defaultValue: "default",
    }),
    animate: props.Boolean({
      name: "Animate",
      defaultValue: true,
    }),
  },
  options: { applyTagSelectors: true },
});
