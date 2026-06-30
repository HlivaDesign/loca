"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Milyen gyors a szállítás?",
    a: "Minden rendelést 1-2 munkanapon belül feldolgozunk és feladunk. A szállítás a futárszolgálattól függően általában 1-2 munkanapot vesz igénybe Magyarországon.",
  },
  {
    q: "Milyen fizetési módokat fogadtok el?",
    a: "Elfogadunk minden nagyobb bankkártyát (Visa, Mastercard, Maestro), Apple Pay-t, Google Pay-t, illetve utánvétes fizetés is lehetséges a futárnál.",
  },
  {
    q: "Van pénzvisszafizetési garancia?",
    a: "Igen! 30 napos 100%-os elégedettségi garanciát vállalunk. Ha nem vagy maradéktalanul elégedett a termékkel, csak vedd fel velünk a kapcsolatot, és visszatérítjük a teljes vételárat, kérdések nélkül.",
  },
  {
    q: "Hogyan használjam a PDRN Pink Collagen Balzsamot?",
    a: "Vidd fel a balzsamot közvetlenül az ajkaidra, orcákra, szemkörnyékre vagy a nyakadra. Finom ütögető mozdulatokkal segítsd a felszívódást. Használhatod reggel és este a rutinod részeként, vagy napközben bárhol, amikor egy kis plusz hidratálásra van szükséged.",
  },
  {
    q: "Érzékeny bőrre is alkalmas?",
    a: "Igen. A formula bőrgyógyászatilag tesztelt, parabén- és irritálóanyag mentes. A PDRN komplex és a Volufiline a legtöbb bőrtípus, így az érzékeny bőr számára is jól tolerálható.",
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
            Kérdésed van?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
            Gyakori Kérdések
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
