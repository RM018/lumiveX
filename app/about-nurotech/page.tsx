"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        {/* Hero Section (dark) */}
        <section className="relative overflow-hidden bg-black pt-32 pb-24">
          {/* Animated background gradients */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/8 blur-[120px] animate-pulse" />
            <div className="absolute right-1/4 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/6 blur-[100px] animate-pulse delay-700" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  ABOUT AARUCHUDAR
                </p>
              </div>

              <h1 className="text-5xl font-black leading-[1.1] text-white md:text-6xl lg:text-7xl xl:text-8xl">
                Decoding Human
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-teal-200">
                  Intelligence
                </span>
              </h1>
              
              <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-slate-300 lg:text-3xl">
                Pioneering neuroscience research and innovation to unlock the mysteries of the human brain and advance intelligent systems.
              </p>

              <div className="mt-12 flex flex-wrap gap-12 text-white">
                <div>
                  <div className="text-5xl font-black lg:text-6xl">2018</div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-slate-400">Founded</div>
                </div>
                <div>
                  <div className="text-5xl font-black lg:text-6xl">200+</div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-slate-400">Publications</div>
                </div>
                <div>
                  <div className="text-5xl font-black lg:text-6xl">120+</div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-slate-400">Researchers</div>
                </div>
                <div>
                  <div className="text-5xl font-black lg:text-6xl">15+</div>
                  <div className="mt-2 text-sm uppercase tracking-wider text-slate-400">Global Labs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story (light) */}
        <section className="bg-white px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mb-6 inline-block">
                  <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                    OUR STORY
                  </p>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                  From Curiosity to Breakthrough
                </h2>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                  <p>
                    Aaruchudar was founded on a fundamental belief: understanding human intelligence is the key to creating truly transformative artificial intelligence. Our journey began with a simple question: what can we learn from the brain to build better AI?
                  </p>
                  <p>
                    What started as a dedicated team of neuroscientists and AI researchers has evolved into a global organization at the forefront of computational neuroscience. We&apos;ve grown from a single research lab in Bangalore to a network of 15+ research centers across Asia, Europe, and North America.
                  </p>
                  <p>
                    Today, Aaruchudar stands as a beacon of innovation, advancing our understanding of neural mechanisms while building AI systems inspired by biological intelligence. Our research has influenced thousands of scientists and shaped the future of neurotechnology.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative border-l-4 border-cyan-600 pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-cyan-600" />
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-500">2018</div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">Foundation & Vision</h3>
                  <p className="mt-3 text-slate-600">
                    Established in Bangalore with a focus on understanding neural patterns and human cognition through advanced computational methods.
                  </p>
                </div>

                <div className="relative border-l-4 border-blue-600 pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600" />
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-500">2020</div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">Research Expansion</h3>
                  <p className="mt-3 text-slate-600">
                    Launched breakthrough research in brain-computer interfaces. First 50 peer-reviewed publications. Team grew to 40+ scientists.
                  </p>
                </div>

                <div className="relative border-l-4 border-teal-600 pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal-600" />
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-500">2022</div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">Global Recognition</h3>
                  <p className="mt-3 text-slate-600">
                    Opened international labs in Singapore, Amsterdam, and San Francisco. Published landmark research on neural plasticity.
                  </p>
                </div>

                <div className="relative border-l-4 border-emerald-600 pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-600" />
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-500">2024</div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">Leading the Future</h3>
                  <p className="mt-3 text-slate-600">
                    200+ publications, 15 research labs worldwide. Pioneering AI systems inspired by biological intelligence. Industry leader in neurotech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision (dark) */}
        <section className="relative bg-slate-900 px-6 py-32 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/3 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/6 blur-[120px]" />
            <div className="absolute right-1/3 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  MISSION & VISION
                </p>
              </div>
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Shaping the Future of Intelligence
              </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-[2.5rem] border border-cyan-700/60 bg-cyan-900/40 p-12 backdrop-blur-sm">
                <div className="mb-6 text-6xl font-black text-white">01</div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                <p className="mt-6 text-xl leading-relaxed text-slate-200">
                  To advance human understanding of intelligence—biological and artificial—through rigorous research, innovation, and the development of neurotechnologies that enhance human potential.
                </p>
                <p className="mt-6 leading-relaxed text-slate-300">
                  We believe that the key to creating beneficial artificial intelligence lies in understanding how the human brain works. Every research paper, every discovery, every innovation brings us closer to this goal.
                </p>
              </div>

              <div className="rounded-[2.5rem] border border-blue-700/60 bg-blue-900/40 p-12 backdrop-blur-sm">
                <div className="mb-6 text-6xl font-black text-white">02</div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                <p className="mt-6 text-xl leading-relaxed text-slate-200">
                  A world where artificial intelligence and human intelligence work in perfect harmony, where neuroscience research has unlocked the secrets of human cognition, and where technology amplifies human creativity and potential.
                </p>
                <p className="mt-6 leading-relaxed text-slate-300">
                  We envision a future where breakthrough discoveries from our labs directly improve lives, where brain-inspired AI systems solve humanity&apos;s greatest challenges, and where the boundaries between neuroscience and AI dissolve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values (light) */}
        <section className="bg-white px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                  CORE VALUES
                </p>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                The Principles That Guide Us
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-cyan-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-cyan-50/0 to-cyan-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative">
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-cyan-600 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Rigorous Science</h3>
                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    We uphold the highest standards of scientific research. Every hypothesis is tested, every finding is validated, and every conclusion is supported by evidence. The pursuit of truth guides every study.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-blue-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative">
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Intellectual Curiosity</h3>
                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    We question assumptions, explore the unknown, and push the boundaries of what&apos;s possible. Curiosity drives innovation, and innovation drives discovery.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-teal-300">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-teal-50/0 to-teal-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative">
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-teal-600 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Collaborative Excellence</h3>
                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    Great discoveries emerge from diverse perspectives. We foster collaboration across disciplines, institutions, and borders. Together, we achieve more.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-emerald-300">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative">
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-emerald-600 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Positive Impact</h3>
                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    Our research exists to improve human lives. Every project is guided by the question: how will this benefit humanity? Ethics and responsibility are central to everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section (dark) */}
        <section className="relative bg-slate-900 px-6 py-32 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/6 blur-[120px]" />
            <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  RESEARCH LEADERSHIP
                </p>
              </div>
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Meet Our Research Leaders
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
                Visionary scientists and researchers pioneering the future of neuroscience and artificial intelligence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="group">
                <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                  <div className="aspect-[3/4] bg-gradient-to-br from-cyan-600/40 to-blue-600/40 flex items-center justify-center">
                    <svg className="w-24 h-24 text-cyan-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Dr. Vikram Sharma</h3>
                <p className="mt-2 text-cyan-400">Founder & Chief Research Officer</p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  PhD in Neuroscience from MIT. 20+ years studying neural mechanisms. Published 85+ papers on brain plasticity and cognitive function.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="group">
                <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-600/40 to-indigo-600/40 flex items-center justify-center">
                    <svg className="w-24 h-24 text-blue-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Dr. Elena Vasquez</h3>
                <p className="mt-2 text-blue-400">Head of AI Research</p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  PhD in Computer Science from Stanford. Expert in neural networks inspired by biological systems. 60+ publications in top-tier venues.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="group">
                <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30">
                  <div className="aspect-[3/4] bg-gradient-to-br from-teal-600/40 to-emerald-600/40 flex items-center justify-center">
                    <svg className="w-24 h-24 text-teal-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Dr. Chen Wei</h3>
                <p className="mt-2 text-teal-400">Director of Brain-Computer Interfaces</p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  PhD in Biomedical Engineering from Cambridge. Pioneering work in non-invasive neural interfaces. 45+ patents filed.
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="group">
                <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
                  <div className="aspect-[3/4] bg-gradient-to-br from-emerald-600/40 to-green-600/40 flex items-center justify-center">
                    <svg className="w-24 h-24 text-emerald-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Prof. Akira Tanaka</h3>
                <p className="mt-2 text-emerald-400">Head of Computational Neuroscience</p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  PhD in Biophysics from Tokyo University. Specializes in modeling neural networks. 70+ peer-reviewed publications.
                </p>
              </div>

              {/* Team Member 5 */}
              <div className="group">
                <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                  <div className="aspect-[3/4] bg-gradient-to-br from-purple-600/40 to-pink-600/40 flex items-center justify-center">
                    <svg className="w-24 h-24 text-purple-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Dr. Sarah Johnson</h3>
                <p className="mt-2 text-purple-400">Chief Operations Officer</p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  PhD in Organizational Psychology. Manages global research operations across 15 labs. 25+ years in research administration.
                </p>
              </div>

              {/* Team Member 6 */}
              <div className="group">
                <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
                  <div className="aspect-[3/4] bg-gradient-to-br from-orange-600/40 to-red-600/40 flex items-center justify-center">
                    <svg className="w-24 h-24 text-orange-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Dr. Ravi Desai</h3>
                <p className="mt-2 text-orange-400">Head of Translational Research</p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  MD, PhD in Translational Medicine. Bridges basic research and clinical applications. 40+ clinical research projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section (light) */}
        <section className="bg-white px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <div className="mb-6 inline-block">
                  <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                    RESEARCH CULTURE
                  </p>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                  Where Discovery Happens
                </h2>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                  <p>
                    At Aaruchudar, we&apos;ve cultivated an environment where breakthrough discoveries flourish. Our research culture is built on intellectual freedom, collaborative spirit, and unwavering commitment to scientific excellence.
                  </p>
                  <p>
                    We maintain research centers in 15 countries, employing 120+ scientists from 40+ disciplines. This global diversity brings unique perspectives to our work, accelerating innovation and expanding our impact.
                  </p>
                  <p>
                    We invest extensively in researcher development, providing access to state-of-the-art equipment, international collaborations, and opportunities to present findings at premier conferences worldwide.
                  </p>
                </div>

                <div className="mt-12 space-y-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-xl font-bold text-white">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Interdisciplinary Collaboration</h4>
                      <p className="mt-2 text-slate-600">Neuroscientists, AI experts, engineers, and clinicians work together. Cross-pollination of ideas drives innovation.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Open Science</h4>
                      <p className="mt-2 text-slate-600">We publish openly and share data. Science advances faster when knowledge is freely available to the global research community.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-xl font-bold text-white">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Career Development</h4>
                      <p className="mt-2 text-slate-600">We invest in our researchers. Mentorship, training, and pathways to research leadership are core benefits.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-100 to-slate-200 p-12">
                  <h3 className="text-2xl font-bold text-slate-900">Join Our Research Mission</h3>
                  <p className="mt-4 text-lg text-slate-700">
                    We&apos;re seeking exceptional researchers, scientists, and innovators who share our passion for advancing human intelligence.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-slate-900" />
                      <span className="text-slate-700">Competitive research funding & resources</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-slate-900" />
                      <span className="text-slate-700">State-of-the-art equipment & facilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-slate-900" />
                      <span className="text-slate-700">Global collaboration opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-slate-900" />
                      <span className="text-slate-700">Publication support & academic freedom</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-slate-900" />
                      <span className="text-slate-700">Comprehensive benefits & flexible work</span>
                    </div>
                  </div>
                  <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800">
                    Explore Opportunities
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section (dark) */}
        <section className="relative overflow-hidden bg-slate-900 px-6 py-32 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/6 blur-[120px]" />
            <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block">
              <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                GET INVOLVED
              </p>
            </div>
            
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Be Part of the Future of Intelligence
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
              Whether you&apos;re a researcher, collaborator, or innovator, join us in unlocking the mysteries of human intelligence and shaping the future of AI.
            </p>
            
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-semibold text-slate-900 shadow transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Explore Research
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/10">
                Contact Us
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}