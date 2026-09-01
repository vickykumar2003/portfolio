const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Mongo DB",
  "Java",
  "Python"
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-medium text-gray-400">
          SKILLS
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}