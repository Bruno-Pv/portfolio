import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { routing, type Locale } from "@/i18n/routing";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const ogLocales: Record<Locale, string> = {
  "pt-br": "pt_BR",
  en: "en_US",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#14181b" },
  ],
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");
  const url = absoluteUrl(`${locale}/`);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s — ${siteConfig.shortName}`,
    },
    description,
    keywords: [
      "Bruno Pavaneli",
      "Full Stack Developer",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Desenvolvedor Full Stack",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.githubUrl }],
    creator: siteConfig.shortName,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, absoluteUrl(`${l}/`)]),
        ),
        "x-default": absoluteUrl(`${routing.defaultLocale}/`),
      },
    },
    openGraph: {
      type: "profile",
      url,
      siteName: siteConfig.shortName,
      title,
      description,
      locale: ogLocales[locale as Locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons: {
      icon: [{ url: absoluteUrl("icon.svg"), type: "image/svg+xml" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "hero" });
  const messages = await getMessages({ locale });

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: t("role"),
    email: `mailto:${siteConfig.email}`,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
