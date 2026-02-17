import SectionHeading from "./landing/SectionHeading";
import PricingCard from "./landing/PricingCard";

const plans = [
  {
    planName: "Starter",
    price: "Free",
    period: "",
    description: "For individuals getting started",
    features: "Up to 3 projects\n1 GB storage\nCommunity support\nBasic analytics",
    ctaText: "Get Started",
    highlighted: false,
    buttonStyle: "outline" as const,
  },
  {
    planName: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing teams",
    features: "Unlimited projects\n100 GB storage\nPriority support\nAdvanced analytics\nCustom integrations\nTeam collaboration",
    ctaText: "Start Free Trial",
    highlighted: true,
    buttonStyle: "default" as const,
  },
  {
    planName: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: "Everything in Pro\nUnlimited storage\n24/7 dedicated support\nSSO & SAML\nSLA guarantee\nCustom contracts",
    ctaText: "Contact Sales",
    highlighted: false,
    buttonStyle: "outline" as const,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-28">
      <div className="container mx-auto px-6">
        <SectionHeading
          heading="Simple, transparent pricing"
          subheading="Start free. Scale as you grow. No hidden fees."
        />
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
