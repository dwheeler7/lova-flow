import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import TestimonialsSection from "../landing/TestimonialsSection";

export default declareComponent(TestimonialsSection, {
  name: "Testimonials Section",
  description: "A grid of customer testimonial cards with star ratings and author avatars.",
  group: "Landing",
  props: {
    heading: props.Text({
      name: "Heading",
      defaultValue: "Loved by teams worldwide",
    }),
    subheading: props.Text({
      name: "Subheading",
      defaultValue: "Don't just take our word for it — here's what our customers say.",
    }),
    testimonials: props.Text({
      name: "Testimonials (Quote|Name|Role|Initials, one per line)",
      defaultValue:
        "This platform cut our release cycle in half. The team collaboration features alone are worth every penny.|Sarah Chen|CTO at Meridian|SC\nWe migrated from three different tools into this one. Setup took a day; we haven't looked back.|James Okafor|VP Engineering at Stackform|JO\nThe analytics dashboard gives us real-time visibility we never had before. Game-changer for our ops team.|Priya Nair|Head of Operations at Loopline|PN",
    }),
    animate: props.Boolean({
      name: "Animate",
      defaultValue: true,
    }),
  },
  options: { applyTagSelectors: true },
});
