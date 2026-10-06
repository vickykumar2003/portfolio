export const profile = {
  name: 'Vicky Kumar',
  shortName: 'Vicky',
  role: 'Full-Stack Developer',
  location: 'Jaipur, India',
  email: 'vickykrdst1008@gmail.com',
  resume: '/Vicky_Kumar_Resume.pdf',
  photo: '/vicky.jpg',
  summary:
    'Computer Science Engineering graduate with strong programming fundamentals and a focused interest in web development. I build responsive, scalable applications across the stack, with foundational knowledge in cyber security and networking.',
  socials: [
    { label: 'GitHub', handle: 'vickykumar2003', href: 'https://github.com/vickykumar2003' },
    {
      label: 'LinkedIn',
      handle: 'vicky-kumar-496521291',
      href: 'https://www.linkedin.com/in/vicky-kumar-496521291/',
    },
  ],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;
