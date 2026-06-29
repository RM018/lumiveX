"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface ResearchCard {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  accentColor: string;
  ringColor: string;
  year: string;
}

const researchCards: ResearchCard[] = [
  {
    title: "Neural Connectivity Patterns",
    description: "Comprehensive analysis of brain network dynamics and synaptic integration across regions.",
    metric: "2.4M",
    metricLabel: "Data Points",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    accentColor: "text-purple-500",
    ringColor: "stroke-purple-500",
    year: "2024"
  },
  {
    title: "Cognitive Function Mapping",
    description: "Investigating the relationship between structural brain features and cognitive abilities.",
    metric: "847",
    metricLabel: "Participants",
    image: "https://images.unsplash.com/photo-1559027615-cd1628902d4a?auto=format&fit=crop&q=80&w=800",
    accentColor: "text-amber-500",
    ringColor: "stroke-amber-500",
    year: "2024"
  },
  {
    title: "Neuroplasticity in Learning",
    description: "Longitudinal study on brain adaptation during intensive skill acquisition and learning.",
    metric: "18 Mo.",
    metricLabel: "Study Duration",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    accentColor: "text-indigo-500",
    ringColor: "stroke-indigo-500",
    year: "2023"
  },
  {
    title: "Neurodegenerative Biomarkers",
    description: "Identifying early indicators of neurological disorders through advanced neuroimaging.",
    metric: "94%",
    metricLabel: "Detection Rate",
    image: "https://images.unsplash.com/photo-1576091160588-112fa1acb41f?auto=format&fit=crop&q=80&w=800",
    accentColor: "text-cyan-500",
    ringColor: "stroke-cyan-500",
    year: "2023"
  },
];

export default function Features() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="featured-research" className="bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 px-0 py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <div className="mb-12 px-6 md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400/70">
            FEATURED RESEARCH
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Latest Research Papers
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex gap-6 overflow-x-auto px-6 pb-12 md:px-12"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {researchCards.map((card) => (
              <article
                key={card.title}
                className="group relative flex-shrink-0 overflow-hidden rounded-[48px] border border-white/10 bg-slate-900/80 backdrop-blur-sm"
                style={{
                  width: "min(420px, calc(100vw - 48px))",
                  height: "600px",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 h-full w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width:1024px) 420px, calc(100vw - 48px)"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={75}
                  />
                </div>
                
                {/* Premium Gradient Overlay - Research aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-slate-100/30 to-slate-950/95" />

                <div className="absolute inset-0 flex flex-col p-10">
                  {/* Top Section - Title & Description */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold tracking-wider text-purple-900 bg-amber-200/70 px-3 py-1 rounded-full">
                        {card.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-slate-700 leading-snug">
                      {card.description}
                    </p>
                  </div>

                  {/* Center Metric Widget - Research Stats */}
                  <div className="mt-auto flex flex-col items-center justify-center py-8">
                    <div className="relative flex h-40 w-40 items-center justify-center">
                      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="3" />
                        <circle
                          cx="50" cy="50" r="46"
                          fill="none"
                          className={`${card.ringColor} transition-all duration-1000`}
                          strokeWidth="3"
                          strokeDasharray="289"
                          strokeDashoffset="80"
                          strokeLinecap="round"
                        />
                      </svg>
                      
                      <div className="text-center">
                        <div className={`text-3xl font-black ${card.accentColor}`}>
                          {card.metric}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mt-1">
                          {card.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Read Paper Button */}
                  <div className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transition-all hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 px-6 text-center md:px-12">
          <a
            href="/all-papers"
            className="inline-flex items-center gap-2 rounded-full border-2 border-amber-500/50 bg-amber-500/10 px-8 py-3 font-semibold text-amber-300 transition-all hover:border-amber-400 hover:bg-amber-500/20"
          >
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