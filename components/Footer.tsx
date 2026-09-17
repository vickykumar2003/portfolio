function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Name & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="group inline-flex items-center text-xl font-bold tracking-wide text-white"
            >
              VICKY
              <span className="text-blue-500 transition-colors duration-300 group-hover:text-cyan-400">
                .
              </span>
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Frontend Developer • Building modern web experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/vickykumar2003"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                px-4 py-2
                text-sm text-gray-400
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:bg-blue-500/10
                hover:text-blue-400
              "
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/vicky-kumar-496521291/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                px-4 py-2
                text-sm text-gray-400
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:bg-blue-500/10
                hover:text-blue-400
              "
            >
              LinkedIn ↗
            </a>

            <a
              href="#contact"
              className="
                rounded-xl
                bg-blue-500
                px-4 py-2
                text-sm font-medium text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-blue-400
                hover:shadow-lg
                hover:shadow-blue-500/30
              "
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Vicky. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-xs text-gray-600">
            Built with
            <span className="text-gray-400">Next.js</span>
            <span>•</span>
            <span className="text-gray-400">Tailwind CSS</span>
            <span>•</span>
            <span className="text-blue-400">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
