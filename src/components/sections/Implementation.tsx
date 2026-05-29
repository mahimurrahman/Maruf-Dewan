import { TrendingDown, TrendingUp } from "lucide-react";

const bars = [
  { label: "Facebook Ads", value: 34, dir: "up" as const },
  { label: "Google Ads", value: 67, dir: "up" as const },
  { label: "TikTok Ads", value: 42, dir: "down" as const },
  { label: "Bing Ads", value: 37, dir: "down" as const },
];

export const Implementation = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-6 lg:gap-8">
        <article className="bg-card rounded-3xl p-7 sm:p-9 ring-1 ring-border">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Which ads generate revenue</p>
          <h3 className="font-display font-bold text-2xl mt-3">Setup conversion tracking correctly to identify which campaign generates profit</h3>
          <div className="mt-8 space-y-5">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm inline-flex items-center gap-2">
                    {b.dir === "up" ? <TrendingUp className="h-4 w-4 text-primary" /> : <TrendingDown className="h-4 w-4 text-primary" />}
                    {b.label}
                  </span>
                  <span className="font-semibold text-primary">{b.dir === "up" ? "+" : "-"}{b.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${Math.min(85, b.value)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="bg-card rounded-3xl p-7 sm:p-9 ring-1 ring-border">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Server-side tracking for 100% data accuracy</p>
          <p className="mt-5 text-lg">Server-side tracking bypasses ad blockers, iOS limits, and extends cookie lifetime for maximum data accuracy.</p>
        </article>

        <article className="bg-card rounded-3xl p-7 sm:p-9 ring-1 ring-border">
          <h3 className="font-display font-bold text-2xl">Google Ads Conversion Tracking</h3>
          <p className="mt-3 text-muted-foreground">Set up Google Ads enhanced conversion tracking with dynamic remarketing tags</p>
        </article>

        <article className="bg-card rounded-3xl p-7 sm:p-9 ring-1 ring-border">
          <h3 className="font-display font-bold text-2xl">Facebook Pixel & Conversion API</h3>
          <p className="mt-3 text-muted-foreground">Get 13% lower cost per result with proper Pixel & Conversion API setup</p>
        </article>
      </div>
    </section>
  );
};
