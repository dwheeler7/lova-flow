interface LandingFooterProps {
  copyrightText?: string;
  links?: string;
}

function parseLinks(raw: string): { label: string; href: string }[] {
  return raw
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [label, href] = line.split("|");
      return { label: label.trim(), href: href?.trim() || "#" };
    });
}

const LandingFooter = ({
  copyrightText = "\u00a9 2026 Starter. All rights reserved.",
  links = "Privacy|#\nTerms|#\nContact|#",
}: LandingFooterProps) => {
  const parsedLinks = parseLinks(links);

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <span className="text-sm text-muted-foreground">{copyrightText}</span>
        <div className="flex gap-6">
          {parsedLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
