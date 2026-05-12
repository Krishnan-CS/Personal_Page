import profile from "@/profile.json";

const ICON_MAP: Record<string, React.ReactNode> = {
  "ti-route": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm6-12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm-6 0h3m3 0c0 3.75-3 5.25-3 8.25" />
    </svg>
  ),
  "ti-cpu": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <rect x="6" y="6" width="12" height="12" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6V3m6 3V3M9 21v-3m6 3v-3M6 9H3m3 6H3m18-6h-3m3 6h-3" />
    </svg>
  ),
  "ti-brain": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  ),
  "ti-settings-automation": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 6.75 2.9m-.857 17.672 1.41-.513M6.447 6.215l1.41-.513m11.048 14.07-1.41-.514M17.553 6.215l-1.41-.513" />
    </svg>
  ),
};

export default function Services() {
  const { tagline, availability_note, services } = profile.freelance;
  const { email } = profile.personal;

  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="section-eyebrow">{availability_note}</p>
          <h2 style={{ color: "var(--text-primary)" }}>Services</h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "var(--text-secondary)" }}>
            {tagline}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="card-solid p-7 flex flex-col gap-4 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                style={{
                  background: "var(--accent-primary-dim)",
                  border: "1px solid rgba(61,138,69,0.2)",
                  color: "var(--accent-primary)",
                }}
              >
                {ICON_MAP[s.icon]}
              </div>
              <div>
                <h3 className="mb-1.5" style={{ color: "var(--text-primary)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider my-16" />

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Ready to explore how AI can move the needle for your business?
          </p>
          <a href={`mailto:${email}`} className="btn-primary">
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
