import { Zap, Brain, Palette, Puzzle } from "lucide-react";

const services = [
  {
    id: "invites",
    title: "Цифровые приглашения",
    description:
      "Создаю современные сайты-приглашения для свадеб и мероприятий. Разрабатываю персональные приглашения с уникальным дизайном, таймером, картой, RSVP-формой и полной адаптацией для мобильных устройств.",
    result: "Готово за 1–3 дня",
    icon: Zap,
    accent: "#2d5a4a",
    accentBg: "#eaf0ec",
  },
  {
    id: "landing",
    title: "Лендинги под ключ",
    description:
      "Разрабатываю продающие сайты для бизнеса и экспертов. Создаю современные лендинги для онлайн-школ, специалистов и компаний с акцентом на конверсию, скорость загрузки и удобство использования.",
    result: "Запуск за 3–7 дней",
    icon: Puzzle,
    accent: "#e8927c",
    accentBg: "#fdf0ec",
  },
  {
    id: "ai",
    title: "AI-сайты и веб-приложения",
    description:
      "Создаю AI-решения для бизнеса и автоматизации процессов. Разрабатываю AI-сервисы, чат-ботов и веб-приложения с интеграцией искусственного интеллекта, которые помогают ускорить работу и сократить рутинные задачи.",
    result: "Рабочий MVP за неделю",
    icon: Brain,
    accent: "#1a2420",
    accentBg: "#eaebe9",
  },
  {
    id: "webdesign",
    title: "Современный веб-дизайн",
    description:
      "Создаю стильные, адаптивные интерфейсы с продуманной структурой, плавными анимациями и удобным пользовательским опытом.",
    result: "Продуманный UX",
    icon: Palette,
    accent: "#a8c9b4",
    accentBg: "#f0f6f2",
  },
];

export function WhatIDo() {
  return (
    <section className="bg-hero-cream py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-widest text-hero-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-hero-green" />
            услуги
          </span>
          <h2
            className="mt-5 font-display text-hero-ink"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Что я
            <br />
            <span className="italic">делаю</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-hero-ink-soft">
            Четыре направления, в которых помогаю запускать и масштабировать цифровые продукты.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-hero-ink/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                  style={{ backgroundColor: service.accentBg, color: service.accent }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-display text-xl text-hero-ink">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-hero-ink-soft">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold" style={{ backgroundColor: service.accentBg, color: service.accent }}>
                  <span className="text-lg leading-none">→</span>
                  {service.result}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
