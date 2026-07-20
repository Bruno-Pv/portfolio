import { useTranslations } from "next-intl";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFastify,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVitest,
} from "react-icons/si";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/skills";

const icons: Record<string, IconType> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Fastify: SiFastify,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  "Prisma ORM": SiPrisma,
  "Drizzle ORM": SiDrizzle,
  Supabase: SiSupabase,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Vercel: SiVercel,
  Figma: SiFigma,
  Vitest: SiVitest,
  "React Testing Library": SiTestinglibrary,
};

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section
      id="skills"
      className="border-t border-border px-6 py-20 sm:px-10"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.key} delay={i * 0.05}>
              <div className="h-full rounded-lg border border-border p-6">
                <p className="mb-4 font-mono text-xs font-medium tracking-tight text-gold before:mr-1.5 before:content-['./']">
                  {t(`groups.${group.key}`)}
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {group.items.map((skill) => {
                    const Icon = icons[skill];
                    return (
                      <div
                        key={skill}
                        className="group flex flex-col items-center gap-2 rounded-md border border-border px-2 py-3 text-center transition-colors hover:border-gold"
                      >
                        {Icon && (
                          <Icon
                            size={18}
                            className="text-muted transition-colors group-hover:text-gold"
                          />
                        )}
                        <span className="font-mono text-[11px] leading-tight text-foreground">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
