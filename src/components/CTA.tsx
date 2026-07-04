import { Send, Mail } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #c9dfd0 0%, #b8d4c2 55%, #a8c9b4 100%)",
      }}
    >
      {/* Smooth wave transition from previous cream section */}
      <div aria-hidden className="absolute top-0 left-0 right-0 leading-[0] rotate-180">
        <svg
          viewBox="0 0 1440 180"
          className="block w-full h-[80px] sm:h-[120px] lg:h-[160px]"
          preserveAspectRatio="none"
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

      <div
        aria-hidden
        className="pointer-events-none absolute top-32 left-[10%] h-3 w-3 rounded-full bg-hero-ink/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-[14%] h-6 w-6 rounded-full bg-hero-ink/20 blur-[2px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-[40%] h-2 w-2 rounded-full bg-hero-ink/30"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/50 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-widest text-hero-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-hero-coral" />
          контакты
        </span>

        <h2
          className="mt-5 font-display text-hero-ink"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Готовы начать проект?
        </h2>

        <p className="mt-5 mx-auto max-w-md text-base sm:text-lg leading-relaxed text-hero-ink-soft">
          Напишите мне, и мы обсудим вашу задачу
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-hero-green px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(45,90,74,0.6)] hover:bg-hero-green-hover hover:-translate-y-0.5 transition-all"
          >
            <Send className="h-4 w-4" />
            Написать в Telegram
          </a>
          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-hero-coral px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(232,146,124,0.7)] hover:bg-hero-coral-hover hover:-translate-y-0.5 transition-all"
          >
            <Mail className="h-4 w-4" />
            Написать на Email
          </a>
        </div>
      </div>
    </section>
  );
}