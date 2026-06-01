import { MessageCircle } from "lucide-react";
import { whatsappMessageLink } from "@/config/contact";

export const FloatingWhatsApp = () => (
  <a
    href={whatsappMessageLink("Hi Maruf, can you help me with the tracking?")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Maruf on WhatsApp"
    className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 h-14 px-5 rounded-full bg-[#25D366] text-white shadow-pop hover:scale-[1.04] transition-transform"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline font-medium text-sm">WhatsApp</span>
  </a>
);
