"use client";

import { useState, useEffect } from "react";
const TABS = [
  { label: "Home",     href: "#hero"     },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about"    },
];

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive]   = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = TABS.map((t) => t.href.slice(1));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const tab = TABS.find((t) => t.href === `#${id}`);
            if (tab) setActive(tab.label);
          }
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (tab: (typeof TABS)[number]) => {
    setActive(tab.label);
    document.getElementById(tab.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  const iconClass = "transition-colors cursor-pointer";
  const iconStyle = { color: "var(--text-muted)" };
  const iconHover = { color: "var(--text-primary)" };

  return (
    <header
      style={{
        background: scrolled ? "rgba(17,23,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: "1px solid rgba(176, 141, 87, 0.30)",
        transition: "background 0.25s, border-color 0.25s, backdrop-filter 0.25s",
      }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-8">
        {/* Name + title */}
        <div className="flex flex-col justify-center shrink-0">
          <span className="leading-tight" style={{ fontSize: "15px", fontWeight: 750, color: "var(--text-primary)" }}>
            Krishnan CS
          </span>
          <span className="leading-tight" style={{ fontSize: "12px", fontWeight: 750, color: "var(--accent-primary)" }}>
            AI Strategy Consultant
          </span>
        </div>

        {/* Nav tabs — underline style */}
        <div className="flex items-center gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleClick(tab)}
              className="px-3 py-1 font-medium transition-colors relative"
              style={
                active === tab.label
                  ? { fontSize: "15px", color: "var(--text-primary)", borderBottom: "2px solid var(--accent-primary)", paddingBottom: "2px" }
                  : { fontSize: "15px", color: "var(--text-muted)", borderBottom: "2px solid transparent", paddingBottom: "2px" }
              }
              onMouseEnter={(e) => {
                if (active !== tab.label)
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                if (active !== tab.label)
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Contact icons */}
        <div className="flex items-center gap-4">
            <a
              href="mailto:kchathadi@gmail.com"
              className={iconClass}
              style={iconStyle}
              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, iconHover)}
              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, iconStyle)}
              title="Email"
            >
              <EmailIcon />
            </a>
            <a
              href="https://linkedin.com/in/krishnancs/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconClass}
              style={iconStyle}
              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, iconHover)}
              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, iconStyle)}
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Krishnan-CS/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconClass}
              style={iconStyle}
              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, iconHover)}
              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, iconStyle)}
              title="GitHub"
            >
              <GitHubIcon />
            </a>
        </div>
      </nav>
    </header>
  );
}
