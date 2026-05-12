import profile from "@/profile.json";

export default function Hero() {
  const { brands, signals } = profile.highlights;
  const { availability, availability_note } = profile.freelance;
  const education = profile.education;

  const clientBrands    = brands.filter((b) => b.type === "client");
  const employerBrands  = brands.filter((b) => b.type === "employer");
  const educationBrands = brands.filter((b) => b.type === "education");

  const stats = [
    {
      value: "15+",
      label: "Years of end-to-end delivery",
      sub: "Experience",
    },
    {
      value: `${clientBrands.length}+`,
      label: clientBrands.slice(0, 3).map((b) => b.name.split(" ")[0]).join(" · "),
      sub: "Enterprise Clients",
    },
    {
      value: signals.filter((s) => s.type === "competition").length.toString(),
      label: "Kaggle #1 · 2 hackathons",
      sub: "Competitions Won",
    },
    {
      value: availability === "open" ? "Open" : "Unavailable",
      label: availability_note,
      sub: "Availability",
      dot: availability === "open",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col pt-14"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Two-column body */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[320px_1fr]">

        {/* Left — stat cards */}
        <div
          className="p-6 flex flex-col gap-4"
          style={{ borderRight: "1px solid var(--border)" }}
        >
          {stats.map((s) => (
            <div
              key={s.sub}
              className="rounded-xl px-5 py-4"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="section-eyebrow mb-2">{s.sub}</p>
              <div className="flex items-center gap-2">
                {s.dot && (
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  />
                )}
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {s.value}
                </p>
              </div>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Right — highlights */}
        <div className="p-8 space-y-10 overflow-y-auto">

          {/* Career highlights */}
          <section>
            <p className="section-eyebrow mb-4">Career Highlights</p>
            {employerBrands.map((b) => (
              <div key={b.name} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ backgroundColor: b.color + "22", color: b.color }}
                >
                  {b.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
                    {b.name} · 10 years
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Engineering Manager · SIMULIA R&D · Delivered for Apple, Boeing, Red Bull Racing, Exxon Mobil
                  </p>
                </div>
              </div>
            ))}
          </section>

          <div className="divider" />

          {/* Enterprise clients */}
          <section>
            <p className="section-eyebrow mb-4">Enterprise Clients Served</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[...clientBrands, ...employerBrands,
                { name: "Georgia Tech", color: "#B8860B", category: "Research & teaching", type: "education" }
              ].map((b) => (
                <div
                  key={b.name}
                  className="rounded-xl px-4 py-3 text-center"
                  style={{
                    background: "var(--surface-matte)",
                    border: "1px solid var(--border-subtle)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <p className="font-semibold text-sm" style={{ color: b.color }}>
                    {b.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {b.category}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="divider" />

          {/* Education */}
          <section>
            <p className="section-eyebrow mb-4">Education</p>
            <div className="space-y-3">
              {education.map((e) => {
                const abbr =
                  e.institution.includes("ISB") ? "ISB" :
                  e.institution.includes("UT Austin") ? "UT" :
                  e.institution.includes("Georgia") ? "GT" :
                  e.institution.slice(0, 2).toUpperCase();
                const eduBrand = educationBrands.find((b) =>
                  b.name === "ISB" ? abbr === "ISB" : b.name.includes(abbr)
                );
                const color = eduBrand?.color ?? "var(--accent-primary)";
                return (
                  <div
                    key={e.degree}
                    className="flex items-center gap-4 pb-3"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ backgroundColor: color + "22", color }}
                    >
                      {abbr}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                        {e.degree}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {e.institution} · {e.year}
                        {e.honors ? ` · ${e.honors}` : ""}
                        {e.gpa ? ` · GPA ${e.gpa}` : ""}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="divider" />

          {/* Competition signals */}
          <section>
            <p className="section-eyebrow mb-4">Competition Wins & Signals</p>
            <div className="space-y-3">
              {signals.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className={s.type === "award" ? "badge-award" : "badge-competition"}>
                    {s.label}
                  </span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {s.detail}
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
