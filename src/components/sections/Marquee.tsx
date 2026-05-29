const TOOLS = [
  "Google Ads Conversion Tracking Setup",
  "Meta Pixel & Conversion API (CAPI) Integration",
  "First-Party Server-Side Tracking Implementation",
  "Google Analytics 4 Event & Funnel Tracking",
  "All Types of Form Tracking (Lead, Contact etc.)",
  "Offline Conversion Tracking for Ad Platforms",
  "Custom Event Tracking via Google Tag Manager",
  "GDPR-Compliant Cookie Consent Integration",
];

const MARQUEE_ITEMS = [...TOOLS, ...TOOLS];

export const Marquee = () => {
  return (
    <section aria-label="Scrolling services bar" className="py-10 border-y border-border">
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker w-max">
          {MARQUEE_ITEMS.map((tool, i) => (
            <div key={`${tool}-${i}`} className="flex items-center gap-3 px-7 shrink-0">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-display font-semibold text-xl md:text-2xl text-foreground/75 whitespace-nowrap">
                {tool}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};
