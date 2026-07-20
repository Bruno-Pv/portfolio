export const skillGroups = [
  {
    key: "frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    key: "backend",
    items: ["Node.js", "Express", "Fastify"],
  },
  {
    key: "data",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Prisma ORM",
      "Drizzle ORM",
      "Supabase",
    ],
  },
  {
    key: "tools",
    items: ["Git", "GitHub", "Docker", "Vercel", "Figma"],
  },
  {
    key: "testing",
    items: ["Vitest", "React Testing Library"],
  },
] as const;
