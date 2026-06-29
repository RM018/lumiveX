import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        {/* Hero Section - Vibrant Blue/Cyan */}
        <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20">
          {/* Animated background gradients */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-20 h-[600px] w-[600px] rounded-full bg-blue-500/8 blur-[120px] animate-pulse" />
            <div className="absolute right-1/4 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/6 blur-[100px] animate-pulse delay-700" />
            <div className="absolute bottom-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-sky-400/5 blur-[100px] animate-pulse delay-1000" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative mx-auto max-w-7xl px-6 text-center md:px-8">
            <div className="mx-auto max-w-4xl">
              {/* Brand tag */}
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  LET&apos;S COLLABORATE
                </p>
              </div>

              <h1 className="text-5xl font-black leading-[1.1] text-white md:text-6xl lg:text-7xl">
                Connect With Our
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-sky-200">
                  {" "}Research Team
                </span>
                <br />
                <span className="bg-gradient-to-r from-white/60 to-white/30 bg-clip-text text-transparent">
                  Partnerships & Support
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
                Reach out to discuss collaborations, partnerships, research inquiries, or to learn more about our work.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="relative bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                  GET IN TOUCH
                </p>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                Multiple Ways to Connect
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
                Choose the best way to reach us based on your needs.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Email Contact */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-blue-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900">Email Us</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Send us an email for general inquiries, collaboration proposals, or technical support.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                      <div>
                        <p className="font-semibold text-slate-900">General Inquiries</p>
                        <p className="text-sm text-slate-600">contact@lumivex.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                      <div>
                        <p className="font-semibold text-slate-900">Research Partnerships</p>
                        <p className="text-sm text-slate-600">partnerships@lumivex.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                      <div>
                        <p className="font-semibold text-slate-900">Technical Support</p>
                        <p className="text-sm text-slate-600">support@lumivex.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-cyan-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-sky-50/0 to-cyan-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-600 to-sky-600 shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900">Call Us</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Speak directly with our team members for immediate assistance and detailed discussions.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" />
                      <div>
                        <p className="font-semibold text-slate-900">Main Office</p>
                        <p className="text-sm text-slate-600">+1 (888) RESEARCH</p>
                        <p className="text-xs text-slate-500 mt-1">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" />
                      <div>
                        <p className="font-semibold text-slate-900">Emergency Support</p>
                        <p className="text-sm text-slate-600">+1 (888) URGENT-24</p>
                        <p className="text-xs text-slate-500 mt-1">24/7 for active partners</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Us */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-sky-300">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 via-blue-50/0 to-sky-50/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-600 to-blue-600 shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900">Visit Our Office</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Schedule an in-person meeting to discuss your research needs and collaborate directly with our team.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" />
                      <div>
                        <p className="font-semibold text-slate-900">Headquarters</p>
                        <p className="text-sm text-slate-600">123 Research Way</p>
                        <p className="text-sm text-slate-600">Boston, MA 02110</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" />
                      <div>
                        <p className="font-semibold text-slate-900">Asia-Pacific Office</p>
                        <p className="text-sm text-slate-600">456 Neural Lane</p>
                        <p className="text-sm text-slate-600">Singapore 618641</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative bg-slate-900 px-6 py-24 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/3 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/6 blur-[120px]" />
            <div className="absolute right-1/3 bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  DIRECT MESSAGE
                </p>
              </div>
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Send Us a Message
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
                Tell us about your research needs and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-blue-700/60 bg-blue-900/60 p-12 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white placeholder-white/40 transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white placeholder-white/40 transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white placeholder-white/40 transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none"
                      placeholder="your.email@institution.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Organization</label>
                    <input 
                      type="text" 
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white placeholder-white/40 transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none"
                      placeholder="Your institution"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Interest</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none">
                    <option value="">Select a topic</option>
                    <option value="research">Research Collaboration</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="platform">Platform Access</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white placeholder-white/40 transition-all focus:border-white/30 focus:bg-white/10 focus:outline-none"
                    placeholder="Tell us about your needs or inquiry..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="consent" className="h-4 w-4 rounded" />
                  <label htmlFor="consent" className="text-sm text-slate-300">
                    I agree to receive communications about my inquiry
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                  FREQUENTLY ASKED
                </p>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to set up a collaboration?",
                  a: "Most collaborations can be established within 2-4 weeks after initial discussions. We work quickly to align on research goals and technical requirements."
                },
                {
                  q: "Do you offer free consultations?",
                  a: "Yes! We offer a complimentary 30-minute consultation to discuss your research needs and explore how we can help."
                },
                {
                  q: "What data formats do you support?",
                  a: "We support all major neuroscience data formats including DICOM, NIfTI, EDF, CSV, and many others. Custom format support is available."
                },
                {
                  q: "Is there training provided for new users?",
                  a: "Absolutely. We provide comprehensive training, documentation, and ongoing support to ensure your team gets the most from our platform."
                },
                {
                  q: "Can you handle international collaborations?",
                  a: "Yes, we regularly work with research teams globally. We can accommodate different time zones and language requirements."
                },
                {
                  q: "What is your response time for support requests?",
                  a: "Standard support: 24 hours. Priority support (partnership plans): 2 hours. Emergency support: 15 minutes."
                }
              ].map((faq, idx) => (
                <div key={idx} className="group rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <span className="font-bold text-blue-600">Q</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900">{faq.q}</h3>
                      <p className="mt-3 text-slate-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-white px-6 py-24 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-50 blur-[120px]" />
            <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-50 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              We&apos;re Looking Forward to Hearing From You
            </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-700">
              Whether you&apos;re interested in collaboration, have technical questions, or want to discuss partnership opportunities—we&apos;re here to help.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-10 py-5 text-lg font-semibold text-white shadow transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-slate-800">
                Schedule a Call
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
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