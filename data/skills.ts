const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

export type Skill = {
  name: string;
  logo?: string;
  /** Monochrome dark logos that need inverting on a dark background */
  invert?: boolean;
};

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: Skill[];
};

// Categories follow the grouping in Vicky_Kumar_Resume.pdf
export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    blurb: 'Responsive, component-driven interfaces.',
    skills: [
      { name: 'React', logo: devicon('react/react-original') },
      { name: 'Next.js', logo: devicon('nextjs/nextjs-original'), invert: true },
      { name: 'TypeScript', logo: devicon('typescript/typescript-original') },
      { name: 'Redux', logo: devicon('redux/redux-original') },
      { name: 'Context API' },
      { name: 'Tailwind CSS', logo: devicon('tailwindcss/tailwindcss-original') },
      { name: 'HTML', logo: devicon('html5/html5-original') },
      { name: 'CSS', logo: devicon('css3/css3-original') },
    ],
  },
  {
    title: 'Backend',
    blurb: 'APIs, auth and server-side logic.',
    skills: [
      { name: 'Node.js', logo: devicon('nodejs/nodejs-original') },
      { name: 'Express.js', logo: devicon('express/express-original'), invert: true },
      { name: 'RESTful APIs' },
      { name: 'JWT Authentication' },
    ],
  },
  {
    title: 'Database',
    blurb: 'Document and relational data.',
    skills: [
      { name: 'MongoDB', logo: devicon('mongodb/mongodb-original') },
      { name: 'Mongoose' },
      { name: 'PostgreSQL', logo: devicon('postgresql/postgresql-original') },
    ],
  },
  {
    title: 'Languages',
    blurb: 'Foundations beyond the browser.',
    skills: [
      { name: 'JavaScript', logo: devicon('javascript/javascript-original') },
      { name: 'TypeScript', logo: devicon('typescript/typescript-original') },
      { name: 'Python', logo: devicon('python/python-original') },
      { name: 'Java', logo: devicon('java/java-original') },
      { name: 'C', logo: devicon('c/c-original') },
      { name: 'C++', logo: devicon('cplusplus/cplusplus-original') },
    ],
  },
  {
    title: 'DevOps & Tools',
    blurb: 'Shipping and collaborating.',
    skills: [
      { name: 'Docker', logo: devicon('docker/docker-original') },
      { name: 'Git', logo: devicon('git/git-original') },
      { name: 'GitHub', logo: devicon('github/github-original'), invert: true },
      { name: 'Postman', logo: devicon('postman/postman-original') },
      { name: 'VS Code', logo: devicon('vscode/vscode-original') },
    ],
  },
  {
    title: 'Core',
    blurb: 'The fundamentals underneath.',
    skills: [
      { name: 'Data Structures' },
      { name: 'Problem Solving' },
      { name: 'State Management' },
      { name: 'Networking Basics' },
      { name: 'Cyber Security Basics' },
    ],
  },
];
