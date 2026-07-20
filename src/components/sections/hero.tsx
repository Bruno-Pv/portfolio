import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";

export function Hero() {
  const t = useTranslations("hero");

  const spec = [
    { label: "status", value: t("badge"), live: true },
    { label: "role", value: t("role") },
    { label: "location", value: t("location") },
    { label: "focus", value: t("subtitle") },
  ];

  return (
    <section className="relative grid flex-1 gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_340px] lg:items-center lg:py-28">
      <div>
        <Reveal>
          <p className="mb-5 font-mono text-xs font-medium tracking-tight text-accent before:mr-1.5 before:content-['./']">
            intro
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
            {t("greeting")} {t("name")}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="font-display mt-4 text-xl font-medium text-gold sm:text-2xl">
            {t("role")}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              {t("cta_projects")}
            </a>
            <a
              href="#contact"
              className="rounded-md border border-accent-strong px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              {t("cta_contact")}
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <dl className="divide-y divide-border rounded-lg border border-border bg-surface font-mono text-xs">
          {spec.map((row) => (
            <div
              key={row.label}
              className="flex items-start justify-between gap-4 px-5 py-3.5"
            >
              <dt className="shrink-0 text-muted">{row.label}</dt>
              <dd className="flex items-center gap-2 text-right text-foreground">
                {row.live && (
                  <span className="relative flex size-1.5 shrink-0">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                  </span>
                )}
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
