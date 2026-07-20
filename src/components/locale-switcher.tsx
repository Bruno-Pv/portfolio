"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  "pt-br": "PT",
  en: "EN",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-1 font-mono text-xs">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale}
          className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
            loc === locale
              ? "bg-gold text-gold-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
