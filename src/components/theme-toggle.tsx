"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="size-8 rounded-full border border-border" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
