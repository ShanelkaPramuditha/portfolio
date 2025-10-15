'use client';

import { motion } from 'motion/react';
import {
  Code,
  Braces,
  Database,
  Cloud,
} from 'lucide-react';

const SKILLS_CATEGORIES = [
  {
    category: 'Languages',
    icon: Code,
    skills: [
      'TypeScript',
      'JavaScript',
      'Python',
      'HTML',
      'CSS',
      'C#',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Braces,
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'NestJS',
      'Tailwind CSS',
      'Shadcn/ui',
      'Framer Motion',
      'Prisma',
      'Drizzle ORM',
    ],
  },
  {
    category: 'Databases & Tools',
    icon: Database,
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Git',
      'Docker',
      'ESLint',
      'Prettier',
      'Jira',
      'Figma',
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      'AWS',
      'Vercel',
      'Netlify',
      'Heroku',
      'Kubernetes',
      'CI/CD',
    ],
  },
];

// Animation variants for the skill tags
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation for each skill tag
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Skills() {

  return (
    <section id='skills' className='flex w-full flex-col items-center py-16 sm:py-24'>
      <div className='container'>
        <div className='max-w-3xl mx-auto w-full text-center mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2'>
            My Skills & Expertise
          </h2>
          <p className='text-slate-600 dark:text-slate-300'>
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
          {SKILLS_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.category + index}
              className='rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }} // Animate once when in view
              variants={containerVariants}
            >
              <h3 className='mb-4 flex items-center text-xl font-semibold text-slate-800 dark:text-slate-100'>
                <category.icon className='mr-3 h-6 w-6 text-sky-500' />
                {category.category}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className='inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm dark:bg-slate-800 dark:text-sky-300'
                    variants={itemVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
