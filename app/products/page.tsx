import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Products</p>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Our Products</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Explore the latest neurotech products coming soon. Visit our research and blog pages for the latest updates.
          </p>
          <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-3 text-white font-semibold hover:bg-cyan-700 transition-colors">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
