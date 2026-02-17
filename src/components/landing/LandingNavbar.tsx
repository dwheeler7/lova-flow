import { Button } from "../ui/button";

interface LandingNavbarProps {
  logoText?: string;
  logoAccent?: string;
  navItems?: string;
  loginText?: string;
  loginLink?: { href: string; target?: string };
  signupText?: string;
  signupLink?: { href: string; target?: string };
}

function parseNavItems(raw: string): { label: string; href: string }[] {
  return raw
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [label, href] = line.split("|");
      return { label: label.trim(), href: href?.trim() || `#${label.trim().toLowerCase()}` };
    });
}

const LandingNavbar = ({
  logoText = "Starter",
  logoAccent = ".",
  navItems = "Features|#features\nPricing|#pricing\nDocs|#",
  loginText = "Log in",
  loginLink,
  signupText = "Sign up",
  signupLink,
}: LandingNavbarProps) => {
  const items = parseNavItems(navItems);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="text-lg font-bold text-foreground">
          {logoText}
          <span className="text-primary">{logoAccent}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {loginLink ? (
            <Button variant="ghost" size="sm" asChild>
              <a href={loginLink.href} target={loginLink.target}>
                {loginText}
              </a>
            </Button>
          ) : (
            <Button variant="ghost" size="sm">
              {loginText}
            </Button>
          )}

          {signupLink ? (
            <Button size="sm" asChild>
              <a href={signupLink.href} target={signupLink.target}>
                {signupText}
              </a>
            </Button>
          ) : (
            <Button size="sm">{signupText}</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
