const steps = [
  {
    id: "01",
    title: "Понимаю задачу",
    description:
      "Разбираю цель бизнеса, аудиторию и сценарии использования, чтобы попасть в результат, а не «просто сделать сайт».",
    accent: "#2d5a4a",
    accentBg: "#eaf0ec",
  },
  {
    id: "02",
    title: "Быстро собираю решение",
    description:
      "Делаю прототип и основу продукта с помощью AI и современных инструментов разработки.",
    accent: "#e8927c",
    accentBg: "#fdf0ec",
  },
  {
    id: "03",
    title: "Дорабатываю и улучшаю",
    description:
      "Тестирую сценарии, исправляю детали, оптимизирую UX, скорость и поведение интерфейса.",
    accent: "#1a2420",
    accentBg: "#eaebe9",
  },
  {
    id: "04",
    title: "Запускаю и помогаю развивать",
    description:
      "Вывод в продакшн, подключение аналитики, интеграций и дальнейшее улучшение продукта.",
    accent: "#a8c9b4",
    accentBg: "#f0f6f2",
  },
];

export function HowIWork() {
  return (
    <section className="bg-hero-cream py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-widest text-hero-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-hero-coral" />
            процесс
          </span>
          <h2
            className="mt-5 font-display text-hero-ink"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Как я
            <br />
            <span className="italic">работаю</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-hero-ink-soft">
            Прозрачный процесс от идеи до запуска — без лишней бюрократии и затяжных согласований.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden lg:block">
          <div
            className="absolute left-0 right-0 top-6 h-px bg-hero-ink/10"
            aria-hidden="true"
          />
          <ol className="relative grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <li key={step.id} className="flex flex-col items-start">
                <div
                  className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg"
                  style={{ backgroundColor: step.accentBg, color: step.accent }}
                >
                  {step.id}
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-hero-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-hero-ink-soft">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="relative lg:hidden">
          <div
            className="absolute left-6 top-6 bottom-6 w-px bg-hero-ink/10"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <li
                key={step.id}
                className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5"
              >
                <div
                  className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg"
                  style={{ backgroundColor: step.accentBg, color: step.accent }}
                >
                  {step.id}
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-display text-xl sm:text-2xl leading-tight text-hero-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-hero-ink-soft">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
