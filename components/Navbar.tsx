"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About LumiveX", href: "/about-nurotech" },
  { label: "Blog", href: "/blog" },
  { label: "Research", href: "/research" },
  { label: "Benefits", href: "/benefits" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      {/* 🔽 Changed padding: removed left padding (pl-0) */}
      <nav className="mx-auto w-full max-w-[1400px] pl-0 pr-6 py-5 md:pl-0 md:pr-12 lg:py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="relative block h-8 w-40 transition-opacity duration-300 hover:opacity-70 md:h-10 md:w-48"
          >
           <Image
  src="/logo.jpeg"
  alt="LumiveX Neura Labs Logo"
  
  className="object-contain object-left"
  width={45}   
    height={8} 
  priority
/>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center text-white transition-opacity duration-300 hover:opacity-70"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {isOpen ? (
                <path d="M6 6 18 18M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`grid overflow-hidden transition-all duration-500 ${
            isOpen ? "mt-8 max-h-96 gap-1" : "max-h-0"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}