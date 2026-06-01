import { ArrowUpRight } from "lucide-react";
import { contact } from "@/config/contact";

const partners = [
  "Google Analytics",
  "Google Ads",
  "Meta Pixel",
  "Google Tag Manager",
  "TikTok Ads",
  "Bing Ads",
  "Stape",
  "Calendly",
];

export const Partners = () => (
  <section className="py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl ring-1 ring-border bg-card p-6 sm:p-10">
        <div className="flex animate-ticker w-max">
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p}-${i}`} className="px-6 py-2 rounded-full bg-secondary text-foreground/90 mr-3">
              {p}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Trusted partners and tools</p>
        <a href={contact.tallyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary font-semibold">
          $300 audit FREE Today! <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
