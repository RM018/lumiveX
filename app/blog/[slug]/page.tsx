"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import blogData from "@/data/blog.json";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 py-24">
          <div className="rounded-3xl bg-slate-50 p-12 text-center max-w-md mx-auto">
            <svg className="h-16 w-16 mx-auto text-slate-300 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h2>
            <p className="text-slate-600">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog" className="inline-block mt-6 rounded-full bg-cyan-600 px-8 py-3 text-white font-semibold hover:bg-cyan-700 transition-colors">
              Back to Articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("# ")) {
        return <h1 key={i} className="text-4xl font-bold mt-10 mb-6 text-slate-900">{block.replace("# ", "")}</h1>;
      } else if (block.startsWith("## ")) {
        return <h2 key={i} className="text-3xl font-bold mt-8 mb-4 text-slate-900">{block.replace("## ", "")}</h2>;
      } else if (block.startsWith("### ")) {
        return <h3 key={i} className="text-2xl font-bold mt-6 mb-3 text-slate-900">{block.replace("### ", "")}</h3>;
      } else if (block.startsWith("- ")) {
        const items = block.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside mb-6 space-y-2 text-slate-700">
            {items.map((item, idx) => (
              <li key={idx} className="ml-4">{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      } else if (block.startsWith("> ")) {
        return (
          <blockquote key={i} className="border-l-4 border-cyan-500 pl-6 py-4 my-8 bg-cyan-50/50 rounded-r-2xl italic text-slate-700 text-lg">
            {block.replace("> ", "")}
              </blockquote>
        );
      } else {
        return <p key={i} className="mb-6 leading-relaxed text-slate-700 text-lg">{block}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-24 md:px-8">
        {/* Back button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-600 font-semibold mb-12 hover:text-cyan-700 transition-colors group">
          <svg className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m7-7-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Articles
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-700 border border-cyan-200">
              {post.category}
            </span>
            {post.featured && (
              <span className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                Featured Research
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-bold text-slate-900">{post.author}</p>
                <p className="text-sm text-slate-500">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} • {post.readTime} min read
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className={`bg-gradient-to-br ${getCategoryColor(post.category)} relative h-[500px] rounded-[2rem] overflow-hidden mb-12 flex items-center justify-center`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
          <svg className="w-40 h-40 text-white/40 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d={post.imageIcon} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-cyan-600 prose-a:font-semibold prose-strong:text-slate-900 prose-strong:font-bold prose-li:text-slate-700 mb-16">
          {renderContent(post.content)}
        </article>

        {/* Article Footer */}
        <div className="mt-12 pt-12 border-t-2 border-slate-200">
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full bg-cyan-50 px-4 py-1.5 text-sm text-cyan-700 border border-cyan-200">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-bold text-slate-900">{post.author}</p>
                <p className="text-sm text-slate-600">Research Contributor</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <button className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-6 4v-6m0 0V5a2 2 0 10-4 0v5m0 0a2 2 0 104 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Share
              </button>
              <Link href="/blog" className="rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition-colors flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                More Articles
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-20 pt-20 border-t-2 border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">More from {post.category}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogData
              .filter((p) => p.category === post.category && p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all">
                    <h3 className="font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">{relatedPost.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{relatedPost.excerpt}</p>
                    <p className="mt-4 text-xs text-slate-500">{relatedPost.readTime} min read</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}