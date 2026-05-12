import profile from "@/profile.json";

type HeroSection = {
  eyebrow: string;
  headline: string;
  body: string;
  features: { title: string; subtext: string }[];
  cta: { title: string; subtext: string; button: string; href: string };
};

export default function Hero() {
  const { freelance, specialties, business_problems } = profile as
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

  const stats = [
    {
      sub: "Experience",
      value: "15+",
      label: "years end-to-end delivery",
    },
    {
      sub: "Enterprise Clients",
      value: "10+",
      label: "Apple · Boeing · Red Bull Racing",
    },
    {
      sub: "AI Projects Delivered",
      value: "10+",
      label: "Document Intelligence · Power Trading Forecasts · Shopping Cart Recommendations",
    },
    {
      sub: "Availability",
      value: freelance.availability === "open" ? "Open" : "Unavailable",
      label: freelance.availability_note,
      dot: freelance.availability === "open",
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
          className="p-5 flex flex-col gap-3 overflow-y-auto"
          style={{ borderRight: "1px solid var(--border)" }}
        >
          {/* Stat cards */}
          {stats.map((s) => (
            <div key={s.sub} className="stat-card">
              <p className="section-eyebrow" style={{ color: "var(--accent-primary)" }}>{s.sub}</p>
              <div className="flex items-center gap-1.5 mt-1">
                {s.dot && <span className="avail-dot" />}
                <span className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {s.value}
                </span>
              </div>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</p>
            </div>
          ))}

          {/* Specialties */}
          <div className="pt-1.5" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="section-eyebrow mb-1.5">Specialties</p>
            <ul className="space-y-1">
              {specialties.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="bullet-dot" />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="pt-1.5" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="section-eyebrow mb-1.5">Education</p>
            <ul className="space-y-1">
              {educationItems.map((e) => (
                <li key={e.label} className="flex items-start gap-2">
                  <span
                    className="mt-1 w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: e.color }}
                  />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{e.label}</span>
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

            {/* Feature mini-cards */}
            <div className="flex flex-col sm:flex-row gap-3">
              {hero.features.map((f) => (
                <div key={f.title} className="feature-card">
                  <GridIcon />
                  <p className="font-semibold text-sm mt-2 mb-0.5" style={{ color: "var(--text-primary)" }}>
                    {f.title}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{f.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business problems */}
          <section>
            <p className="section-eyebrow mb-3">Business Problems I Solve</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {business_problems.map((bp) => (
                <div key={bp.title} className="problem-card">
                  <GridIcon />
                  <p className="font-semibold text-sm mt-2 mb-1" style={{ color: "var(--text-primary)" }}>
                    {bp.title}
                  </p>
                  <p className="text-xs italic" style={{ color: "var(--text-muted)" }}>
                    &ldquo;{bp.subtext}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA card */}
          <div className="cta-card">
            <div>
              <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>
                {hero.cta.title}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{hero.cta.subtext}</p>
            </div>
            <a href={hero.cta.href} className="btn-ghost shrink-0">
              {hero.cta.button}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-primary)", opacity: 0.7 }}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
