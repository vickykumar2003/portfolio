import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-16">
      {/* Background glow */}
      <div className="absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-4">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-blue-400">
            ABOUT ME
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            More than just a developer.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            I enjoy turning ideas into scalable, user-friendly web applications
            with clean code, modern technologies, and seamless
            frontend-to-backend experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Profile Image */}
          <div className="group relative mx-auto w-full max-w-md">
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 opacity-50 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/20 group-hover:opacity-80" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-blue-500/10 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/30">
              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/vicky.jpg"
                  alt="Vicky"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Image overlay */}
              <div className="absolute inset-x-2 bottom-2 rounded-b-2xl bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-16">
                <p className="text-sm text-gray-400">Frontend Developer</p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  Building for the web ✨
                </h3>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 bottom-18 rounded-2xl border border-white/10 bg-[#111]/90 px-5 py-4 shadow-xl backdrop-blur-xl transition-transform duration-500 group-hover:translate-x-2">
              <p className="text-xs text-gray-500">Passion</p>

              <p className="mt-1 font-semibold text-blue-400">
                Code • Design • Learn
              </p>
            </div>
          </div>

          {/* About Content */}
          <div>
            <p className="text-lg leading-8 text-gray-300">
              I'm a developer who enjoys building modern web applications and
              solving real-world problems through technology.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I enjoy learning new technologies, working on interesting
              projects, and continuously improving my development skills. My
              goal is to create experiences that are not only functional, but
              also simple, intuitive and enjoyable to use.
            </p>

            {/* Focus Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.05]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  💻
                </div>

                <h3 className="font-semibold text-white">Modern Development</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Building responsive and scalable web applications.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/[0.05]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
                  ✨
                </div>

                <h3 className="font-semibold text-white">Clean UI</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Creating simple, intuitive and engaging interfaces.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/[0.05]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
                  🚀
                </div>

                <h3 className="font-semibold text-white">
                  Continuous Learning
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Always exploring better tools and technologies.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-green-500/[0.05]">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-xl">
                  🎯
                </div>

                <h3 className="font-semibold text-white">Problem Solving</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Turning real-world problems into practical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
