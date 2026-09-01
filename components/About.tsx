export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-medium text-gray-400">
          ABOUT ME
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          A little bit about me
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">

          <div>
            <p className="text-lg leading-8 text-gray-400">
              I'm a developer who enjoys building modern web
              applications and solving real-world problems with
              technology.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I enjoy learning new technologies, working on
              interesting projects, and continuously improving
              my development skills.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold">
              What I focus on
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li>→ Building modern web applications</li>
              <li>→ Writing clean and maintainable code</li>
              <li>→ Learning new technologies</li>
              <li>→ Solving real-world problems</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}