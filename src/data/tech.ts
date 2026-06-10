import {
  siAndroid,
  siAstro,
  siAuth0,
  siAxios,
  siC,
  siCplusplus,
  siCss,
  siDart,
  siDocker,
  siDotnet,
  siDrizzle,
  siEslint,
  siExpress,
  siFigma,
  siFirebase,
  siFlutter,
  siFramer,
  siGit,
  siHtml5,
  siJavascript,
  siKotlin,
  siKubernetes,
  siMongodb,
  siMysql,
  siNestjs,
  siNetlify,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPrettier,
  siPrisma,
  siPython,
  siRabbitmq,
  siReact,
  siReacthookform,
  siReactquery,
  siRedis,
  siShadcnui,
  siSocketdotio,
  siStripe,
  siSvelte,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siVercel,
  siZod
} from 'simple-icons';

export type TechItem = {
  name: string;
  icon?: { path: string; hex: string };
};

export type SkillRow = {
  category: string;
  items: TechItem[];
  direction: 'left' | 'right';
};

const si = (icon: { path: string; hex: string }) => icon;

export const skillRows: SkillRow[] = [
  {
    category: 'Languages',
    direction: 'left',
    items: [
      { name: 'TypeScript', icon: si(siTypescript) },
      { name: 'JavaScript', icon: si(siJavascript) },
      { name: 'Python', icon: si(siPython) },
      { name: 'HTML', icon: si(siHtml5) },
      { name: 'CSS', icon: si(siCss) },
      { name: 'C', icon: si(siC) },
      { name: 'C++', icon: si(siCplusplus) },
      { name: 'PHP', icon: si(siPhp) },
      { name: 'Dart', icon: si(siDart) },
      { name: 'Kotlin', icon: si(siKotlin) }
    ]
  },
  {
    category: 'Frameworks',
    direction: 'right',
    items: [
      { name: 'React.js', icon: si(siReact) },
      { name: 'Next.js', icon: si(siNextdotjs) },
      { name: 'Node.js', icon: si(siNodedotjs) },
      { name: 'Express.js', icon: si(siExpress) },
      { name: 'NestJS', icon: si(siNestjs) },
      { name: 'ASP.NET Core', icon: si(siDotnet) },
      { name: 'Flutter', icon: si(siFlutter) },
      { name: 'Astro', icon: si(siAstro) },
      { name: 'Svelte', icon: si(siSvelte) }
    ]
  },
  {
    category: 'Libraries',
    direction: 'left',
    items: [
      { name: 'Tailwind CSS', icon: si(siTailwindcss) },
      { name: 'Shadcn/ui', icon: si(siShadcnui) },
      { name: 'Framer Motion', icon: si(siFramer) },
      { name: 'Prisma', icon: si(siPrisma) },
      { name: 'Drizzle ORM', icon: si(siDrizzle) },
      { name: 'React Query', icon: si(siReactquery) },
      { name: 'Axios', icon: si(siAxios) },
      { name: 'Zod', icon: si(siZod) },
      { name: 'React Hook Form', icon: si(siReacthookform) }
    ]
  },
  {
    category: 'Databases',
    direction: 'right',
    items: [
      { name: 'PostgreSQL', icon: si(siPostgresql) },
      { name: 'MongoDB', icon: si(siMongodb) },
      { name: 'MySQL', icon: si(siMysql) },
      { name: 'Redis', icon: si(siRedis) },
      { name: 'Firebase', icon: si(siFirebase) },
      { name: 'RabbitMQ', icon: si(siRabbitmq) }
    ]
  },
  {
    category: 'Tools',
    direction: 'left',
    items: [
      { name: 'Git', icon: si(siGit) },
      { name: 'Docker', icon: si(siDocker) },
      { name: 'Kubernetes', icon: si(siKubernetes) },
      { name: 'ESLint', icon: si(siEslint) },
      { name: 'Prettier', icon: si(siPrettier) },
      { name: 'Swagger', icon: si(siSwagger) },
      { name: 'Socket.io', icon: si(siSocketdotio) },
      { name: 'Stripe', icon: si(siStripe) },
      { name: 'Auth0', icon: si(siAuth0) },
      { name: 'Android', icon: si(siAndroid) }
    ]
  },
  {
    category: 'Cloud & DevOps',
    direction: 'right',
    items: [
      { name: 'Vercel', icon: si(siVercel) },
      { name: 'Netlify', icon: si(siNetlify) },
      { name: 'Figma', icon: si(siFigma) },
      { name: 'AWS', icon: undefined },
      { name: 'Heroku', icon: undefined },
      { name: 'CI/CD', icon: undefined }
    ]
  }
];
