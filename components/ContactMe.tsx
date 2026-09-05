function ContactMe() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-20">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-blue-400">
            CONTACT
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-400">
            Have a project in mind or want to discuss an opportunity? I'd love
            to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <div
            className="
              group relative overflow-hidden rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-7
              backdrop-blur-xl
              transition-all duration-500
              hover:border-blue-500/30
              hover:bg-blue-500/[0.03]
              hover:shadow-2xl
              hover:shadow-blue-500/10
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none absolute
                -right-20 -top-20
                h-40 w-40 rounded-full
                bg-blue-500/20
                blur-3xl
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative">
              {/* Icon */}
              <div
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  border border-blue-500/20
                  bg-blue-500/10
                  text-2xl
                  transition-all duration-500
                  group-hover:scale-110
                "
              >
                ✉️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Get in Touch
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Whether you have a project idea, a job opportunity, or simply
                want to connect, feel free to reach out.
              </p>

              {/* Contact Details */}
              <div className="mt-8 space-y-5">
                {/* Email */}
                <div className="group/item">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Email
                  </p>

                  <a
                    href="mailto:your@email.com"
                    className="
                      mt-1 block text-sm font-medium
                      text-gray-300
                      transition-colors duration-300
                      hover:text-blue-400
                    "
                  >
                    your@email.com
                  </a>
                </div>

                {/* Location */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300">
                    Your City, India
                  </p>
                </div>

                {/* Availability */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Available for
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                    <p className="text-sm font-medium text-green-400">
                      Freelance & Full-time Opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Social Links */}
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Connect with me
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      px-4 py-2.5
                      text-sm font-medium text-gray-300
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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      px-4 py-2.5
                      text-sm font-medium text-gray-300
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-blue-500/30
                      hover:bg-blue-500/10
                      hover:text-blue-400
                    "
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="
              group relative overflow-hidden rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-7
              backdrop-blur-xl
              transition-all duration-500
              hover:border-blue-500/30
              hover:shadow-2xl
              hover:shadow-blue-500/10
            "
          >
            {/* Form glow */}
            <div
              className="
                pointer-events-none absolute
                -right-20 -top-20
                h-40 w-40 rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />

            <div className="relative">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>

              <p className="mt-2 text-sm text-gray-500">
                I'll get back to you as soon as possible.
              </p>

              {/* Name + Email */}
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full rounded-xl
                      border border-white/10
                      bg-black/30
                      px-4 py-3
                      text-sm text-white
                      placeholder:text-gray-600
                      outline-none
                      transition-all duration-300
                      focus:border-blue-500/50
                      focus:bg-blue-500/[0.03]
                      focus:ring-2
                      focus:ring-blue-500/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="
                      w-full rounded-xl
                      border border-white/10
                      bg-black/30
                      px-4 py-3
                      text-sm text-white
                      placeholder:text-gray-600
                      outline-none
                      transition-all duration-300
                      focus:border-blue-500/50
                      focus:bg-blue-500/[0.03]
                      focus:ring-2
                      focus:ring-blue-500/10
                    "
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  className="
                    w-full rounded-xl
                    border border-white/10
                    bg-black/30
                    px-4 py-3
                    text-sm text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all duration-300
                    focus:border-blue-500/50
                    focus:bg-blue-500/[0.03]
                    focus:ring-2
                    focus:ring-blue-500/10
                  "
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="
                    w-full resize-none rounded-xl
                    border border-white/10
                    bg-black/30
                    px-4 py-3
                    text-sm text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all duration-300
                    focus:border-blue-500/50
                    focus:bg-blue-500/[0.03]
                    focus:ring-2
                    focus:ring-blue-500/10
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  group/button mt-6 flex w-full
                  items-center justify-center gap-2
                  rounded-xl
                  bg-blue-500
                  px-5 py-3
                  text-sm font-semibold text-white
                  shadow-lg shadow-blue-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-blue-400
                  hover:shadow-blue-500/40
                "
              >
                Send Message
                <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm text-gray-500">
              Currently available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
