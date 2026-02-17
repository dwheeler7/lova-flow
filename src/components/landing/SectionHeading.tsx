interface SectionHeadingProps {
  heading?: string;
  subheading?: string;
}

const SectionHeading = ({
  heading = "Section Heading",
  subheading = "Section subheading goes here.",
}: SectionHeadingProps) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {heading}
      </h2>
      <p className="mx-auto max-w-md text-muted-foreground">{subheading}</p>
    </div>
  );
};

export default SectionHeading;
