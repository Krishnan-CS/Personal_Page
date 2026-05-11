import profile from "@/profile.json";

export default function Hero() {
  const { name, linkedin, github } = profile.personal;
  const { target_roles, pivot_context } = profile.career;
  const summary = profile.summary_hints;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-3xl space-y-6">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          {name}
        </h1>

        {/* Title / pivot context */}
        <p className="text-lg sm:text-xl text-slate-300 font-medium">
          {pivot_context}
        </p>

        {/* Target roles */}
        <div className="flex flex-wrap justify-center gap-2">
          {target_roles.map((role) => (
            <span
              key={role}
              className="px-3 py-1 text-sm rounded-full border border-slate-500 text-slate-300 bg-slate-800/50"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Summary bullets */}
        <ul className="text-slate-400 text-sm sm:text-base space-y-2 text-left list-none">
          {summary.map((hint, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-indigo-400 mt-1 shrink-0">▸</span>
              <span>{hint}</span>
            </li>
          ))}
        </ul>

        {/* CTA links */}
        <div className="flex justify-center gap-4 pt-2">
          <a
            href={`https://${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`https://${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white font-medium transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 animate-bounce text-slate-500 text-sm">
        ↓ scroll
      </div>
    </section>
  );
}
