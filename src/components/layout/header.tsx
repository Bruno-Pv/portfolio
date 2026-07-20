"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="relative border-b border-border px-6 py-5 sm:px-10">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-tight"
        >
          Bruno Pavaneli
        </Link>
        <nav className="hidden items-center gap-6 font-mono text-xs text-muted lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold"
            >
              <span className="text-border">~</span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex size-8 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mt-4 flex flex-col gap-1 border-t border-border pt-4 font-mono text-xs lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <span className="text-border">~</span>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
