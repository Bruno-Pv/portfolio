import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  const t = useTranslations("experience");
  const backendItems = t.raw("backendItems") as string[];
  const frontendItems = t.raw("frontendItems") as string[];

  return (
    <div id="experience">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <Reveal>
        <div className="rounded-lg border border-border p-6">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg font-bold">{t("role")}</h3>
            <span className="font-mono text-xs text-muted">{t("period")}</span>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-1 text-sm font-semibold text-accent">
                {t("backendLabel")}
              </p>
              <p className="mb-3 font-mono text-xs text-muted">
                {t("backendStack")}
              </p>
              <ul className="space-y-2 text-sm text-muted">
                {backendItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-accent">
                {t("frontendLabel")}
              </p>
              <p className="mb-3 font-mono text-xs text-muted">
                {t("frontendStack")}
              </p>
              <ul className="space-y-2 text-sm text-muted">
                {frontendItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
