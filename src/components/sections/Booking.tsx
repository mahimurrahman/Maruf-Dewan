import { ArrowRight, MessageCircle } from "lucide-react";
import { contact, whatsappLink } from "@/config/contact";

export const Booking = () => {
  return (
    <section id="book" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative rounded-[1.75rem] sm:rounded-[2rem] bg-gradient-to-br from-[#1a1638] via-[#241a52] to-[#3a2780] text-background p-7 sm:p-10 lg:p-20 overflow-hidden ring-1 ring-border shadow-pop">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/40 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -left-16 -bottom-24 h-80 w-80 rounded-full bg-highlight/30 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />

          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-background/60 relative">
            It&apos;s Free
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mt-4 max-w-4xl tracking-[-0.03em] leading-[1.05] relative">
            Book a Free 1:1 Call to See How Broken Tracking Is Wasting Your Ad Spend
          </h2>
          <p className="mt-5 sm:mt-6 max-w-xl text-background/75 text-base sm:text-lg relative">
            We'll review your current setup, identify tracking gaps, &amp; show you what needs to be fixed.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 relative">
            <a
              href={contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-14 pl-7 pr-2 rounded-full bg-background text-foreground font-semibold hover:bg-highlight transition-colors"
            >
              Schedule a Quick Call
              <span className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full ring-1 ring-background/30 text-background font-medium hover:bg-background/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Or message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};