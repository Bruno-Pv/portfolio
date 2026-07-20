import { ImageResponse } from "next/og";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#14181b",
          color: "#f2efe7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#4fa396",
            fontSize: 24,
            letterSpacing: -0.5,
            marginBottom: 28,
          }}
        >
          ./intro
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {t("name")}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 600,
            color: "#e08a3e",
            marginTop: 20,
          }}
        >
          {t("role")}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#9aa3ab",
            marginTop: 24,
          }}
        >
          {t("location")}
        </div>
      </div>
    ),
    { ...size },
  );
}
