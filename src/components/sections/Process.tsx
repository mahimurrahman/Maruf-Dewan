const steps = [
  {
    title: "Audit Website & Funnel",
    body: "We review your current setup to identify gaps, errors, and opportunities to improve tracking accuracy.",
  },
  {
    title: "Tracking Setup",
    body: "We implement a reliable tracking system using GTM, GA4, Google Ads, Meta Pixel, and server-side tracking where needed.",
  },
  {
    title: "Reporting & TAAS (Tracking as a Service)",
    body: "We validate the data and provide clear reporting so you can measure performance and scale confidently.",
  },
];

export const Process = () => (
  <section id="process" className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Tracking Made Easy</p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">The Simplest Process You'll Ever Experience</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {steps.map((step, i) => (
          <article key={step.title} className="bg-card rounded-3xl p-7 ring-1 ring-border shadow-card">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-primary">Step {i + 1}</p>
            <h3 className="font-display font-bold text-2xl mt-4">{step.title}</h3>
            <p className="text-muted-foreground mt-3">{step.body}</p>
            {i === 1 && (
              <pre className="mt-6 text-xs bg-background p-4 rounded-xl ring-1 ring-border text-muted-foreground">status: tracking synced\nGTM: active\nGA4: validated\nAds: conversions firing</pre>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);
