import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 text-center font-mono text-xs text-muted sm:px-10">
      © {year} Bruno Ribeiro Pavaneli. {t("rights")}
    </footer>
  );
}
