import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Project = {
  name: string;
  description: string;
  stack: string;
};

export function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as Project[];

  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-20 sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-lg border border-border p-6 transition-colors hover:border-gold">
                <h3 className="font-display mb-2 text-base font-bold">
                  {project.name}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="font-mono text-xs font-medium text-gold">
                  {project.stack}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
