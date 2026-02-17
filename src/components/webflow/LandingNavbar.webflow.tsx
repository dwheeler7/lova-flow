import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import LandingNavbar from "../landing/LandingNavbar";

export default declareComponent(LandingNavbar, {
  name: "Landing Navbar",
  description: "A fixed navigation bar with logo, nav links, and auth buttons.",
  group: "Landing",
  props: {
    logoText: props.Text({
      name: "Logo Text",
      defaultValue: "Starter",
    }),
    logoAccent: props.Text({
      name: "Logo Accent",
      defaultValue: ".",
    }),
    navItems: props.Text({
      name: "Nav Items (Label|href per line)",
      defaultValue: "Features|#features\nPricing|#pricing\nDocs|#",
    }),
    loginText: props.Text({
      name: "Login Text",
      defaultValue: "Log in",
    }),
    loginLink: props.Link({
      name: "Login Link",
    }),
    signupText: props.Text({
      name: "Signup Text",
      defaultValue: "Sign up",
    }),
    signupLink: props.Link({
      name: "Signup Link",
    }),
  },
  options: { applyTagSelectors: true },
});
