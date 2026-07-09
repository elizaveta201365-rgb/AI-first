import { ArrowRight, Mail } from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #c9dfd0 0%, #b8d4c2 55%, #a8c9b4 100%)",
      }}
    >
      {/* Decorative floating shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-[8%] h-3 w-3 rounded-full bg-hero-ink/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-32 right-[18%] h-6 w-6 rounded-full bg-hero-ink/20 blur-[2px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[45%] left-[42%] h-2 w-2 rounded-full bg-hero-ink/30"
      />

      {/* Nav */}
      <header className="relative z-10 mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 pt-6 sm:px-8 sm:pt-8">
        <div />
        <a
          href="#contact"
          className="shrink-0 rounded-full border border-hero-ink/20 bg-white/50 backdrop-blur px-4 py-2 text-sm font-medium text-hero-ink hover:bg-white/80 transition-colors"
        >
          Связаться
        </a>
      </header>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-12 pb-20 sm:px-8 sm:pt-16 lg:pt-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:items-center">
          {/* Left */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/50 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-widest text-hero-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-hero-coral" />
              vibe coding · portfolio
            </span>

            <h1
              className="mt-6 font-display text-hero-ink"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Делаю <span className="italic text-hero-green">AI-продукты</span> нового поколения
            </h1>

            <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-hero-ink-soft">
              Разрабатываю MVP, лендинги и веб-приложения с использованием AI и вайбкодинга — быстро, гибко и без лишней разработки.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-hero-green px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(45,90,74,0.6)] hover:bg-hero-green-hover hover:-translate-y-0.5 transition-all"
              >
                Посмотреть проекты
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-hero-coral px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(232,146,124,0.7)] hover:bg-hero-coral-hover hover:-translate-y-0.5 transition-all"
              >
                <Mail className="h-4 w-4" />
                Связаться
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-hero-ink-soft">
              <div>
                <p className="font-display text-2xl text-hero-ink leading-none">50+</p>
                <p className="mt-1 text-xs uppercase tracking-widest">проектов</p>
              </div>
              <div className="h-8 w-px bg-hero-ink/20" />
              <div>
                <p className="font-display text-2xl text-hero-ink leading-none">7 дней</p>
                <p className="mt-1 text-xs uppercase tracking-widest">средний MVP</p>
              </div>
            </div>
          </div>

          {/* Right: dashboard */}
          <div className="min-w-0">
            <HeroDashboard />
          </div>
        </div>
      </div>

      {/* Smooth wave transition to next block */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg
          viewBox="0 0 1440 180"
          className="block w-full h-[80px] sm:h-[120px] lg:h-[160px]"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,80 C240,160 480,20 720,60 C960,100 1200,180 1440,100 L1440,180 L0,180 Z"
            fill="#f5f1e8"
          />
          <path
            d="M0,120 C240,190 520,60 780,110 C1040,160 1240,200 1440,140 L1440,180 L0,180 Z"
            fill="#f5f1e8"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}