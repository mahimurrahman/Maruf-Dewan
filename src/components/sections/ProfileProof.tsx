import { BadgeCheck, Linkedin } from "lucide-react";
import { contact } from "@/config/contact";

export const ProfileProof = () => (
  <section className="py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="bg-card ring-1 ring-border rounded-3xl p-7 sm:p-10 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <p className="font-display text-2xl font-bold">Maruf Ahmed Dewan</p>
          <p className="text-muted-foreground text-sm mt-1">Conversion Tracking & Analytics Expert</p>
          <p className="text-sm mt-2">Followers: LinkedIn audience</p>
        </div>
        <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-secondary ring-1 ring-border">
          <Linkedin className="h-4 w-4" />
          LinkedIn Verified
          <BadgeCheck className="h-4 w-4 text-primary" />
        </a>
      </div>
    </div>
  </section>
);
