import { Clock, ArrowRight } from "lucide-react";

const LIFESTYLE_IMG =
  "https://images.unsplash.com/photo-1728727267814-792db55ce678?w=800&h=900&fit=crop&auto=format";

export function FinalCta() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Lifestyle image */}
            <div className="aspect-square md:aspect-auto md:h-full min-h-[16rem] overflow-hidden bg-[#fdf4f7]">
              <img
                src={LIFESTYLE_IMG}
                alt="Woman with glowing, healthy skin"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-8 sm:p-10 flex flex-col gap-5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-pink-50 text-[#c45c7a] text-xs font-semibold px-3 py-1.5 rounded-full border border-pink-200 self-center md:self-start">
                <Clock className="w-3.5 h-3.5" />
                Today's featured deal
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight font-serif">
                This Week's Beauty Pick
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The PDRN Pink Collagen Multi Balm is our most-loved skincare
                product right now. Stock is limited — secure yours at today's
                special price.
              </p>

              <div className="flex items-end gap-2 justify-center md:justify-start">
                <span className="text-3xl font-bold text-foreground font-serif">
                  6 990 Ft
                </span>
                <span className="text-lg text-muted-foreground line-through mb-0.5">
                  11 990 Ft
                </span>
              </div>

              <a
                href="#product"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-full hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-pink-200"
              >
                Check Today's Deal
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-muted-foreground">
                Free shipping · 30-day returns · Secure checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
