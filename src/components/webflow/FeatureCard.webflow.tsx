import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import FeatureCard from "../landing/FeatureCard";

export default declareComponent(FeatureCard, {
  name: "Feature Card",
  description: "A single feature card with icon, title, and description.",
  group: "Landing",
  props: {
    iconName: props.Variant({
      name: "Icon",
      options: ["Zap", "Shield", "BarChart3", "Layers", "Globe", "Sparkles"],
      defaultValue: "Zap",
    }),
    title: props.Text({
      name: "Title",
      defaultValue: "Feature Title",
    }),
    description: props.Text({
      name: "Description",
      defaultValue: "Feature description goes here.",
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
