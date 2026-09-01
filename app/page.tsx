import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-lg text-gray-400">Hello, I'm Vicky 👋</p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            I build things for the web.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I'm a developer passionate about building modern, useful and
            engaging digital experiences.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-medium text-black">
              View My Work
            </button>

            <button className="rounded-full border border-gray-700 px-6 py-3 font-medium">
              Contact Me
            </button>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Project/>
    </main>
  );
}
