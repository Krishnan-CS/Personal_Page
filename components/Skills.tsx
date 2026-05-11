import profile from "@/profile.json";

const CATEGORY_LABELS: Record<string, string> = {
  genai_nlp: "GenAI & NLP",
  ml_modeling: "ML & Modeling",
  mlops_deployment: "MLOps & Deployment",
  data_analytics: "Data & Analytics",
  business_strategy: "Business & Strategy",
  engineering: "Engineering",
  agentic_ai: "Agentic AI",
  dev_tools: "Dev Tools",
  cloud_platforms: "Cloud & Platforms",
  soft_skills: "Soft Skills",
};

const LEVEL_COLOR: Record<string, string> = {
  advanced: "bg-indigo-600 text-white",
  intermediate: "bg-slate-700 text-slate-200",
  beginner: "bg-slate-800 text-slate-400",
};

type Skill = { name: string; level: string };

export default function Skills() {
  const skills = profile.skills as Record<string, Skill[] | string[]>;

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(skills).map(([key, items]) => (
            <div key={key} className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                {CATEGORY_LABELS[key] ?? key}
              </h3>

              {key === "soft_skills" ? (
                <ul className="space-y-1">
                  {(items as string[]).map((s) => (
                    <li key={s} className="text-slate-300 text-sm flex gap-2">
                      <span className="text-indigo-400">▸</span> {s}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {(items as Skill[]).map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium ${LEVEL_COLOR[skill.level] ?? LEVEL_COLOR.beginner}`}
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
        <div className="mt-10 flex justify-center gap-6 text-xs text-slate-400">
          {Object.entries(LEVEL_COLOR).map(([level, cls]) => (
            <span key={level} className={`px-2.5 py-1 rounded-md font-medium ${cls}`}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
