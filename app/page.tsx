import About from '@/components/About';
import Certification from '@/components/Certification';
import ContactMe from '@/components/ContactMe';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import Skills from '@/components/Skills';

export default function Home() {
  const workingOn = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'REST APIs',
    'Git',
    'Docker',
  ];
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Availability badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for opportunities
            </div>

            {/* Greeting */}
            <p className="mb-4 text-lg font-medium text-blue-400">
              Hello, I'm Vicky 👋
            </p>

            {/* Main heading */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              I build
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                modern web experiences.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400 lg:mx-0">
              I'm a passionate full-stack developer focused on building modern,
              scalable, and user-friendly web applications. I work across both
              frontend and backend technologies to create responsive
              experiences, robust APIs, and reliable solutions using modern web
              technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-blue-500 px-7 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-blue-500/40"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-medium text-gray-200 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                Let's Talk
              </a>
            </div>

            {/* Small tech stack */}
            <div className="mt-10">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-600">
                Currently working with
              </p>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {workingOn.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-blue-500/30 hover:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[100px]" />

            {/* Code Card */}
            <div className="relative mx-auto max-w-md rotate-2 rounded-3xl border border-white/10 bg-white/[0.03] p-1 shadow-2xl shadow-blue-500/10 backdrop-blur-xl transition-transform duration-500 hover:rotate-0">
              {/* Window header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />

                <span className="ml-auto text-xs text-gray-600">
                  developer.tsx
                </span>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-7">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = {'{'}
                </p>

                <p className="pl-5">
                  <span className="text-gray-500">name:</span>{' '}
                  <span className="text-green-400">'Vicky Kumar'</span>,
                </p>

                <p className="pl-5">
                  <span className="text-gray-500">role:</span>{' '}
                  <span className="text-green-400">'FullStack Developer'</span>,
                </p>

                <p className="pl-5">
                  <span className="text-gray-500">passion:</span>{' '}
                  <span className="text-green-400">'Building for the web'</span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-gray-500">focus:</span> [
                </p>

                <p className="pl-10 text-cyan-400">'Frontend',</p>

                <p className="pl-10 text-cyan-400">'Backend',</p>

                <p className="pl-10 text-cyan-400">'APIs & Databases',</p>

                <p className="pl-10 text-cyan-400">'Scalable Solutions',</p>

                <p className="pl-5">]</p>

                <p>{'}'}</p>

                <p className="mt-4">
                  <span className="text-purple-400">return</span>{' '}
                  <span className="text-blue-400">developer</span>;
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-8 rounded-2xl border border-white/10 bg-[#111]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-xs text-gray-500">Specializing in</p>
              <p className="mt-1 font-semibold text-white">
                Full-Stack Development ⚡
              </p>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Project />
      <Experience />
      <Education />
      <Certification />
      <ContactMe />
      <Footer />
    </main>
  );
}
