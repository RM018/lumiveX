"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import blogData from "@/data/blog.json";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featured = blogData.find((post) => post.featured);
  const other = blogData.filter((post) => !post.featured);
  const categories = ["ALL", "BREAKTHROUGH", "RESEARCH", "PARTNERSHIP", "PRODUCT UPDATE", "EVENTS", "FUNDING", "AWARDS"];

  const filteredPosts = selectedCategory === "ALL" ? other : other.filter((post) => post.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  type BlogCategory =
    | "BREAKTHROUGH"
    | "RESEARCH"
    | "PARTNERSHIP"
    | "PRODUCT UPDATE"
    | "EVENTS"
    | "FUNDING"
    | "AWARDS";

  const getCategoryColor = (category: BlogCategory | string) => {
    const colors: Record<BlogCategory, string> = {
      BREAKTHROUGH: "from-cyan-500 to-blue-600",
      RESEARCH: "from-blue-500 to-indigo-600",
      PARTNERSHIP: "from-purple-500 to-pink-600",
      "PRODUCT UPDATE": "from-teal-500 to-cyan-600",
      EVENTS: "from-emerald-500 to-teal-600",
      FUNDING: "from-orange-500 to-red-600",
      AWARDS: "from-yellow-500 to-orange-600",
    };
    return colors[category as BlogCategory] || "from-slate-500 to-slate-700";
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/8 blur-[120px] animate-pulse" />
            <div className="absolute right-1/4 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/6 blur-[100px] animate-pulse delay-700" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative mx-auto max-w-7xl px-6 text-center md:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                  LATEST NEWS & INSIGHTS
                </p>
              </div>

              <h1 className="text-5xl font-black leading-[1.1] text-white md:text-6xl lg:text-7xl">
                Neuroscience
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-teal-200">
                  {" "}Breakthroughs
                </span>
                <br />
                <span className="bg-gradient-to-r from-white/60 to-white/30 bg-clip-text text-transparent">
                  & Industry Updates
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
                Stay informed on the latest research discoveries, innovations, and announcements from Aaruchudar.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featured && (
          <section className="relative bg-white px-6 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12">
                <p className="rounded-full border border-cyan-200 bg-cyan-50 inline-block px-5 py-2 text-xs font-bold tracking-[0.3em] text-cyan-800">
                  FEATURED STORY
                </p>
              </div>

              <Link href={`/blog/${featured.slug}`}>
                <div className="group cursor-pointer rounded-[3rem] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)] hover:border-slate-300 overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-2">
                    {/* Image */}
                    <div className={`h-80 lg:h-auto bg-gradient-to-br ${getCategoryColor(featured.category)} relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
                      <svg className="w-40 h-40 text-white/40 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d={featured.imageIcon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="p-10 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 mb-6 text-xs font-semibold text-cyan-700 border border-cyan-200">
                          <span>{featured.category}</span>
                          <span className="h-1 w-1 rounded-full bg-cyan-400" />
                          <span>{new Date(featured.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                        <h3 className="text-4xl font-bold text-slate-900 leading-tight group-hover:text-cyan-600 transition-colors">
                          {featured.title}
                        </h3>

                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                          {featured.excerpt}
                        </p>

                        <div className="mt-8 flex items-center gap-4 text-sm text-slate-600">
                          <span className="font-semibold">{featured.author}</span>
                          <span>•</span>
                          <span>{featured.readTime} min read</span>
                        </div>
                      </div>

                      <button className="mt-8 inline-flex items-center gap-2 text-cyan-600 font-semibold transition-colors hover:text-cyan-700 group/btn">
                        Read Full Article
                        <svg className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="bg-slate-50 px-6 py-12 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-lg"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="relative bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl mb-16">
              {selectedCategory === "ALL" ? "All Articles" : selectedCategory}
            </h2>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No articles found in this category.</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div className="group h-full cursor-pointer rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.1)] hover:border-slate-300 hover:-translate-y-2">
                      {/* Article Image */}
                      <div className={`h-52 bg-gradient-to-br ${getCategoryColor(post.category)} relative overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
                        <svg className="w-24 h-24 text-white/40 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d={post.imageIcon} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Article Content */}
                      <div className="p-8 flex flex-col h-full">
                        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 w-fit border`}>
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${getCategoryColor(post.category)}`} />
                          <span>{post.category}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-slate-700 transition-colors flex-grow">
                          {post.title}
                        </h3>

                        <p className="text-slate-600 mb-6 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-6 border-t border-slate-100 text-xs text-slate-500">
                          <span className="font-semibold">{post.author}</span>
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-24 md:px-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/6 blur-[120px]" />
            <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm p-12 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90">
                  STAY UPDATED
                </p>
              </div>
              <h2 className="text-4xl font-bold text-white">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Get the latest neuroscience research and insights delivered to your inbox every week.
              </p>

              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-white/50 backdrop-blur-sm transition-all focus:border-cyan-400 focus:bg-white/20 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap"
                >
                  {subscribed ? "✓ Subscribed" : "Subscribe"}
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-400">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block">
              <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                SHARE YOUR RESEARCH
              </p>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Have a Story to Share?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-700">
              We welcome research articles and insights from the neuroscience community. Share your discoveries with our global audience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-10 py-5 text-lg font-semibold text-white shadow transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-slate-800">
                Submit an Article
                <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-10 py-5 text-lg font-semibold text-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-sm">
                View Guidelines
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}