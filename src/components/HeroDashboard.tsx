import { TrendingUp, Sparkles, Zap } from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      {/* Organic blur blobs */}
      <div
        aria-hidden
        className="absolute -top-10 -right-8 h-40 w-40 rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, #2d5a4a55, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-10 -left-8 h-48 w-48 rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, #e8927c66, transparent 70%)" }}
      />

      {/* Dashboard card */}
      <div
        className="relative rounded-3xl border border-white/40 bg-white/50 backdrop-blur-xl p-5 sm:p-6 shadow-[0_30px_80px_-30px_rgba(26,36,32,0.4)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-hero-coral" />
            <span className="h-2.5 w-2.5 rounded-full bg-hero-bg-deep" />
            <span className="h-2.5 w-2.5 rounded-full bg-hero-green" />
          </div>
          <span className="text-[11px] font-medium tracking-widest uppercase text-hero-ink-soft">
            vibe.studio
          </span>
        </div>

        {/* Project block */}
        <div className="mt-5 rounded-2xl bg-hero-cream p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-widest text-hero-ink-soft">
                Активный проект
              </p>
              <p className="mt-1 font-display text-2xl leading-tight text-hero-ink truncate">
                MVP · Fintech
              </p>
            </div>
            <div className="shrink-0 grid h-10 w-10 place-items-center rounded-full bg-hero-green text-white">
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          {/* Mini chart */}
          <div className="mt-4 h-16 w-full">
            <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2d5a4a" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2d5a4a" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,45 C20,40 35,20 55,25 C75,30 90,10 115,15 C140,20 160,5 200,8 L200,60 L0,60 Z"
                fill="url(#chartFill)"
              />
              <path
                d="M0,45 C20,40 35,20 55,25 C75,30 90,10 115,15 C140,20 160,5 200,8"
                fill="none"
                stroke="#2d5a4a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: "AI", icon: Sparkles },
            { label: "MVP", icon: Zap },
            { label: "Landing", icon: TrendingUp },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-2 text-xs font-medium text-hero-ink"
            >
              <Icon className="h-3.5 w-3.5 text-hero-green" />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>

        {/* Footer stat */}
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-hero-green px-4 py-3 text-white">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-widest opacity-70">Скорость</p>
            <p className="font-display text-lg leading-none">7 дней до релиза</p>
          </div>
          <div className="shrink-0 rounded-full bg-hero-coral px-3 py-1 text-xs font-semibold">
            +42%
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <div
        className="absolute -right-3 top-16 hidden sm:flex items-center gap-2 rounded-full bg-hero-ink px-4 py-2 text-xs font-medium text-white shadow-xl"
      >
        <span className="h-2 w-2 rounded-full bg-hero-coral animate-pulse" />
        live coding
      </div>
    </div>
  );
}