"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export function ProductShowcase() {
  const [activeImage, setActiveImage] = useState(0);
  const galleryImages = ["/images/balm-solo.png", "/images/balm-combo.png"];

  return (
    <section id="showcase" className="bg-secondary py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden bg-[#fdf4f7] aspect-square shadow-xl flex items-center justify-center">
              <Image
                src={galleryImages[activeImage]}
                alt="PDRN Pink Collagen Volume Multi Balm — product photo"
                width={500}
                height={500}
                className="w-full h-full object-contain p-8 transition-opacity duration-300"
              />
            </div>
            <div className="flex gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all bg-[#fdf4f7] ${
                    activeImage === i
                      ? "border-accent shadow-md"
                      : "border-border opacity-60 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Product view ${i + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                Featured Product
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight font-serif">
                PDRN Pink Collagen<br />Volume Multi Balm
              </h2>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                by Medicube · All In One Volufiline
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A dermatologist-developed multi-use balm stick enriched with
                PDRN and 5% Volufiline™. Clinically shown to increase skin
                volume and improve plumpness — apply to lips, eye area,
                cheeks, or anywhere that needs care.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {[
                "PDRN complex for skin regeneration and repair",
                "5% Volufiline™ — clinically proven to plump and volumise",
                "Pink Collagen for elasticity and firmness support",
                "Multi-zone use: lips, eyes, cheeks, neck, nasolabial folds",
                "Lightweight stick format — melts on contact with skin",
                "Dermatologist tested · Paraben-free · 10g / 0.35 oz",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  <span className="text-sm text-foreground">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-end gap-3 pt-1">
              <span className="text-3xl font-bold text-foreground font-serif">
                6 990 Ft
              </span>
              <span className="text-lg text-muted-foreground line-through mb-0.5">
                11 990 Ft
              </span>
              <span className="mb-0.5 bg-red-50 text-red-600 text-xs font-bold px-2 py-0.5 rounded border border-red-100">
                −42%
              </span>
            </div>

            <a
              id="product"
              href="#product"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-full hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-pink-200"
            >
              Add to Cart — 6 990 Ft
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-xs text-center text-muted-foreground">
              Free shipping · 30-day returns · Secure payment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
