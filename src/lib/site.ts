export const basePath = "/portfolio";

export const siteConfig = {
  name: "Bruno Ribeiro Pavaneli",
  shortName: "Bruno Pavaneli",
  url: `https://bruno-pv.github.io${basePath}/`,
  githubUrl: "https://github.com/Bruno-Pv",
  linkedinUrl: "https://linkedin.com/in/bruno-r-pavaneli-750aba345",
  email: "pavanelli.ribe@gmail.com",
};

export function absoluteUrl(path: string = "") {
  return `${siteConfig.url}${path.replace(/^\//, "")}`;
}
