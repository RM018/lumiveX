export default function About() {
  return (
    <section id="about-nurotech" className="relative overflow-hidden bg-white px-6 py-32 md:px-8 lg:py-40">
      
      {/* Soft Subtle Glow - Changed from Cyan to a very light Slate/Blue */}
      <div 
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 blur-[100px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto w-full max-w-[900px] text-center">
        
        {/* Refined Eyebrow Badge for Light Background */}
        <div className="mb-8 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-neutral-600 shadow-sm">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          ABOUT NUROTECH
        </div>

        {/* High-Contrast Typography */}
        <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl lg:text-7xl">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            AI-Powered.
          </span>
          <br />
          Future-Ready.
        </h2>

        {/* Sophisticated Gray Text */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 md:text-2xl lg:mt-10">
          Nurotech is <span className="font-semibold text-neutral-900">Aaruchudar&apos;s</span> flagship research initiative focused on delivering intelligent, scalable, and impactful products across industries.
        </p>

        {/* Clean Minimalist Divider */}
        <div className="mx-auto mt-14 flex items-center justify-center gap-3 lg:mt-20">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-neutral-200" />
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-neutral-200" />
        </div>

      </div>
    </section>
  );
}