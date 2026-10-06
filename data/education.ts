export type Education = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  score?: string;
  description: string;
};

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Arya Institute Of Engineering Technology And Management',
    period: '2022 — 2026',
    score: 'CGPA 8.5',
    description:
      'Focused on software development, web technologies, data structures, algorithms, and modern application development.',
  },
  {
    degree: 'Higher Secondary (12th)',
    field: 'Science',
    institution: 'Bindeshwar Singh College',
    period: '2018 — 2020',
    score: '70.06%',
    description:
      'Completed higher secondary education with a focus on Mathematics, Physics, and Computer Science.',
  },
  {
    degree: 'Secondary School (10th)',
    field: 'Bihar School Examination Board',
    institution: 'S.R.G.P.S High School',
    period: '2018',
    description:
      'Completed secondary education with a strong foundation in Mathematics, Science, and Social Studies.',
  },
];
