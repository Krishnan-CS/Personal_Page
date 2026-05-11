import profile from "@/profile.json";

export default function Projects() {
  const projects = profile.projects;

  return (
    <section id="projects" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-slate-800 rounded-xl p-6 flex flex-col gap-4 border border-slate-700 hover:border-indigo-500 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-base leading-snug">
                    {project.name}
                  </h3>
                  <span className="text-xs text-slate-500">{project.year}</span>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs px-3 py-1 rounded-full border border-slate-600 hover:border-indigo-400 text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-1">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-slate-300 text-xs flex gap-2">
                    <span className="text-indigo-400 shrink-0 mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-slate-700 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
