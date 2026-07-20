export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-4">
      <div>
        <p className="mb-2 font-mono text-xs font-medium tracking-tight text-accent before:mr-1.5 before:content-['./']">
          {eyebrow}
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
