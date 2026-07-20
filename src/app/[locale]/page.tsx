import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-1 flex-col">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_60%_20%,black,transparent)]"
        />
        <Header />
        <Hero />
      </div>
      <section className="border-t border-border px-6 py-20 sm:px-10">
        <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:gap-12">
          <About />
          <Experience />
        </div>
      </section>
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
