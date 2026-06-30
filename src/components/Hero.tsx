import { Award, ArrowRight, Truck, ShieldCheck, RefreshCw, Star } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="pt-16 bg-white overflow-hidden">
      {/* Subtle pink gradient wash */}
      <div className="absolute top-16 left-0 right-0 h-[600px] bg-gradient-to-b from-[#fdf4f7] to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-20">
        {/* ── Desktop: two-column grid ── */}
        <div className="hidden md:grid grid-cols-[1fr_380px] gap-10 items-center">
          {/* Left: all text */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex self-start items-center gap-2 bg-pink-50 text-[#c45c7a] text-xs font-semibold px-3 py-1.5 rounded-full border border-pink-200">
              <Award className="w-3.5 h-3.5" />
              This Week's Featured Deal
            </div>
            <h1 className="text-5xl lg:text-[3.4rem] font-bold leading-tight text-foreground font-serif">
              Plump, Glow & <span className="text-accent">Restore</span>
              <br />
              In One Balm
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              The Medicube PDRN Pink Collagen Multi Balm with{" "}
              <strong className="text-foreground">5% Volufiline™</strong> —
              clinically proven volumising care for lips, eye area, and skin.
              No needles. Just results.
            </p>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-foreground font-serif">
                6 990 Ft
              </span>
              <span className="text-xl text-muted-foreground line-through mb-1">11 990 Ft</span>
              <span className="mb-1 bg-red-50 text-red-600 text-sm font-bold px-2 py-0.5 rounded-md border border-red-100">−42%</span>
            </div>
            <div className="flex flex-row gap-3">
              <a href="#product" className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-full hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-pink-200">
                Order Now <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#showcase" className="flex items-center justify-center gap-2 border border-border text-foreground font-semibold text-base px-6 py-4 rounded-full hover:bg-muted transition-colors">
                See Details
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
              {[
                { icon: <Truck className="w-4 h-4" />, label: "Free Shipping" },
                { icon: <ShieldCheck className="w-4 h-4" />, label: "Secure Checkout" },
                { icon: <RefreshCw className="w-4 h-4" />, label: "30-Day Returns" },
              ].map(({ icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <span className="text-accent">{icon}</span>{label}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-1">
              <div className="flex -space-x-2">
                {[{ bg: "bg-pink-200", i: "Z" }, { bg: "bg-rose-200", i: "A" }, { bg: "bg-fuchsia-200", i: "R" }, { bg: "bg-purple-200", i: "K" }].map(({ bg, i }, idx) => (
                  <div key={idx} className={`w-7 h-7 rounded-full ${bg} border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600`}>{i}</div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">980+</strong> happy customers</span>
              <div className="flex gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
            </div>
          </div>

          {/* Right: video + floating product image */}
          <HeroVisual />
        </div>

        {/* ── Mobile: stacked layout with video between headline and CTA ── */}
        <div className="flex flex-col gap-5 md:hidden">
          {/* Badge + headline + subtitle */}
          <div className="inline-flex self-start items-center gap-2 bg-pink-50 text-[#c45c7a] text-xs font-semibold px-3 py-1.5 rounded-full border border-pink-200">
            <Award className="w-3.5 h-3.5" />
            This Week's Featured Deal
          </div>
          <h1 className="text-4xl font-bold leading-tight text-foreground font-serif">
            Plump, Glow & <span className="text-accent">Restore</span>
            <br />
            In One Balm
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            The Medicube PDRN Pink Collagen Multi Balm with{" "}
            <strong className="text-foreground">5% Volufiline™</strong> —
            clinically proven volumising care. No needles. Just results.
          </p>

          {/* Video + product image — side by side */}
          <HeroVisual mobile />

          {/* Price */}
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-foreground font-serif">
              6 990 Ft
            </span>
            <span className="text-lg text-muted-foreground line-through mb-0.5">11 990 Ft</span>
            <span className="mb-0.5 bg-red-50 text-red-600 text-sm font-bold px-2 py-0.5 rounded-md border border-red-100">−42%</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a href="#product" className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-full hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-pink-200">
              Order Now <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#showcase" className="flex items-center justify-center gap-2 border border-border text-foreground font-semibold text-base px-6 py-4 rounded-full hover:bg-muted transition-colors">
              See Details
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              { icon: <Truck className="w-4 h-4" />, label: "Free Shipping" },
              { icon: <ShieldCheck className="w-4 h-4" />, label: "Secure Checkout" },
              { icon: <RefreshCw className="w-4 h-4" />, label: "30-Day Returns" },
            ].map(({ icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <span className="text-accent">{icon}</span>{label}
              </span>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[{ bg: "bg-pink-200", i: "Z" }, { bg: "bg-rose-200", i: "A" }, { bg: "bg-fuchsia-200", i: "R" }, { bg: "bg-purple-200", i: "K" }].map(({ bg, i }, idx) => (
                <div key={idx} className={`w-7 h-7 rounded-full ${bg} border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600`}>{i}</div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground"><strong className="text-foreground">980+</strong> happy customers</span>
            <div className="flex gap-0.5 ml-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
