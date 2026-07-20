import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { basePath } from "./src/lib/site";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
