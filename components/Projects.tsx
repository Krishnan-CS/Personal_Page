import profile from "@/profile.json";

export default function Projects() {
  const projects = profile.projects;

  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-2">Selected work</p>
          <h2 style={{ color: "var(--text-primary)" }}>Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.name} className="card-solid p-6 flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 style={{ color: "var(--text-primary)" }}>{project.name}</h3>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {project.year}
                  </span>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-pill"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1">
                {project.highlights.map((h, i) => (
                  <li key={i} className="card-subtext flex gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span className="shrink-0 mt-0.5" style={{ color: "var(--accent-primary)" }}>▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
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
