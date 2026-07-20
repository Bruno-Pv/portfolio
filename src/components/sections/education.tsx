import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Language = {
  name: string;
  level: string;
};

export function Education() {
  const t = useTranslations("education");
  const languages = t.raw("languages") as Language[];

  return (
    <section
      id="education"
      className="border-t border-border px-6 py-20 sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-4 rounded-lg border border-border p-6">
              <div>
                <p className="font-display text-sm font-semibold">
                  {t("degree")}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {t("period")}
                </p>
              </div>
              <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {t("status")}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-lg border border-border p-6">
              <p className="mb-3 text-sm font-semibold">
                {t("languagesLabel")}
              </p>
              <ul className="space-y-2.5">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground">{lang.name}</span>
                    <span className="font-mono text-xs text-muted">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
