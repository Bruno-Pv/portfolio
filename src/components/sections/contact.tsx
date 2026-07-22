import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const t = useTranslations("contact");
  const email = t("email");
  const whatsapp = t("whatsapp");

  return (
    <section id="contact" className="border-t border-border px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <Reveal>
          <p className="mb-8 text-muted">{t("subtitle")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              <FaWhatsapp size={16} />
              {t("cta")}
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/Bruno-Pv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/bruno-r-pavaneli-750aba345"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
