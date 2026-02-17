import SectionHeading from "./landing/SectionHeading";
import FeatureCard from "./landing/FeatureCard";

const features = [
  { iconName: "Zap", title: "Lightning Fast", description: "Optimized for speed at every layer. Sub-second response times, always." },
  { iconName: "Shield", title: "Enterprise Security", description: "SOC 2 compliant with end-to-end encryption and role-based access." },
  { iconName: "BarChart3", title: "Real-time Analytics", description: "Track every metric that matters with live dashboards and alerts." },
  { iconName: "Layers", title: "Seamless Integrations", description: "Connect with 200+ tools your team already uses, out of the box." },
  { iconName: "Globe", title: "Global Scale", description: "Deploy across 30+ regions with automatic failover and load balancing." },
  { iconName: "Sparkles", title: "AI-Powered", description: "Smart automation that learns your patterns and suggests improvements." },
];

const Features = () => {
  return (
    <section id="features" className="py-28">
      <div className="container mx-auto px-6">
        <SectionHeading
          heading="Everything you need to ship"
          subheading="Powerful features designed for modern teams building at scale."
        />
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
