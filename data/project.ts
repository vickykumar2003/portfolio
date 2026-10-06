/**
 * Project image or screen recording. Mark stand-in images with `placeholder: true` so they're
 * labelled as such; without any media, an illustrative UI mockup is rendered instead.
 */
export type ProjectMedia =
  | { type: 'image'; src: string; alt: string; placeholder?: boolean }
  | { type: 'video'; src: string; poster?: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  /** What I built / was responsible for */
  contributions: string[];
  features: string[];
  technologies: string[];
  /** Omit until a real repository / deployment URL exists — the UI hides missing links */
  github?: string;
  demo?: string;
  /** Visual accent for the generated project artwork */
  accent: string;
  /** Shown in the main sticky showcase; others appear under "More work" */
  featured: boolean;
  media?: ProjectMedia;
};

// Descriptions and stacks follow Vicky_Kumar_Resume.pdf
export const projects: Project[] = [
  {
    slug: 'interview',
    title: 'SkillPat',
    tagline: 'AI-powered hiring platform',
    description:
      'An AI-powered platform that automates candidate onboarding, interviews, assessments, AI evaluation, and real-time proctoring to streamline the hiring process.',
    contributions: [
      'Built SkillPat with Next.js and TypeScript on the front end',
      'Integrated a Generative AI API to power automated interview evaluation and candidate assessment',
      'Used Redis and BullMQ for background job processing and queuing, with PostgreSQL as the primary database',
    ],
    features: [
      'Automated candidate onboarding',
      'AI-conducted interviews and assessments',
      'AI evaluation of candidate responses',
      'Real-time proctoring',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Express', 'Redis', 'BullMQ'],
    accent: '#8b7bff',
    featured: true,
    media: { type: 'image', src: '/skillpat.avif', alt: 'Placeholder image for SkillPat', placeholder: true },
  },
  {
    slug: 'hotel-booking',
    title: 'Hotel Booking Website',
    tagline: 'MERN reservation platform',
    description:
      'A scalable hotel booking platform enabling users to search, book, and manage reservations with secure authentication and role-based access for admins and users.',
    contributions: [
      'Developed RESTful APIs with full CRUD operations for hotels, rooms, and bookings',
      'Integrated Cloudinary for image uploads',
      'Ensured validation, error handling, and API security following MVC architecture',
    ],
    features: [
      'Search, book and manage reservations',
      'Secure authentication',
      'Role-based access (Admin & User)',
      'Cloudinary image uploads',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Cloudinary'],
    accent: '#f2b35b',
    featured: true,
    media: { type: 'image', src: '/hotel-booking-placeholder.svg', alt: 'Placeholder image for Hotel Booking Website', placeholder: true },
  },
  {
    slug: 'code-reviewer',
    title: 'Code Reviewer',
    tagline: 'AI code review with Gemini',
    description:
      'An AI-powered code reviewer built on the MERN stack and integrated with the Google Gemini API. It analyzes submitted code and returns intelligent feedback, optimization suggestions, and error explanations.',
    contributions: [
      'Integrated the Google Gemini API to generate review feedback',
      'Designed RESTful APIs and implemented secure backend logic',
      'Stored review history in MongoDB',
    ],
    features: [
      'Intelligent code feedback',
      'Optimization suggestions',
      'Error explanations',
      'Review history',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gemini API'],
    accent: '#4fd1a5',
    featured: true,
    media: { type: 'image', src: '/codereview.avif', alt: 'Placeholder image for Code Reviewer', placeholder: true },
  },
  {
    slug: 'food-delivery',
    title: 'E-Commerce Food Website',
    tagline: 'Food ordering web app',
    description:
      'A responsive food ordering web application built with React, using Context API and Redux for global state management of cart and product data.',
    contributions: [
      'Implemented global state management using Context API and Redux',
      'Developed dynamic product listing, filtering, and cart functionality',
      'Optimized component rendering',
    ],
    features: ['Dynamic product listing', 'Filtering', 'Cart management', 'Responsive layout'],
    technologies: ['React.js', 'Redux', 'Context API', 'JavaScript', 'HTML', 'CSS'],
    accent: '#ff7a59',
    featured: true,
    media: { type: 'image', src: '/fooddelivery.avif', alt: 'Placeholder image for E-Commerce Food Website', placeholder: true },
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Website',
    tagline: 'This site',
    description:
      'A modern personal portfolio built to showcase my skills and projects.',
    contributions: [
      'Designed and built the site with the Next.js App Router',
      'Statically generated project pages from typed data',
      'Dependency-free motion system with reduced-motion support',
    ],
    features: ['Responsive design', 'Dynamic project pages', 'Reusable components', 'Modern UI'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    accent: '#6d9bff',
    featured: false,
    media: { type: 'image', src: '/portfolio-placeholder.svg', alt: 'Placeholder image for Portfolio Website', placeholder: true },
  },
];
