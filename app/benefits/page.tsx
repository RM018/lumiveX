import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Benefits() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        {/* Hero Section - Deep Navy/Teal */}
        <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20">
          {/* Animated background gradients */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/8 blur-[120px] animate-pulse" />
            <div className="absolute right-1/4 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/6 blur-[100px] animate-pulse delay-700" />
            <div className="absolute bottom-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-teal-400/5 blur-[100px] animate-pulse delay-1000" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

          {/* Neural network decorative lines */}
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <svg className="absolute h-full w-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
              <path d="M0,250 Q250,150 500,250 T1000,250" stroke="#22d3ee" strokeWidth="1" fill="none" />
              <path d="M0,300 Q250,200 500,300 T1000,300" stroke="#3b82f6" strokeWidth="0.5" fill="none" />
              <path d="M0,200 Q250,100 500,200 T1000,200" stroke="#2dd4bf" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-7xl px-6 text-center md:px-8">
            <div className="mx-auto max-w-4xl">
              {/* Brand tag */}
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  NEUROSCIENCE RESEARCH
                </p>
              </div>

              <h1 className="text-5xl font-black leading-[1.1] text-white md:text-6xl lg:text-7xl">
                Decoding the
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-teal-200">
                  {" "}Human Brain
                </span>
                <br />
                <span className="bg-gradient-to-r from-white/60 to-white/30 bg-clip-text text-transparent">
                  Through Advanced Research
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
                Exploring neural patterns, cognitive functions, and brain dynamics through cutting-edge research and data-driven insights.
              </p>
            </div>
          </div>

          {/* Floating particles - neural network inspired */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-cyan-400/60" />
            <div className="absolute right-[15%] top-[30%] h-1 w-1 animate-pulse rounded-full bg-blue-400/50 delay-700" />
            <div className="absolute left-[20%] bottom-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400/40 delay-1000" />
            <div className="absolute right-[25%] bottom-[35%] h-2 w-2 animate-pulse rounded-full bg-cyan-400/50 delay-500" />
            <div className="absolute left-[45%] top-[15%] h-1 w-1 animate-pulse rounded-full bg-blue-300/40 delay-300" />
            <div className="absolute right-[10%] bottom-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-teal-300/40 delay-900" />
            <div className="absolute left-[70%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-cyan-400/30 delay-200" />
            <div className="absolute left-[30%] bottom-[15%] h-1 w-1 animate-pulse rounded-full bg-blue-400/30 delay-600" />
          </div>
        </section>

        {/* Research Focus Areas */}
        <section className="relative bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                  RESEARCH FOCUS
                </p>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                Core Research Areas
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
                Advancing understanding of neural mechanisms and brain function through interdisciplinary research.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Research Area 1 */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-cyan-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-teal-50/0 to-cyan-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-600 shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900">Neural Pattern Recognition</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Advanced algorithms identify and analyze complex neural patterns to understand brain function and cognitive processes.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" />
                      <span className="text-sm text-slate-700">EEG pattern analysis with 94% accuracy</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" />
                      <span className="text-sm text-slate-700">Real-time neural signal processing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" />
                      <span className="text-sm text-slate-700">Cognitive state classification systems</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Area 2 */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-blue-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900">Cognitive Dynamics</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Investigating how neural networks process information, form memories, and enable complex cognitive functions.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                      <span className="text-sm text-slate-700">Memory formation pattern analysis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                      <span className="text-sm text-slate-700">Attention and focus neural signatures</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                      <span className="text-sm text-slate-700">Decision-making pathway mapping</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Area 3 */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-teal-300">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-emerald-50/0 to-teal-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-600 shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900">Brain-Computer Interface</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Developing innovative interfaces that translate neural activity into actionable insights and applications.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500" />
                      <span className="text-sm text-slate-700">Real-time neural signal translation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500" />
                      <span className="text-sm text-slate-700">Adaptive learning algorithms</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500" />
                      <span className="text-sm text-slate-700">Non-invasive neural monitoring systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Impact Metrics */}
        <section className="relative bg-slate-900 px-6 py-24 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/3 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/6 blur-[120px]" />
            <div className="absolute right-1/3 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  RESEARCH IMPACT
                </p>
              </div>
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Our Research Milestones
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
                Driving innovation in neuroscience through rigorous research and discovery.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-[2rem] border border-cyan-700/60 bg-cyan-900/60 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-900/70">
                <div className="mb-4 text-5xl font-black text-white">247</div>
                <p className="text-lg font-semibold text-white">Research Papers</p>
                <p className="mt-2 text-sm text-slate-400">Published in peer-reviewed journals</p>
              </div>

              <div className="group rounded-[2rem] border border-blue-700/60 bg-blue-900/60 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-900/70">
                <div className="mb-4 text-5xl font-black text-white">1.2M</div>
                <p className="text-lg font-semibold text-white">Neural Data Points</p>
                <p className="mt-2 text-sm text-slate-400">Analyzed in our studies</p>
              </div>

              <div className="group rounded-[2rem] border border-teal-700/60 bg-teal-900/60 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-900/70">
                <div className="mb-4 text-5xl font-black text-white">94%</div>
                <p className="text-lg font-semibold text-white">Pattern Accuracy</p>
                <p className="mt-2 text-sm text-slate-400">In neural pattern recognition</p>
              </div>

              <div className="group rounded-[2rem] border border-emerald-700/60 bg-emerald-900/60 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-900/70">
                <div className="mb-4 text-5xl font-black text-white">15+</div>
                <p className="text-lg font-semibold text-white">Active Collaborations</p>
                <p className="mt-2 text-sm text-slate-400">With leading research institutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Publications Preview */}
        <section className="bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                  RECENT PUBLICATIONS
                </p>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                Latest Research Papers
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
                Explore our latest contributions to neuroscience and brain research.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Publication 1 */}
              <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.1)] hover:border-cyan-200">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-700">
                  <span>NEURAL PATTERNS</span>
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  <span>2024</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Decoding Complex Neural Patterns in Cognitive Processing
                </h3>
                <p className="mt-3 text-slate-600">
                  A comprehensive study on neural network dynamics during complex cognitive tasks, revealing novel pattern recognition pathways.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-600">Journal of Neuroscience</span>
                  </div>
                  <button className="ml-auto text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-700">
                    Read More →
                  </button>
                </div>
              </div>

              {/* Publication 2 */}
              <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.1)] hover:border-blue-200">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
                  <span>BRAIN COMPUTER INTERFACE</span>
                  <span className="h-1 w-1 rounded-full bg-blue-400" />
                  <span>2024</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Advances in Non-Invasive Neural Signal Translation
                </h3>
                <p className="mt-3 text-slate-600">
                  Novel approaches to translating neural signals into actionable data using machine learning and advanced signal processing.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-600">Nature Neuroscience</span>
                  </div>
                  <button className="ml-auto text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              </div>

              {/* Publication 3 */}
              <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.1)] hover:border-teal-200">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700">
                  <span>COGNITIVE DYNAMICS</span>
                  <span className="h-1 w-1 rounded-full bg-teal-400" />
                  <span>2023</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Mapping Neural Correlates of Memory Formation
                </h3>
                <p className="mt-3 text-slate-600">
                  Investigating the neural pathways involved in short-term and long-term memory formation using advanced imaging techniques.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-600">Brain Research Bulletin</span>
                  </div>
                  <button className="ml-auto text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700">
                    Read More →
                  </button>
                </div>
              </div>

              {/* Publication 4 */}
              <div className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.1)] hover:border-emerald-200">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
                  <span>NEURAL NETWORKS</span>
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  <span>2023</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Artificial Neural Networks Inspired by Brain Plasticity
                </h3>
                <p className="mt-3 text-slate-600">
                  Developing adaptive neural network architectures based on principles of neuroplasticity for enhanced learning capabilities.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-600">Neural Computation</span>
                  </div>
                  <button className="ml-auto text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:scale-105 hover:border-slate-300 hover:shadow-lg">
                View All Publications
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Research Team/Testimonials */}
        <section className="relative bg-slate-900 px-6 py-24 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/6 blur-[120px]" />
            <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  RESEARCH COLLABORATORS
                </p>
              </div>
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                What Researchers Say
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
                Insights from leading neuroscientists and research partners.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="group rounded-[2rem] border border-cyan-700/60 bg-cyan-900/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-900/70">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-slate-300">
                  &quot;This research has revolutionized our understanding of neural pattern recognition. The methodology and findings are groundbreaking for cognitive neuroscience.&quot;
                </p>
                <div className="mt-8 border-t border-cyan-700 pt-6">
                  <p className="font-semibold text-white">Dr. Sarah Mitchell</p>
                  <p className="mt-1 text-sm text-slate-400">Director, Cognitive Science Institute</p>
                </div>
              </div>

              <div className="group rounded-[2rem] border border-blue-700/60 bg-blue-900/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:bg-blue-900/70">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-slate-300">
                  &quot;The brain-computer interface research is pushing boundaries in neural translation. Their work opens new possibilities for therapeutic applications.&quot;
                </p>
                <div className="mt-8 border-t border-blue-700 pt-6">
                  <p className="font-semibold text-white">Prof. James Park</p>
                  <p className="mt-1 text-sm text-slate-400">Neuroscience Department, Stanford</p>
                </div>
              </div>

              <div className="group rounded-[2rem] border border-teal-700/60 bg-teal-900/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-teal-400/40 hover:bg-teal-900/70">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-slate-300">
                  &quot;The interdisciplinary approach combining AI with neuroscience has yielded remarkable insights into cognitive dynamics and brain function.&quot;
                </p>
                <div className="mt-8 border-t border-teal-700 pt-6">
                  <p className="font-semibold text-white">Dr. Maria Rodriguez</p>
                  <p className="mt-1 text-sm text-slate-400">Lead Researcher, Brain Dynamics Lab</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Research Collaboration */}
        <section className="relative overflow-hidden bg-white px-6 py-24 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-50 blur-[120px]" />
            <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-50 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block">
              <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800 backdrop-blur-sm">
                JOIN OUR RESEARCH
              </p>
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Collaborate on Brain Research
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-700">
              Partner with us to advance neuroscience research and explore the mysteries of the human brain.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-10 py-5 text-lg font-semibold text-white shadow transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-slate-800">
                Submit Research Proposal
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-10 py-5 text-lg font-semibold text-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-sm">
                Request Collaboration
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Open for academic collaborations • Research partnerships • Joint publications
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}