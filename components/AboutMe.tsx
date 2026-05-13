"use client";

import { useState } from "react";
import profile from "@/profile.json";

/* ── Skills ── */

const CATEGORY_LABELS: Record<string, string> = {
  genai_nlp:        "GenAI & NLP",
  ml_modeling:      "ML & Modeling",
  mlops_deployment: "MLOps & Deployment",
  data_analytics:   "Data & Analytics",
  business_strategy:"Business & Strategy",
  engineering:      "Engineering",
  agentic_ai:       "Agentic AI",
  dev_tools:        "Dev Tools",
  cloud_platforms:  "Cloud & Platforms",
  soft_skills:      "Soft Skills",
};

type Skill = { name: string; level: string };

function SkillsPanel() {
  const skills = profile.skills as Record<string, Skill[] | string[]>;
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([key, items]) => (
          <div
            key={key}
            className="rounded-xl p-5"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="section-eyebrow mb-3"
              style={{ color: "var(--accent-primary)", letterSpacing: "0.1em" }}
            >
              {CATEGORY_LABELS[key] ?? key}
            </h3>
            {key === "soft_skills" ? (
              <ul className="space-y-1">
                {(items as string[]).map((s) => (
                  <li key={s} className="text-sm flex gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent-primary)" }} className="shrink-0">▸</span>
                    {s}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-wrap gap-2">
                {(items as Skill[]).map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-${skill.level === "advanced" ? "advanced" : skill.level === "intermediate" ? "intermediate" : "beginner"}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4">
        {(["advanced", "intermediate", "beginner"] as const).map((level) => (
          <span key={level} className={`skill-${level}`}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Timeline ── */

type TimelineItem =
  | { kind: "experience"; company: string; title: string; start: string; end: string; location: string; bullets: string[] }
  | { kind: "education";  degree: string; institution: string; year: string; gpa?: string; honors?: string }
  | { kind: "certification"; name: string; issuer: string; year: string };

const DOT_STYLE: Record<TimelineItem["kind"], string> = {
  experience:    "dot-experience",
  education:     "dot-education",
  certification: "dot-certification",
};

const LABEL_COLOR: Record<TimelineItem["kind"], string> = {
  experience:    "var(--accent-primary)",
  education:     "var(--accent-secondary)",
  certification: "#c9a84c",
};

function Dot({ kind }: { kind: TimelineItem["kind"] }) {
  return (
    <div
      className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${DOT_STYLE[kind]}`}
      style={{ boxShadow: "0 0 0 4px var(--bg-base)" }}
    />
  );
}

function TimelinePanel() {
  const items: TimelineItem[] = [
    ...profile.work_experience.map((e) => ({ kind: "experience" as const, ...e })),
    ...profile.education.map((e)       => ({ kind: "education" as const, ...e })),
    ...profile.certifications.map((c)  => ({ kind: "certification" as const, ...c })),
  ];

  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="flex gap-6 text-xs" style={{ color: "var(--text-muted)" }}>
        {(["experience", "education", "certification"] as const).map((k) => (
          <span key={k} className="flex items-center gap-1.5">
            <Dot kind={k} />
            {k.charAt(0).toUpperCase() + k.slice(1)}
          </span>
        ))}
      </div>

      <div
        className="relative pl-6 space-y-8"
        style={{ borderLeft: "1px solid var(--border)" }}
      >
        {items.map((item, i) => (
          <div key={i} className="relative flex gap-4">
            <div className="absolute -left-[1.625rem]">
              <Dot kind={item.kind} />
            </div>
            <div
              className="flex-1 rounded-xl p-5"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {item.kind === "experience" && (
                <>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                      <p className="text-sm" style={{ color: LABEL_COLOR.experience }}>{item.company}</p>
                    </div>
                    <span className="text-xs shrink-0" style={{ color: "var(--text-muted)" }}>
                      {item.start} – {item.end} · {item.location}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="text-sm flex gap-2" style={{ color: "var(--text-secondary)" }}>
                        <span className="shrink-0 mt-0.5" style={{ color: "var(--accent-primary)" }}>▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {item.kind === "education" && (
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h3 style={{ color: "var(--text-primary)" }}>{item.degree}</h3>
                    <p className="text-sm" style={{ color: LABEL_COLOR.education }}>{item.institution}</p>
                    {item.gpa    && <p className="card-subtext mt-0.5" style={{ color: "var(--text-muted)" }}>GPA: {item.gpa}</p>}
                    {item.honors && <p className="card-subtext mt-0.5" style={{ color: "var(--text-muted)" }}>{item.honors}</p>}
                  </div>
                  <span className="text-xs shrink-0" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                </div>
              )}
              {item.kind === "certification" && (
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <h3 style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                    <p className="text-sm" style={{ color: LABEL_COLOR.certification }}>{item.issuer}</p>
                  </div>
                  <span className="text-xs shrink-0" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main ── */

type Tab = "skills" | "timeline";

const TABS: { id: Tab; label: string }[] = [
  { id: "skills",   label: "Skills" },
  { id: "timeline", label: "Experience & Education" },
];

export default function AboutMe() {
  const [active, setActive] = useState<Tab>("skills");

  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <p className="section-eyebrow mb-2">Background & expertise</p>
          <h2 style={{ color: "var(--text-primary)" }}>About Me</h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center">
          <div
            className="inline-flex rounded-xl p-1 gap-1"
            style={{ backgroundColor: "var(--bg-elevated)" }}
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="px-5 py-2 rounded-lg text-sm font-medium transition-colors"
                style={
                  active === t.id
                    ? { backgroundColor: "var(--accent-primary)", color: "#fff" }
                    : { color: "var(--text-muted)" }
                }
                onMouseEnter={(e) => {
                  if (active !== t.id)
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (active !== t.id)
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {active === "skills" ? <SkillsPanel /> : <TimelinePanel />}
      </div>
    </section>
  );
}
