export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  link?: string;
};

// Source: Vicky_Kumar_Resume.pdf. Add `date` / `link` when a verifiable credential URL is available.
export const certifications: Certification[] = [
  { title: 'Web Development', issuer: 'Grastech Pvt. Ltd.' },
  { title: 'C Programming', issuer: 'NPTEL' },
  {
    title: 'Hunt Till Down — Participant',
    issuer: 'Arya College of Engineering, Jaipur',
  },
];
