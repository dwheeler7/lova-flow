import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import SectionHeading from "../landing/SectionHeading";

export default declareComponent(SectionHeading, {
  name: "Section Heading",
  description: "A centered heading with subtitle for page sections.",
  group: "Landing",
  props: {
    heading: props.Text({
      name: "Heading",
      defaultValue: "Section Heading",
    }),
    subheading: props.Text({
      name: "Subheading",
      defaultValue: "Section subheading goes here.",
    }),
  },
  options: { applyTagSelectors: true },
});
