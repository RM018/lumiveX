"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

type ResearchPaper = {
  id: number;
  title: string;
  authors: string;
  year: number;
  category: string;
  categoryColor: string;
  journal: string;
  description: string;
  abstract: string;
  keywords: string[];
  downloads: number;
  citations: number;
};

type SelectedPaper = ResearchPaper | null;

export default function Research() {
  const [selectedPaper, setSelectedPaper] = useState<SelectedPaper>(null);

  const researchPapers: ResearchPaper[] = [
    {
      id: 1,
      title: "Advanced Neuroplasticity about Human Nerves",
      authors: "Dr. Jyotsna Pandey",
      year: 2026,
      category: "NEUROPLASTICITY",
      categoryColor: "cyan",
      journal: "Journal of Artificial Intelligence Research",
      description: "This groundbreaking study explores novel neural network architectures optimized for real-time data processing in edge computing environments.",
      abstract: "We present a comprehensive framework for designing neural network architectures that maintain high accuracy while operating under strict computational constraints. Our approach demonstrates a 40% improvement in processing speed without compromising model performance.",
      keywords: ["Neural Networks", "Edge Computing", "Deep Learning", "Optimization"],
      downloads: 1247,
      citations: 89
    },
    {
      id: 2,
      title: "Computer Vision Applications in Medical Imaging Diagnosis",
      authors: "Dr. Maria Rodriguez, Dr. Chen Wei",
      year: 2024,
      category: "COMPUTER VISION",
      categoryColor: "blue",
      journal: "IEEE Transactions on Medical Imaging",
      description: "Exploring cutting-edge computer vision techniques for automated diagnosis in medical imaging with clinical applications.",
      abstract: "Our research introduces an integrated computer vision system capable of analyzing medical images with 99.2% accuracy. The system has been validated across three major medical imaging modalities and shows promise in clinical deployment.",
      keywords: ["Medical Imaging", "Computer Vision", "Deep Learning", "Diagnosis"],
      downloads: 2156,
      citations: 156
    },
    {
      id: 3,
      title: "Machine Learning Models for Predictive Analytics in Healthcare",
      authors: "Prof. Michael Zhang, Dr. Lisa Anderson",
      year: 2024,
      category: "MACHINE LEARNING",
      categoryColor: "teal",
      journal: "Nature Machine Intelligence",
      description: "Novel machine learning approaches for predicting patient outcomes and optimizing treatment protocols in healthcare systems.",
      abstract: "We develop and validate predictive models that forecast patient outcomes with 94% accuracy. The system integrates electronic health records, genetic data, and environmental factors for comprehensive patient risk assessment.",
      keywords: ["Predictive Analytics", "Healthcare", "Machine Learning", "Clinical Decision Support"],
      downloads: 1834,
      citations: 127
    },
    {
      id: 4,
      title: "Quantum Computing Applications in Cryptography and Security",
      authors: "Dr. Alex Kumar, Prof. Rachel Green",
      year: 2023,
      category: "QUANTUM COMPUTING",
      categoryColor: "purple",
      journal: "Quantum Information Review",
      description: "Investigating quantum computing's potential in developing next-generation cryptographic protocols and security frameworks.",
      abstract: "This paper presents a quantum-resistant cryptographic framework that outperforms classical methods in security metrics. Our implementation demonstrates practical feasibility for enterprise-level deployment.",
      keywords: ["Quantum Computing", "Cryptography", "Security", "Post-Quantum Cryptography"],
      downloads: 1456,
      citations: 98
    },
    {
      id: 5,
      title: "Explainable AI: Interpretability in Complex Deep Learning Models",
      authors: "Dr. Nina Patel, Prof. David Foster",
      year: 2023,
      category: "EXPLAINABLE AI",
      categoryColor: "indigo",
      journal: "ACM Transactions on Interpretable Machine Learning",
      description: "Developing interpretable machine learning models that provide transparency and explainability for critical decision-making systems.",
      abstract: "We propose novel techniques for extracting interpretable features from deep learning models while maintaining predictive performance. The approach is validated on regulatory compliance scenarios.",
      keywords: ["Explainable AI", "Interpretability", "Deep Learning", "Transparency"],
      downloads: 1678,
      citations: 112
    },
    {
      id: 6,
      title: "Natural Language Processing for Multilingual Context Understanding",
      authors: "Prof. Emma Wilson, Dr. Raj Kapoor",
      year: 2023,
      category: "NLP",
      categoryColor: "emerald",
      journal: "Computational Linguistics Quarterly",
      description: "Advanced NLP techniques for understanding semantic context across multiple languages with minimal training data.",
      abstract: "Our multilingual NLP framework achieves 92% accuracy in context understanding across 15 languages. The transfer learning approach significantly reduces training time and computational requirements.",
      keywords: ["NLP", "Multilingual", "Semantic Understanding", "Transfer Learning"],
      downloads: 1523,
      citations: 87
    }
  ];

  type CategoryColor = "cyan" | "blue" | "teal" | "purple" | "indigo" | "emerald";

  const getCategoryColor = (color: CategoryColor | string) => {
    const colors: Record<CategoryColor, string> = {
      cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      teal: "bg-teal-50 text-teal-700 border-teal-200",
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-200"
    };
    return colors[color as CategoryColor] || colors.cyan;
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
                  RESEARCH & PUBLICATIONS
                </p>
              </div>

              <h1 className="text-5xl font-black leading-[1.1] text-white md:text-6xl lg:text-7xl">
                Cutting-Edge
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-teal-200">
                  {" "}Research
                </span>
                <br />
                <span className="bg-gradient-to-r from-white/60 to-white/30 bg-clip-text text-transparent">
                  Advancing Technology Forward
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
                Explore our latest peer-reviewed research papers and innovative discoveries in AI, machine learning, and advanced computing.
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-cyan-400/60" />
            <div className="absolute right-[15%] top-[30%] h-1 w-1 animate-pulse rounded-full bg-blue-400/50 delay-700" />
            <div className="absolute left-[20%] bottom-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400/40 delay-1000" />
          </div>
        </section>

        {/* Research Papers Grid */}
        <section className="bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block">
                <p className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs font-bold tracking-[0.3em] text-gray-800">
                  FEATURED PAPERS
                </p>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                Latest Research Publications
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
                Explore our peer-reviewed research papers covering AI, machine learning, and computational science.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {researchPapers.map((paper) => (
                <div
                  key={paper.id}
                  onClick={() => setSelectedPaper(paper)}
                  className="group cursor-pointer rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.1)] hover:border-slate-300 hover:-translate-y-1"
                >
                  {/* Paper Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Abstract visualization */}
                    <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" viewBox="0 0 400 300" preserveAspectRatio="none">
                      <rect x="30" y="30" width="340" height="20" fill="currentColor" opacity="0.8" />
                      <rect x="30" y="60" width="340" height="10" fill="currentColor" opacity="0.6" />
                      <rect x="30" y="80" width="340" height="10" fill="currentColor" opacity="0.6" />
                      <rect x="30" y="100" width="310" height="10" fill="currentColor" opacity="0.6" />
                      
                      <rect x="30" y="130" width="340" height="15" fill="currentColor" opacity="0.5" />
                      <rect x="30" y="155" width="340" height="8" fill="currentColor" opacity="0.4" />
                      <rect x="30" y="170" width="340" height="8" fill="currentColor" opacity="0.4" />
                      <rect x="30" y="185" width="300" height="8" fill="currentColor" opacity="0.4" />
                      
                      <circle cx="350" cy="240" r="40" fill="currentColor" opacity="0.3" />
                      <circle cx="80" cy="250" r="35" fill="currentColor" opacity="0.25" />
                    </svg>

                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
                        <svg className="w-10 h-10 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 12h6m-6 4h6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Paper Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${getCategoryColor(paper.categoryColor)}`}>
                        <span>{paper.category}</span>
                        <span className="h-1 w-1 rounded-full bg-current opacity-60" />
                        <span>{paper.year}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-slate-700 transition-colors">
                      {paper.title}
                    </h3>

                    <p className="text-slate-600 mb-6 line-clamp-2">
                      {paper.description}
                    </p>

                    <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.75M10 7v5.5M12.75 9.25H7.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex-1">
                          <p className="text-xs text-slate-500 font-semibold">AUTHORS</p>
                          <p className="text-sm text-slate-700">{paper.authors}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.5 13a3 3 0 01.369-1.618 1 1 0 10-1.738-1.146A5 5 0 1016.616 5.03a1 1 0 11-1.873-1.06A7 7 0 103.82 16.999a1 1 0 01-.569-1.939z" />
                        </svg>
                        <div className="flex-1">
                          <p className="text-xs text-slate-500 font-semibold">JOURNAL</p>
                          <p className="text-sm text-slate-700">{paper.journal}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-6 text-sm">
                        <div>
                          <p className="text-slate-500 font-semibold text-xs">DOWNLOADS</p>
                          <p className="text-slate-900 font-bold">{paper.downloads.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-semibold text-xs">CITATIONS</p>
                          <p className="text-slate-900 font-bold">{paper.citations}</p>
                        </div>
                      </div>
                      <button className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">
                        View Paper
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-10 py-4 font-semibold text-slate-700 transition-all duration-300 hover:scale-105 hover:border-slate-300 hover:shadow-lg">
                View All {researchPapers.length} Papers
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative bg-slate-900 px-6 py-24 md:px-8">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/3 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/6 blur-[120px]" />
            <div className="absolute right-1/3 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Research Impact
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[2rem] border border-cyan-700/60 bg-cyan-900/60 p-8 text-center backdrop-blur-sm">
                <div className="mb-4 text-5xl font-black text-white">847</div>
                <p className="text-lg font-semibold text-white">Published Papers</p>
                <p className="mt-2 text-sm text-slate-400">In peer-reviewed journals</p>
              </div>

              <div className="rounded-[2rem] border border-blue-700/60 bg-blue-900/60 p-8 text-center backdrop-blur-sm">
                <div className="mb-4 text-5xl font-black text-white">12.4K</div>
                <p className="text-lg font-semibold text-white">Total Citations</p>
                <p className="mt-2 text-sm text-slate-400">Global research community</p>
              </div>

              <div className="rounded-[2rem] border border-teal-700/60 bg-teal-900/60 p-8 text-center backdrop-blur-sm">
                <div className="mb-4 text-5xl font-black text-white">245</div>
                <p className="text-lg font-semibold text-white">Research Teams</p>
                <p className="mt-2 text-sm text-slate-400">Collaborating institutions</p>
              </div>

              <div className="rounded-[2rem] border border-emerald-700/60 bg-emerald-900/60 p-8 text-center backdrop-blur-sm">
                <div className="mb-4 text-5xl font-black text-white">89</div>
                <p className="text-lg font-semibold text-white">Active Projects</p>
                <p className="mt-2 text-sm text-slate-400">Ongoing research initiatives</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Modal for viewing paper details */}
      {selectedPaper && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPaper(null)}
        >
          <div 
            className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 flex justify-between items-start">
              <div className="flex-1">
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold mb-4 ${getCategoryColor(selectedPaper.categoryColor)}`}>
                  <span>{selectedPaper.category}</span>
                  <span className="h-1 w-1 rounded-full bg-current opacity-60" />
                  <span>{selectedPaper.year}</span>
                </div>
                <h2 className="text-3xl font-bold">{selectedPaper.title}</h2>
              </div>
              <button
                onClick={() => setSelectedPaper(null)}
                className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Metadata */}
              <div className="grid md:grid-cols-2 gap-8 pb-8 border-b border-slate-200">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Authors</p>
                  <p className="text-lg text-slate-900">{selectedPaper.authors}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Journal</p>
                  <p className="text-lg text-slate-900">{selectedPaper.journal}</p>
                </div>
              </div>

              {/* Abstract */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Abstract</h3>
                <p className="text-lg leading-relaxed text-slate-700">
                  {selectedPaper.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Keywords</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedPaper.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full border ${getCategoryColor(selectedPaper.categoryColor)}`}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 bg-slate-50 p-8 rounded-2xl">
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2">DOWNLOADS</p>
                  <p className="text-4xl font-black text-slate-900">{selectedPaper.downloads.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2">CITATIONS</p>
                  <p className="text-4xl font-black text-slate-900">{selectedPaper.citations}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2">PUBLICATION YEAR</p>
                  <p className="text-4xl font-black text-slate-900">{selectedPaper.year}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 bg-slate-900 text-white py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download PDF
                </button>
                <button className="flex-1 border-2 border-slate-200 text-slate-700 py-4 rounded-full font-semibold hover:border-slate-300 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M8.684 13.342C8.886 12.938 9 12.469 9 12c0-2.21-1.791-4-4-4-2.21 0-4 1.79-4 4 0 2.21 1.791 4 4 4 .469 0 .938-.114 1.342-.316m6.634-7.366a9.865 9.865 0 018.946 8.946 2 2 0 01-2 2H5a2 2 0 01-2-2c0-4.478 3.582-8.15 8.05-8.316" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}