"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-20">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/20 blur-[150px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl space-y-10">
          {/* Label - Small */}
          <div className="inline-block">
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
              Neuroscience Research
            </span>
          </div>

          {/* Heading - Large Hero Size */}
          <h1 className="text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl xl:text-8xl">
            Advancing
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Brain Science
            </span>
          </h1>

          {/* Description - Medium */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl lg:text-2xl">
            LumiveX Neura Labs conducts cutting-edge research on neural patterns, 
            brain connectivity, and cognitive functions. 
            Pioneering discoveries in neuroscience through rigorous scientific inquiry.
          </p>

          {/* CTA Buttons - Standard */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
            <a
              href="/research-papers"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10"
            >
              Explore Research
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-10 py-4 text-base font-semibold text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats - Large */}
          <div className="flex flex-wrap items-center justify-center gap-12 pt-4">
            <div>
              <p className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">20+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/30">Papers Published</p>
            </div>
            <div className="h-14 w-px bg-white/10" />
            <div>
              <p className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">10+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/30">Researchers</p>
            </div>
            <div className="h-14 w-px bg-white/10" />
            <div>
              <p className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">92%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/30">Peer Reviewed</p>
            </div>
          </div>

          {/* Research Areas - Small */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="rounded-full bg-white/5 px-4 py-1.5 text-xs text-white/40">Neural Connectivity</span>
            <span className="rounded-full bg-white/5 px-4 py-1.5 text-xs text-white/40">Cognitive Function</span>
            <span className="rounded-full bg-white/5 px-4 py-1.5 text-xs text-white/40">Brain Imaging</span>
            <span className="rounded-full bg-white/5 px-4 py-1.5 text-xs text-white/40">Neuroplasticity</span>
          </div>

          {/* Trust indicators - Extra Small */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            <span className="text-xs font-medium text-white/50 tracking-wider">Nature Neuroscience</span>
            <span className="text-xs font-medium text-white/50 tracking-wider">Brain Journal</span>
            <span className="text-xs font-medium text-white/50 tracking-wider">PLOS Biology</span>
            <span className="text-xs font-medium text-white/50 tracking-wider">eNeuro</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce lg:block">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-white/20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14m-7-7 7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}