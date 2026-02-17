import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import CtaButton from "../landing/CtaButton";

export default declareComponent(CtaButton, {
  name: "CTA Button",
  description: "A call-to-action button with optional arrow and glow effect.",
  group: "Landing",
  props: {
    text: props.Text({
      name: "Text",
      defaultValue: "Click me",
    }),
    link: props.Link({
      name: "Link",
    }),
    variant: props.Variant({
      name: "Variant",
      options: ["default", "outline", "secondary", "ghost"],
      defaultValue: "default",
    }),
    size: props.Variant({
      name: "Size",
      options: ["default", "sm", "lg"],
      defaultValue: "default",
    }),
    showArrow: props.Boolean({
      name: "Show Arrow",
      defaultValue: false,
    }),
    glowShadow: props.Boolean({
      name: "Glow Shadow",
      defaultValue: false,
    }),
  },
  options: { applyTagSelectors: true },
});
