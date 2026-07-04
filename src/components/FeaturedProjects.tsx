import { Sparkles, BarChart3, Rocket } from "lucide-react";

const projects = [
  {
    id: "wedding-invite",
    title: "Wedding Invite",
    description: "Современное цифровое приглашение на свадьбу. Персональная страница с таймером, картой, программой мероприятия, RSVP-формой и адаптивным дизайном для гостей.",
    tags: ["Next.js", "React", "Tailwind", "Supabase"],
    icon: Sparkles,
    accent: "#2d5a4a",
  },
  {
    id: "edulanding",
    title: "EduLanding",
    description: "Лендинг для онлайн-школы и образовательных продуктов. Посадочная страница с высокой скоростью загрузки, удобной структурой и формами захвата заявок для увеличения конверсии.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    icon: BarChart3,
    accent: "#e8927c",
  },
  {
    id: "ai-workspace",
    title: "AI Workspace",
    description: "AI-веб-приложение для автоматизации бизнес-задач. Интеллектуальный сервис с AI-ассистентом, генерацией контента и интеграцией внешних сервисов для ускорения рабочих процессов.",
    tags: ["OpenAI", "LangChain", "PostgreSQL", "Python"],
    icon: Rocket,
    accent: "#1a2420",
  },
];

function PreviewPlaceholder({ accent }: { accent: string }) {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-t-xl bg-[#ede9df]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${accent} 0%, transparent 70%)`,
        }}
      />
      <svg
        className="absolute bottom-0 left-0 h-full w-full"
        viewBox="0 0 400 176"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="24" y="24" width="120" height="8" rx="4" fill={accent} fillOpacity="0.12" />
        <rect x="24" y="44" width="80" height="6" rx="3" fill={accent} fillOpacity="0.08" />
        <rect x="24" y="60" width="352" height="1" rx="0.5" fill={accent} fillOpacity="0.1" />
        <rect x="24" y="76" width="160" height="60" rx="8" fill={accent} fillOpacity="0.06" />
        <rect x="200" y="76" width="176" height="60" rx="8" fill={accent} fillOpacity="0.06" />
        <rect x="24" y="152" width="100" height="6" rx="3" fill={accent} fillOpacity="0.08" />
      </svg>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-hero-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-widest text-hero-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-hero-green" />
            портфолио
          </span>
          <h2
            className="mt-5 font-display text-hero-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Избранные
            <br />
            <span className="italic">проекты</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-hero-ink-soft">
            Несколько свежих работ, собранных вайбкодингом: от MVP до полноценных продуктов.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-hero-ink/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <PreviewPlaceholder accent={project.accent} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white"
                      style={{ backgroundColor: project.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl text-hero-ink">{project.title}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-hero-ink-soft">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-hero-ink/10 bg-hero-cream px-2.5 py-1 text-xs font-medium text-hero-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
