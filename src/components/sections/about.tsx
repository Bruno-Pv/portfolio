import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  const t = useTranslations("about");

  return (
    <div id="about">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <Reveal>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t("body")}
        </p>
      </Reveal>
    </div>
  );
}
