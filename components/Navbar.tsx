export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-white transition-colors duration-300 hover:text-blue-500"
        >
          VICKY<span className="text-blue-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-blue-500"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-blue-500"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-blue-500"
          >
            Projects
          </a>

          <a
            href="/Vicky_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-blue-500"
          >
            Resume
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
