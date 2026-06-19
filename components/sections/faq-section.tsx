"use client";

import { getFaqs, useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQSection() {
  const { language, t } = useI18n();
  const faqs = getFaqs(language);

  return (
    <section className="section-pad relative overflow-hidden bg-background">
      <div className="coastal-wave absolute inset-x-0 bottom-0 h-20 opacity-50" aria-hidden="true" />
      <div className="confetti-field absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          description={t("faq.description")}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group relative overflow-hidden rounded-lg border bg-card p-5 shadow-sm">
              <span
                className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
                aria-hidden="true"
              />
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
