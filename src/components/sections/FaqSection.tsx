import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FaqItem = { question: string; answer: string };

export const FaqSection = ({ heading, subheading, items }: { heading: string; subheading?: string; items: FaqItem[] }) => (
  <section className="py-20 lg:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
      <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.03em]">{heading}</h2>
      {subheading && <p className="text-muted-foreground mt-2">{subheading}</p>}
      <Accordion type="single" collapsible className="mt-8 w-full space-y-3">
        {items.map((item, i) => (
          <AccordionItem key={item.question} value={`faq-${i}`} className="bg-card rounded-2xl px-5 ring-1 ring-border">
            <AccordionTrigger className="text-left hover:no-underline">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
