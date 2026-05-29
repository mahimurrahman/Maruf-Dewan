import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { BottomCta } from "@/components/sections/BottomCta";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { contact } from "@/config/contact";

type Plan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  subLabel?: string;
  idealFor?: string;
};

const trackingPlans: Plan[] = [
  {
    title: "🛠️ For Service Based Website",
    price: "Starting at €300",
    description: "Perfect for B2B, SaaS, and agencies to accurately measure pipeline value and lead quality.",
    features: [
      "Core Setup: Full GA4 & Google Ads workspace configuration optimized for high-intent actions.",
      "Conversion Mapping: Flawless tracking for contact forms, phone clicks, and calendar bookings (Calendly, HubSpot, etc.).",
      "Advanced Forms: Custom-coded solution to track complex multi-step or iframe lead forms.",
      "Add-ons: Meta CAPI (+€300) | Cookie Consent Mode v2 (+€300) | Extra Ad Platform (+€300).",
    ],
    cta: "Go With This Plan",
    href: contact.tallyUrl,
  },
  {
    title: "🛒 For E-commerce Website",
    price: "Starting at €500",
    description: "Complete server-to-browser data layer tracking from first click to checkout.",
    features: [
      "Full-Funnel Tracking: Complete end-to-end data layer setups in GA4 & Google Ads (View to Purchase).",
      "Enhanced Conversions: Securely passes hashed first-party data to recover 'lost' attribution.",
      "ROAS Accuracy: Precise data layer transmission for raw revenue, local currency, and item-level parameters.",
      "Add-ons: Meta Pixel & CAPI (+€400) | Custom Events (+€400) | Consent Mode v2 (+€300) | Extra Ad Platform (+€300).",
    ],
    cta: "Go With This Plan",
    href: contact.tallyUrl,
  },
  {
    title: "🎯 Automation, OCT & AI Dashboards",
    price: "Contact for Custom Quote",
    description: "Scale backend data flows, safeguard automations, and launch AI reporting.",
    features: [
      "OCT with Premium CRMs: Syncs hidden click IDs through HubSpot or Zoho to feed closed-won revenue to Google and Meta ads.",
      "OCT without Paid CRMs: Build the same loop with webhooks, automation tools, or Google Sheets.",
      "Workflow Automation & Monitoring: Connect your stack using Zapier, Make, or n8n with live error tracking.",
      "AI Reporting Dashboards: Stream pipeline data into AI-powered sheets for instant ad ROI summaries.",
    ],
    cta: "Book a Strategy Call",
    href: contact.calendarUrl,
  },
];

const monthlyPlans: Plan[] = [
  {
    title: "📊 Growth Protection",
    price: "€150 / month, per website",
    subLabel: "Essential data protection and tracking maintenance for steady brands.",
    idealFor: "Ideal For: Brands spending €5k–€10k/mo on ads.",
    description: "",
    features: [
      "Updates: Up to 2 custom adjustments or new landing page tag setups per month.",
      "Monitoring: 24/7 tracking-loss alert triggers to catch broken pixels before ad budget is wasted.",
      "Turnaround: Guaranteed 48-hour response and resolution queue.",
    ],
    cta: "Go With This Plan",
    href: contact.tallyUrl,
  },
  {
    title: "🚀 Scale Protection",
    price: "€300 / month, per website",
    subLabel: "Priority data management and server-side optimization for scaling funnels.",
    idealFor: "Ideal For: Brands spending €10k–€25k/mo on ads.",
    description: "",
    features: [
      "Updates: Up to 5 custom updates or tracking fixes per month to support active ad testing.",
      "Maintenance: Ongoing optimization for server-side APIs (Meta CAPI, TikTok) and Consent Mode v2.",
      "Turnaround: Priority client queue with a 24–48 hour turnaround guarantee.",
    ],
    cta: "Go With This Plan",
    href: contact.tallyUrl,
  },
  {
    title: "⚡ Enterprise Protection",
    price: "€450 / month, per website",
    subLabel: "Elite data governance and dedicated attribution protection for high spenders.",
    idealFor: "Ideal For: Brands spending €25k+/mo on ads.",
    description: "",
    features: [
      "Updates: Unlimited custom tracking requests, immediate technical bug fixes, and event deployments.",
      "Optimization: Bi-weekly programmatic deep dives engineered to maximize ad platform data match quality scores.",
      "Turnaround: VIP priority support with a guaranteed sub-24 hour execution window.",
    ],
    cta: "Go With This Plan",
    href: contact.tallyUrl,
  },
];

const pricingFaqs = [
  {
    question: "One-time setup or monthly plan — which do I need?",
    answer:
      "Need tracking built from scratch? Choose a Foundational Deployment (one-time). Want ongoing fixes, new tags, and 24/7 pixel monitoring? Choose Attribution Protection (monthly).",
  },
  {
    question: "How do the AI Reporting Dashboards actually work?",
    answer:
      "We stream your automated pipeline and ad spend data directly into a clean dashboard. You can ask the built-in AI for instant, natural-language summaries of your actual ad ROI.",
  },
  {
    question: "Do I really need a paid CRM for Offline Conversion Tracking (OCT)?",
    answer:
      "No. If you don't use HubSpot or Zoho, we build a custom automation loop using webhooks and Google Sheets to feed your offline sales revenue back to your ads without the software cost.",
  },
  {
    question: "Can I add Meta CAPI or Consent Mode v2 later?",
    answer:
      "Yes. You can start with the baseline setup package today and add server-side CAPI or Consent Mode tracking whenever your ad budget expands.",
  },
  {
    question: "What happens if my tracking breaks on a monthly plan?",
    answer:
      "Our 24/7 monitoring flags the error instantly. We step in and resolve the bug within 24 to 48 hours (or sub-24 hours for Enterprise) before it skews your ad data.",
  },
];

const PriceCard = ({ plan }: { plan: Plan }) => (
  <article className="bg-card ring-1 ring-border rounded-3xl p-7 flex flex-col">
    <h3 className="font-display font-bold text-2xl">{plan.title}</h3>
    <p className="text-primary text-2xl font-semibold mt-4">{plan.price}</p>
    {plan.subLabel && <p className="text-muted-foreground mt-2">{plan.subLabel}</p>}
    {plan.idealFor && <p className="text-sm mt-2">{plan.idealFor}</p>}
    {plan.description && <p className="text-muted-foreground mt-3">{plan.description}</p>}
    <ul className="mt-5 space-y-3 text-sm text-foreground/90">
      {plan.features.map((feature) => (
        <li key={feature}>• {feature}</li>
      ))}
    </ul>
    <a href={plan.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-foreground font-semibold w-fit">
      {plan.cta} <ArrowUpRight className="h-4 w-4" />
    </a>
  </article>
);

const Price = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Nav isPricing />

    <section className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">pricing</p>
        <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-[-0.03em] mt-3">our services</h1>
      </div>
    </section>

    <section id="services" className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Tabs defaultValue="tracking" className="w-full">
          <TabsList className="bg-card ring-1 ring-border rounded-full p-1">
            <TabsTrigger value="tracking">Tracking Setup</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Management</TabsTrigger>
          </TabsList>
          <TabsContent value="tracking" className="mt-8 grid lg:grid-cols-3 gap-5">
            {trackingPlans.map((plan) => (
              <PriceCard key={plan.title} plan={plan} />
            ))}
          </TabsContent>
          <TabsContent value="monthly" className="mt-8 grid lg:grid-cols-3 gap-5">
            {monthlyPlans.map((plan) => (
              <PriceCard key={plan.title} plan={plan} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>

    <Testimonials />
    <FaqSection heading="Frequently Asked Questions" items={pricingFaqs} />
    <BottomCta />
    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Price;
