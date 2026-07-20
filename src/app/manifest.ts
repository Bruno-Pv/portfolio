import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: "Portfolio of a Full Stack developer.",
    start_url: "/portfolio/pt-br/",
    display: "standalone",
    background_color: "#f7f6f2",
    theme_color: "#c1631b",
    icons: [
      {
        src: "/portfolio/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
