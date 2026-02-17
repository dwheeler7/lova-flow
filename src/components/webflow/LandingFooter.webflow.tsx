import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import LandingFooter from "../landing/LandingFooter";

export default declareComponent(LandingFooter, {
  name: "Landing Footer",
  description: "A simple footer with copyright text and links.",
  group: "Landing",
  props: {
    copyrightText: props.Text({
      name: "Copyright Text",
      defaultValue: "\u00a9 2026 Starter. All rights reserved.",
    }),
    links: props.Text({
      name: "Links (Label|href per line)",
      defaultValue: "Privacy|#\nTerms|#\nContact|#",
    }),
  },
  options: { applyTagSelectors: true },
});
