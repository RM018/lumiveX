"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setIsLoaded(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-slate-900 pt-32 pb-20">
            {/* Animated background gradients - Cyan/Blue/Teal */}
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

            {/* Floating particles - neural network inspired */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
                <div className="absolute left-[10%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-cyan-400/60" />
                <div className="absolute right-[15%] top-[30%] h-1 w-1 animate-pulse rounded-full bg-blue-400/50 delay-700" />
                <div className="absolute left-[20%] bottom-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400/40 delay-1000" />
                <div className="absolute right-[25%] bottom-[35%] h-2 w-2 animate-pulse rounded-full bg-cyan-400/50 delay-500" />
                <div className="absolute left-[45%] top-[15%] h-1 w-1 animate-pulse rounded-full bg-blue-300/40 delay-300" />
                <div className="absolute right-[10%] bottom-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-teal-300/40 delay-900" />
                <div className="absolute left-[70%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-cyan-400/30 delay-200" />
                <div className="absolute left-[30%] bottom-[15%] h-1 w-1 animate-pulse rounded-full bg-blue-400/30 delay-600" />
            </div>

            <div className={`relative z-10 mx-auto max-w-7xl px-6 text-center transition-all duration-1000 md:px-8 ${isLoaded ? "opacity-100" : "opacity-0"
                }`}>
                <div className="mx-auto max-w-4xl space-y-10">
                    {/* Badge - Clean, professional */}
                    <div className={`inline-block transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}>
                        <p className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white/90 backdrop-blur-sm">
                            NEUROSCIENCE RESEARCH PIONEER
                        </p>
                    </div>

                    {/* Main Heading - Cyan/Blue/Teal gradient */}
                    <div className={`transition-all duration-1000 delay-100 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}>
                        <h1 className="text-5xl font-black leading-[1.1] text-white md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
                            Decoding the
                            <br />
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-teal-200 bg-clip-text text-transparent">
                                Human Brain
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-white/60 to-white/30 bg-clip-text text-transparent">
                                Through Advanced Research
                            </span>
                        </h1>
                    </div>

                    {/* Subheading - Clean typography */}
                    <div className={`transition-all duration-1000 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}>
                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl lg:text-2xl">
                            Exploring neural patterns, cognitive functions, and brain dynamics through
                            <span className="block mt-2 text-slate-400">
                                cutting-edge research and data-driven insights.
                            </span>
                        </p>
                    </div>

                    {/* CTA Buttons - Cyan/Blue theme */}
                    <div className={`flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}>
                        <a
                            href="/research"
                            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-10 py-4 text-base font-bold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
                        >
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 blur group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            Explore Research
                            <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                            >
                                <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        <a
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-cyan-500/40 hover:border-cyan-400/80 bg-white/5 backdrop-blur-sm px-10 py-4 text-base font-bold text-cyan-200 hover:text-white transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            Get in Touch
                            <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Stats - Cyan/Blue/Teal gradients */}
                    <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8 transition-all duration-1000 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}>
                        <div className="group cursor-pointer">
                            <p className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent md:text-6xl transition-transform group-hover:scale-110 duration-300">
                                247
                            </p>
                            <p className="mt-2 text-xs uppercase tracking-widest text-slate-400 font-semibold">Research Papers</p>
                        </div>

                        <div className="h-16 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

                        <div className="group cursor-pointer">
                            <p className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent md:text-6xl transition-transform group-hover:scale-110 duration-300">
                                1.2M
                            </p>
                            <p className="mt-2 text-xs uppercase tracking-widest text-slate-400 font-semibold">Neural Data Points</p>
                        </div>

                        <div className="h-16 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

                        <div className="group cursor-pointer">
                            <p className="text-5xl font-black bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent md:text-6xl transition-transform group-hover:scale-110 duration-300">
                                94%
                            </p>
                            <p className="mt-2 text-xs uppercase tracking-widest text-slate-400 font-semibold">Pattern Accuracy</p>
                        </div>
                    </div>

                    {/* Research Areas - Clean badges */}
                    <div className={`flex flex-wrap items-center justify-center gap-3 pt-4 transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}>
                        {[
                            { label: "Neural Connectivity", icon: "🔗" },
                            { label: "Cognitive Function", icon: "🧠" },
                            { label: "Brain Imaging", icon: "🔬" },
                            { label: "Neuroplasticity", icon: "⚡" }
                        ].map((area, i) => (
                            <span
                                key={i}
                                className="group rounded-full border border-cyan-500/20 bg-cyan-900/20 px-4 py-2 text-xs text-cyan-200 font-semibold backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-900/40 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                            >
                                {area.icon} {area.label}
                            </span>
                        ))}
                    </div>

                    {/* Trust indicators - Clean */}
                    <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-60 hover:opacity-100 transition-all duration-300 pt-6 ${isLoaded ? "translate-y-0 opacity-60" : "translate-y-4 opacity-0"
                        }`}>
                       
                    </div>
                </div>
            </div>

            {/* Scroll indicator - Clean */}
            <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-xs text-white/40 font-semibold tracking-widest">SCROLL</span>
                    <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-cyan-400/60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path d="M12 5v14m-7-7 7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-5 pointer-events-none" />
        </section>
    );
}