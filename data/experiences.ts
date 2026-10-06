export type Experience = {
  role: string;
  company: string;
  type: 'Internship' | 'Training';
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Software Development Intern',
    company: 'HJ Infotech',
    type: 'Internship',
    period: 'March 2026 — Sep 2026',
    description:
      'Worked on full-stack web application development, contributing to the design, development, and testing of features — responsive frontend interfaces, backend services, REST APIs, and database integration. Focused on writing clean, maintainable code and building reliable solutions using modern web technologies.',
    achievements: [
      'Developed responsive web interfaces using React.js and Next.js',
      'Built and integrated REST APIs with backend services',
      'Worked with Node.js, Express.js, MongoDB, and PostgreSQL',
      'Collaborated with the engineering team on building and maintaining full-stack functionality',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    role: 'MERN Stack Training',
    company: 'Grastech Pvt. Ltd., Noida',
    type: 'Training',
    period: 'June 2025 — Dec 2025',
    description:
      'Completed hands-on training in full-stack web development using MongoDB, Express.js, React.js, and Node.js. Developed RESTful APIs, implemented JWT authentication, built responsive front-end interfaces, and integrated MongoDB database. Built and deployed full-stack applications following MVC architecture.',
    achievements: [
      'Developed full-stack applications using the MERN stack',
      'Implemented JWT authentication and secure RESTful APIs',
      'Built and deployed applications following MVC architecture',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
  },
  {
    role: 'Industrial Training',
    company: 'Redington',
    type: 'Training',
    period: 'Feb 2025 — Mar 2025',
    description:
      'Practiced fundamentals of cybersecurity including network security and ethical hacking. Learned to identify vulnerabilities including SQL Injection and XSS. Used tools such as Burp Suite and Havij.',
    achievements: [
      'Identified common web vulnerabilities including SQL Injection and XSS',
      'Performed basic web security testing using Burp Suite',
      'Learned fundamentals of network security and ethical hacking',
    ],
    technologies: ['Burp Suite', 'Havij', 'Network Security'],
  },
  {
    role: 'Web Development',
    company: 'Raise-Digital',
    type: 'Training',
    period: 'May 2024 — June 2024',
    description:
      'Gained foundation knowledge of web development, focusing on front-end technologies. Learned and practiced HTML, CSS, JS and React.js to create responsive and structured web pages.',
    achievements: [
      'Built responsive web pages using HTML, CSS, and JavaScript',
      'Developed reusable UI components using React.js',
      'Applied responsive design principles to improve user experience',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
];
