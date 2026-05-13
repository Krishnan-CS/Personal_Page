import React from "react";
import profile from "@/profile.json";

type HeroSection = {
  eyebrow: string;
  headline: string;
  body: string;
  features: { title: string; subtext: string }[];
  cta: { title: string; subtext: string; button: string; href: string };
};

export default function Hero() {
  const { specialties, business_problems } = profile as
    typeof profile & {
      specialties: string[];
      business_problems: { title: string; subtext: string }[];
    };
  const hero = (profile as unknown as { hero_section: HeroSection }).hero_section;
  const educationItems = [
    { label: "ISB - Business Analytics",       color: "#854F0B" },
    { label: "UT Austin - Data Science",       color: "#185FA5" },
    { label: "Georgia Tech - Aerospace Engineering", color: "#B8860B" },
  ];

  const stats: { sub: string; value: string; label: React.ReactNode }[] = [
    {
      sub: "Experience",
      value: "15+",
      label: <><span>Dassault Systemes</span><br /><span>Cognizant Technology Solutions</span></>,
    },
    {
      sub: "AI Projects Delivered",
      value: "10+",
      label: <><span>Document Intelligence</span><br /><span>Power Trading Forecasts</span><br /><span>Shopping Cart Recommendations</span></>,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col pt-14"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[340px_1fr]">

        {/* ── Left column ── */}
        <div
          className="p-6 flex flex-col gap-5 overflow-y-auto"
          style={{ borderRight: "1px solid var(--border)" }}
        >
          {/* Stat cards */}
          {stats.map((s) => (
            <div key={s.sub} className="stat-card">
              <p className="section-eyebrow" style={{ color: "var(--accent-primary)" }}>{s.sub}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="font-bold" style={{ fontSize: "1.375rem", color: "var(--text-primary)" }}>
                  {s.value}
                </span>
              </div>
              <p className="card-subtext mt-1" style={{ color: "var(--accent-secondary)", opacity: 0.75 }}>{s.label}</p>
            </div>
          ))}

          {/* Specialties */}
          <div className="pt-2" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="section-eyebrow mb-2">Specialties</p>
            <ul className="space-y-2">
              {specialties.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="bullet-dot" />
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="pt-2" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="section-eyebrow mb-2">Education</p>
            <ul className="space-y-2">
              {educationItems.map((e) => (
                <li key={e.label} className="flex items-start gap-2">
                  <span
                    className="mt-1 w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: e.color }}
                  />
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{e.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="p-6 space-y-6 overflow-y-auto">

          {/* Hero accent card */}
          <div className="hero-accent-card">
            <p
              className="section-eyebrow mb-3"
              style={{ color: "var(--accent-primary)" }}
            >
              {hero.eyebrow}
            </p>
            <h2
              className="text-2xl font-bold leading-snug mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {hero.headline}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {hero.body}
            </p>
            <div className="flex items-center justify-between gap-4 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                {hero.cta.title}
              </p>
              <a href={hero.cta.href} className="btn-ghost shrink-0">
                {hero.cta.button} <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <hr style={{ borderColor: "var(--border)" }} />

          {/* Business problems */}
          <section className="mt-2">
            <p className="section-eyebrow mb-3">Business Problems I Solve</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {business_problems.map((bp, i) => (
                <div key={bp.title} className="problem-card">
                  <ProblemIcon index={i} />
                  <p className="font-semibold text-base mt-2 mb-1" style={{ color: "var(--text-primary)" }}>
                    {bp.title}
                  </p>
                  <p className="card-subtext" style={{ color: "var(--text-muted)" }}>
                    &ldquo;{bp.subtext}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </section>
  );
}

const iconStyle: React.CSSProperties = { color: "var(--accent-primary)", opacity: 0.8 };

function ProblemIcon({ index }: { index: number }) {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, style: iconStyle };
  if (index === 0) return (
    // Forecasting & Optimization — trend line with upward arrow
    <svg {...props}>
      <polyline points="2 17 8 11 13 14 22 5" />
      <polyline points="16 5 22 5 22 11" />
    </svg>
  );
  if (index === 1) return (
    // Document Intelligence — document with magnifier
    <svg {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <circle cx="10" cy="15" r="2" />
      <line x1="12" y1="17" x2="14.5" y2="19.5" />
    </svg>
  );
  if (index === 2) return (
    // Recommendation & Personalisation — user with sparkle
    <svg {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M18 3l.5 1.5L20 5l-1.5.5L18 7l-.5-1.5L16 5l1.5-.5z" />
    </svg>
  );
  // index === 3: AI Risk & Explainability — shield with check
  return (
    <svg {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
