import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Results } from "@/components/sections/Results";
import { Partners } from "@/components/sections/Partners";
import { ProfileProof } from "@/components/sections/ProfileProof";
import { Testimonials } from "@/components/sections/Testimonials";
import { Services } from "@/components/sections/Services";
import { Implementation } from "@/components/sections/Implementation";
import { Booking } from "@/components/sections/Booking";
import { Process } from "@/components/sections/Process";
import { FaqSection } from "@/components/sections/FaqSection";
import { BottomCta } from "@/components/sections/BottomCta";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const homeFaqs = [
  {
    question: "Why is tracking important for me?",
    answer:
      "Without proper tracking, you may waste money on ads that don't convert. With accurate tracking, you get clear data, lower acquisition costs, and better marketing decisions.",
  },
  {
    question: "Tell me about your service?",
    answer:
      "I set up and fix tracking for GA4, Google Ads, Meta Pixel, Conversion API, custom event tracking, and server-side tracking so your data is accurate, reliable, and actionable.",
  },
  {
    question: "Tell me about your workflow?",
    answer:
      "I audit your entire website funnel and current tracking setup to identify gaps, errors, and opportunities for improvement. You simply provide access, I handle the rest.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most setups are completed within 3–6 hours depending on your website and requirements. More complex server-side tracking setups may take up to 2 working days.",
  },
  {
    question: "What do you need from me?",
    answer:
      "I just need access to your website, Google Tag Manager, GA4, and ad accounts. After that, I handle everything else.",
  },
  {
    question: "How do I know the tracking is working correctly?",
    answer:
      "After setup, I test all events using tools like GA4 DebugView, Tag Assistant, and browser tracking tools to ensure every conversion and event is firing correctly.",
  },
];

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Results />
      <Partners />
      <ProfileProof />
      <Testimonials />
      <Services />
      <Implementation />
      <Booking />
      <Process />
      <FaqSection heading="Questions you may Ask" subheading="Any questions you have" items={homeFaqs} />
      <BottomCta />
      <Footer />
      <FloatingWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Maruf Ahmed Dewan",
            jobTitle: "Conversion Tracking & Analytics Expert",
            url: "/",
            sameAs: ["https://www.linkedin.com/in/marufahmeddewan/"],
            knowsAbout: [
              "Google Analytics 4",
              "Google Tag Manager",
              "Meta Pixel",
              "Google Ads Conversion Tracking",
              "Server-Side Tracking",
              "GDPR Cookie Consent",
            ],
          }),
        }}
      />
    </main>
  );
};

export default Index;
