import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar: string;
  fallbackInitials: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Adelaide De Vos",
    role: "3,922 followers",
    quote:
      "I had the pleasure of working with Maruf and he exceeded my expectations. Professional, patient, clear in his explanations, and committed to client satisfaction.",
    rating: 5,
    avatar: "/avatars/adelaide-de-vos.svg",
    fallbackInitials: "AD",
  },
  {
    name: "Dean Watson",
    role: "1,030 followers",
    quote:
      "Maruf set up our tracking for Google Ads and Meta Ads, which helped us get 20%+ more conversions on the same ad spend. He explained why it works and how it improves results.",
    rating: 5,
    avatar: "/avatars/dean-watson.svg",
    fallbackInitials: "DW",
  },
  {
    name: "David Friend",
    role: "CEO, Profitable Sites",
    quote:
      "Maruf set up accurate tracking that helped us scale ads fast and boost conversions by over 25%. He gave us clear insight into which ads drive real revenue.",
    rating: 5,
    avatar: "/avatars/david-friend.svg",
    fallbackInitials: "DF",
  },
  {
    name: "Lalita Sundari",
    role: "7,924 followers",
    quote:
      "Maruf's strategic mindset and expertise in GTM, GA4, Pixel & Server Side Tracking are invaluable. I highly recommend him!",
    rating: 5,
    avatar: "/avatars/lalita-sundari.svg",
    fallbackInitials: "LS",
  },
];

const featuredTestimonial = testimonials[2];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Trusted by 500+ satisfied clients
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
            Growth, in their words.
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            Discover how we've driven growth and innovation.
          </p>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-6 sm:p-8 lg:p-14 mb-6 ring-1 ring-border shadow-card relative"
        >
          <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 h-8 w-8 sm:h-10 sm:w-10 text-primary/25" />
          <blockquote className="font-display font-bold text-xl sm:text-2xl md:text-4xl leading-[1.15] tracking-[-0.02em] max-w-4xl">
            "Maruf set up accurate tracking that helped us scale ads fast and
            boost conversions by over <span className="text-primary">25%</span>.
            He gave us clear insight into which ads drive real revenue."
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <Avatar className="h-11 w-11 ring-1 ring-border/80 shadow-sm">
              <AvatarImage src={featuredTestimonial.avatar} alt={`${featuredTestimonial.name} portrait`} />
              <AvatarFallback className="bg-muted text-foreground font-semibold text-xs">
                {featuredTestimonial.fallbackInitials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-sm">{featuredTestimonial.name}</div>
              <div className="font-mono-ui text-[11px] text-muted-foreground uppercase tracking-[0.15em]">
                CEO, Profitable Sites
              </div>
            </div>
          </figcaption>
        </motion.figure>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-card rounded-3xl p-7 ring-1 ring-border shadow-card hover:shadow-pop transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-highlight text-highlight" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                <Avatar className="h-10 w-10 ring-1 ring-border/80 shadow-sm">
                  <AvatarImage src={t.avatar} alt={`${t.name} portrait`} />
                  <AvatarFallback className="bg-muted text-foreground font-semibold text-xs">
                    {t.fallbackInitials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="font-mono-ui text-[11px] text-muted-foreground uppercase tracking-[0.12em]">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
