import { routing } from "@/i18n/routing";
import { absoluteUrl, basePath } from "@/lib/site";

export default function RootPage() {
  const href = `${basePath}/${routing.defaultLocale}/`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <link rel="canonical" href={absoluteUrl(`${routing.defaultLocale}/`)} />
      <p>
        Redirecting to <a href={href}>{href}</a>…
      </p>
    </>
  );
}
