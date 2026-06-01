import { ArrowUpRight } from "lucide-react";
import { contact } from "@/config/contact";

export const BottomCta = () => (
  <section className="pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="rounded-3xl bg-card ring-1 ring-border p-7 sm:p-10 flex flex-wrap items-center justify-between gap-4">
        <p className="text-foreground/90 max-w-4xl">Book a free 1:1 tracking consultation to audit your tracking setup and get a clear action plan to increase ROAS and improve your data accuracy up to 98%.</p>
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.18em] bg-primary/20 text-primary px-3 h-9 inline-flex items-center rounded-full">It&apos;s Free</span>
          <a href={contact.calendarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-foreground font-semibold">
            Schedule a quick call <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
