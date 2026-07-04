import { Send, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="bg-hero-cream py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-hero-ink/10 bg-white/60 backdrop-blur px-6 py-12 sm:px-12 sm:py-16 text-center shadow-[0_20px_60px_-30px_rgba(26,36,32,0.25)]">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-hero-green/15 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-hero-coral/15 blur-3xl"
          />

          <span className="relative inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-widest text-hero-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-hero-coral" />
            контакты
          </span>

          <h2
            className="relative mt-5 font-display text-hero-ink"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Готовы начать проект?
          </h2>

          <p className="relative mt-4 mx-auto max-w-md text-base text-hero-ink-soft">
            Напишите мне, и мы обсудим вашу задачу
          </p>

          <div className="relative mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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
      </div>
    </section>
  );
}