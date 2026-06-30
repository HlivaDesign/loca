"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How fast is shipping?",
    a: "All orders are dispatched within 1–2 business days. Standard delivery takes 3–5 business days. Express shipping is available at checkout.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. Every transaction is SSL-secured.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes — we offer a 30-day satisfaction guarantee. If you are not completely happy with your purchase, contact us and we will arrange a full refund, no questions asked.",
  },
  {
    q: "How do I use the PDRN Pink Collagen Balm?",
    a: "Apply the balm stick directly to lips, cheeks, eye area, or neck. Use gentle tapping motions to help absorption. Can be used morning and evening as part of your routine, or as a quick on-the-go treatment throughout the day.",
  },
  {
    q: "Is it suitable for sensitive skin?",
    a: "Yes. The formula is dermatologist-tested and free from parabens and harsh irritants. The PDRN complex and Volufiline are well-tolerated by most skin types, including sensitive skin. If you have specific concerns, a patch test is always recommended.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border border-border rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-shadow hover:shadow-sm"
      aria-expanded={open}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <span className="font-semibold text-foreground leading-snug">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />
        )}
      </div>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border bg-secondary">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </button>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Have questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
            Frequently Asked
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
