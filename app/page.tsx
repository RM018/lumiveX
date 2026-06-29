import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />

        <section id="research" className="bg-gradient-to-b from-white to-blue-50 px-6 py-16 md:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="rounded-3xl border border-blue-100 bg-white p-10 shadow-lg shadow-blue-100/50 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <rect x="14" y="14" width="6" height="6" rx="1" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Research</h3>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                Advanced architecture, adaptive intelligence and modern data systems come
                together to power Nurotech products for real business outcomes.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-gradient-to-b from-blue-50 to-white px-6 py-16 md:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-lg shadow-emerald-100/50 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Benefits</h3>
              <div className="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Faster Decisions</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Operational Efficiency</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500 shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Improved Security</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Scalable Growth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-b from-white to-slate-50 px-6 pb-24 pt-16 md:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/50 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Contact</h3>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                Partner with Aaruchudar and discover how Nurotech can transform your
                business with intelligent, scalable products.
              </p>
              <button className="mt-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
