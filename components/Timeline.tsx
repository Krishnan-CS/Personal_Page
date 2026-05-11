import profile from "@/profile.json";

type TimelineItem =
  | { kind: "experience"; company: string; title: string; start: string; end: string; location: string; bullets: string[] }
  | { kind: "education"; degree: string; institution: string; year: string; gpa?: string; honors?: string }
  | { kind: "certification"; name: string; issuer: string; year: string };

function buildTimeline(): TimelineItem[] {
  const items: TimelineItem[] = [
    ...profile.work_experience.map((e) => ({ kind: "experience" as const, ...e })),
    ...profile.education.map((e) => ({ kind: "education" as const, ...e })),
    ...profile.certifications.map((c) => ({ kind: "certification" as const, ...c })),
  ];
  return items;
}

function DotColor({ kind }: { kind: TimelineItem["kind"] }) {
  const colors = {
    experience: "bg-indigo-500",
    education: "bg-emerald-500",
    certification: "bg-amber-400",
  };
  return (
    <div
      className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ring-4 ring-slate-900 ${colors[kind]}`}
    />
  );
}

export default function Timeline() {
  const items = buildTimeline();

  return (
    <section id="timeline" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Experience & Education
        </h2>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-12 text-xs text-slate-400">
          {(["experience", "education", "certification"] as const).map((k) => (
            <span key={k} className="flex items-center gap-1.5">
              <DotColor kind={k} />
              {k.charAt(0).toUpperCase() + k.slice(1)}
            </span>
          ))}
        </div>

        <div className="relative border-l border-slate-700 pl-6 space-y-10">
          {items.map((item, i) => (
            <div key={i} className="relative flex gap-4">
              {/* Dot on the line */}
              <div className="absolute -left-[1.625rem]">
                <DotColor kind={item.kind} />
              </div>

              <div className="flex-1 bg-slate-800 rounded-xl p-5 border border-slate-700">
                {item.kind === "experience" && (
                  <>
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="font-semibold text-base">{item.title}</h3>
                        <p className="text-indigo-400 text-sm">{item.company}</p>
                      </div>
                      <span className="text-xs text-slate-500 shrink-0">
                        {item.start} – {item.end} · {item.location}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="text-slate-300 text-sm flex gap-2">
                          <span className="text-indigo-400 shrink-0 mt-0.5">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {item.kind === "education" && (
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="font-semibold text-base">{item.degree}</h3>
                      <p className="text-emerald-400 text-sm">{item.institution}</p>
                      {item.gpa && (
                        <p className="text-slate-400 text-xs mt-0.5">GPA: {item.gpa}</p>
                      )}
                      {item.honors && (
                        <p className="text-slate-400 text-xs mt-0.5">{item.honors}</p>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 shrink-0">{item.year}</span>
                  </div>
                )}

                {item.kind === "certification" && (
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="font-semibold text-base">{item.name}</h3>
                      <p className="text-amber-400 text-sm">{item.issuer}</p>
                    </div>
                    <span className="text-xs text-slate-500 shrink-0">{item.year}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
