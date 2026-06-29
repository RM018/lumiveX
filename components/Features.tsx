"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ResearchCard {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  accentColor: string;
  accentBg: string;
  ringColor: string;
  gradientClass: string;
  year: string;
}

const researchCards: ResearchCard[] = [
  {
    title: "Neural Connectivity Patterns",
    description: "Comprehensive analysis of brain network dynamics and synaptic integration across regions.",
    metric: "2.4M",
    metricLabel: "Data Points",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    accentColor: "text-purple-600",
    accentBg: "from-purple-500 to-purple-600",
    ringColor: "stroke-purple-500",
    gradientClass: "from-purple-600/20 to-purple-400/10",
    year: "2024"
  },
  {
    title: "Cognitive Function Mapping",
    description: "Investigating the relationship between structural brain features and cognitive abilities.",
    metric: "847",
    metricLabel: "Participants",
    image: "https://images.unsplash.com/photo-1559027615-cd1628902d4a?auto=format&fit=crop&q=80&w=800",
    accentColor: "text-amber-600",
    accentBg: "from-amber-500 to-amber-600",
    ringColor: "stroke-amber-500",
    gradientClass: "from-amber-600/20 to-amber-400/10",
    year: "2024"
  },
  {
    title: "Neuroplasticity in Learning",
    description: "Longitudinal study on brain adaptation during intensive skill acquisition and learning.",
    metric: "18 Mo.",
    metricLabel: "Study Duration",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    accentColor: "text-indigo-600",
    accentBg: "from-indigo-500 to-indigo-600",
    ringColor: "stroke-indigo-500",
    gradientClass: "from-indigo-600/20 to-indigo-400/10",
    year: "2023"
  },
  {
    title: "Neurodegenerative Biomarkers",
    description: "Identifying early indicators of neurological disorders through advanced neuroimaging.",
    metric: "94%",
    metricLabel: "Detection Rate",
    image: "https://images.unsplash.com/photo-1576091160588-112fa1acb41f?auto=format&fit=crop&q=80&w=800",
    accentColor: "text-cyan-600",
    accentBg: "from-cyan-500 to-cyan-600",
    ringColor: "stroke-cyan-500",
    gradientClass: "from-cyan-600/20 to-cyan-400/10",
    year: "2023"
  },
];

export default function Features() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollCheck = () => {
    if (scrollContainerRef.current) {
      setShowLeftArrow(scrollContainerRef.current.scrollLeft > 0);
      setShowRightArrow(
        scrollContainerRef.current.scrollLeft < 
        (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10)
      );
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 px-6 py-20 md:px-8 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full bg-purple-500/8 blur-[100px] animate-pulse" />
        <div className="absolute right-1/3 bottom-20 h-[300px] w-[300px] rounded-full bg-cyan-500/6 blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400/80 mb-2">
            CUTTING-EDGE RESEARCH
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Featured Research
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
              {" "}Initiatives
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Explore our groundbreaking studies and research projects advancing neuroscience and AI intelligence.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden md:flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden md:flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScrollCheck}
            className="hide-scrollbar flex gap-8 overflow-x-auto px-2 pb-6 md:px-12 scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {researchCards.map((card) => (
              <article
                key={card.title}
                className="group relative flex-shrink-0 overflow-hidden rounded-[32px] border border-white/10 bg-slate-800/50 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{
                  width: "min(380px, calc(100vw - 48px))",
                  height: "500px",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 h-full w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width:1024px) 380px, calc(100vw - 48px)"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={75}
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${card.gradientClass} via-slate-900 to-slate-950`} />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col p-8 justify-between">
                  {/* Top Section */}
                  <div>
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${card.accentBg} flex items-center justify-center shadow-lg`}>
                        <span className="text-xs font-bold text-white">{card.year.slice(-2)}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{card.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white leading-tight tracking-tight">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-200/90">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Section - Metric */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className={`text-4xl font-black ${card.accentColor}`}>
                        {card.metric}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                        {card.metricLabel}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${card.accentBg} text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl flex-shrink-0`}>
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover Accent Line */}
                <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${card.accentBg} w-0 group-hover:w-full transition-all duration-500`} />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="/research"
            className="inline-flex items-center gap-3 rounded-full border-2 border-purple-500/50 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 px-8 py-4 font-semibold text-purple-300 transition-all hover:border-purple-400 hover:from-purple-600/40 hover:to-indigo-600/40 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View All Research Papers
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}