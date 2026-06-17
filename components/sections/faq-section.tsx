import { faqs } from "@/lib/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQSection() {
  return (
    <section className="section-pad bg-muted/55">
      <div className="container-page">
        <SectionHeading
          eyebrow="Questions"
          title="Carryout, catering, hours and location."
          description="The fastest way to confirm an order or party package is to call the restaurant directly."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border bg-card p-5">
              <summary className="cursor-pointer list-none text-lg font-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm font-bold leading-6 text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
