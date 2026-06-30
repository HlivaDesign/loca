"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export function HeroVisual({ mobile = false }: { mobile?: boolean }) {
  const [started, setStarted] = useState(false);
  const iframeSrc = `https://streamable.com/e/17ucop?nocontrols=1${started ? "&autoplay=1&loop=1" : ""}`;

  const playBtn = (small = false) => (
    <button
      onClick={() => setStarted(true)}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/10 backdrop-blur-[2px] hover:bg-black/15 transition-colors"
      aria-label="Play product video"
    >
      <div className={`rounded-full bg-white/90 shadow-xl flex items-center justify-center hover:scale-105 transition-transform ${small ? "w-11 h-11" : "w-16 h-16"}`}>
        <Play className={`text-[#c45c7a] fill-[#c45c7a] ml-0.5 ${small ? "w-5 h-5" : "w-7 h-7"}`} />
      </div>
      <span className={`font-semibold text-white drop-shadow bg-black/30 rounded-full tracking-wide ${small ? "text-[10px] px-2 py-0.5" : "text-xs px-3 py-1"}`}>
        {small ? "Watch" : "Watch Video"}
      </span>
    </button>
  );

  if (mobile) {
    return (
      <div className="relative flex items-end justify-center w-full">
        {/* Video — main visual, ~62% width */}
        <div className="relative shrink-0 w-[62%] z-10">
          <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-pink-200/60 bg-[#fdf4f7]">
            <iframe
              allow="autoplay; fullscreen"
              allowFullScreen
              src={iframeSrc}
              title="PDRN Pink Collagen Volume Multi Balm product video"
              style={{ border: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, overflow: "hidden" }}
            />
            {!started && playBtn(true)}
          </div>
        </div>

        {/* Product image — supporting float, ~26% width, overlaps video edge */}
        <div className="relative shrink-0 w-[26%] z-20 mb-6 -ml-3">
          {/* Glow blob */}
          <div
            className="absolute rounded-full bg-pink-200/80 blur-2xl pointer-events-none"
            style={{ inset: "-30%", transform: "scale(1.4)" }}
          />
          <Image
            src="/images/balm-hero.png"
            alt="Medicube PDRN Pink Collagen Volume Multi Balm"
            width={200}
            height={400}
            className="relative w-full h-auto object-contain"
            style={{
              filter: "drop-shadow(0 10px 24px rgba(196,92,122,0.45))",
              transform: "rotate(-6deg) translateY(-10px)",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative self-center" style={{ paddingRight: 64, paddingBottom: 32 }}>
      {/* Video */}
      <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-pink-200/50 bg-[#fdf4f7]">
        <iframe
          allow="autoplay; fullscreen"
          allowFullScreen
          src={iframeSrc}
          title="PDRN Pink Collagen Volume Multi Balm product video"
          style={{ border: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, overflow: "hidden" }}
        />
        {!started && playBtn()}

        {/* In-stock badge */}
        <div className="absolute top-4 left-4 z-20 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold text-foreground">In Stock</span>
        </div>

        {/* Ingredient chip */}
        <div className="absolute bottom-5 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow px-3 py-2 border border-pink-100 pointer-events-none">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Key Ingredient</p>
          <p className="text-sm font-bold text-foreground">5% Volufiline™</p>
        </div>
      </div>

      {/* Product image — floats out beyond video's bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 w-[155px] z-30 pointer-events-none"
        style={{ filter: "drop-shadow(0 24px 48px rgba(196,92,122,0.4))" }}
      >
        {/* Glow blob */}
        <div
          className="absolute rounded-full bg-pink-200/70 blur-3xl pointer-events-none"
          style={{ inset: "-20%", transform: "scale(1.2)" }}
        />
        <Image
          src="/images/balm-hero.png"
          alt="Medicube PDRN Pink Collagen Volume Multi Balm"
          width={300}
          height={600}
          className="relative w-full h-auto object-contain"
          style={{ transform: "rotate(-5deg) translateY(-8px)" }}
        />
      </div>
    </div>
  );
}
