import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import HeroBadge from "../landing/HeroBadge";

export default declareComponent(HeroBadge, {
  name: "Hero Badge",
  description: "A small pill-shaped badge, typically above a hero heading.",
  group: "Landing",
  props: {
    text: props.Text({
      name: "Text",
      defaultValue: "Now in public beta",
    }),
    showDot: props.Boolean({
      name: "Show Dot",
      defaultValue: true,
    }),
  },
  options: { applyTagSelectors: true },
});
