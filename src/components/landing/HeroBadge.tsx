interface HeroBadgeProps {
  text?: string;
  showDot?: boolean;
}

const HeroBadge = ({
  text = "Now in public beta",
  showDot = true,
}: HeroBadgeProps) => {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
      {showDot && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
      {text}
    </div>
  );
};

export default HeroBadge;
