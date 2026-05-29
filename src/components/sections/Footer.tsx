import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { contact, whatsappLink } from "@/config/contact";

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h3 className="font-display font-bold text-2xl">Want to get in touch with me? Here are my socials</h3>
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> {contact.email}</a>
          <a href="/price" className="hover:text-primary">Pricing</a>
        </div>
        <p className="font-mono-ui text-[11px] text-muted-foreground uppercase tracking-[0.18em] mt-10">© 2025 Maruf Ahmed Dewan</p>
      </div>
    </footer>
  );
};
