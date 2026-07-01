import Link from "next/link";

export default function Footer() {
  // Define explicit navigation links with correct paths
  const quickLinks = [
    { label: "About LumiveX Neura Labs", href: "/about-nurotech" },
    { label: "Blog", href: "/blog" },
    { label: "Research", href: "/research" },
    { label: "Benefits", href: "/benefits" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-70"
            >
              LumiveX Neura Labs
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-white/60">
              LumiveX Neura Labs by Aaruchudar delivers the research and
              innovations done by the organisation so far.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] text-white/60">
              QUICK LINKS
            </h4>
            <ul className="space-y-4">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-base text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] text-white/60">
              GET IN TOUCH
            </h4>
            <div className="space-y-4">
              <p className="text-base text-white/80">
                Email:{" "}
                <a
                  href="mailto:ask@aaruchudar.com"
                  className="transition-colors duration-300 hover:text-white"
                >
                  ask@aaruchudar.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8 lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
            <p>&copy; {new Date().getFullYear()} Aaruchudar. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-white/60"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-white/60"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}