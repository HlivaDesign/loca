import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Star,
  Truck,
  ShieldCheck,
  RefreshCw,
  Headphones,
  ChevronDown,
  ChevronUp,
  Check,
  Droplets,
  Sparkles,
  Clock,
  Smile,
  Layers,
  Award,
  ArrowRight,
  CreditCard,
  Heart,
  Play,
} from "lucide-react";
import locaLogo from "@/imports/2acf9c4f-8517-470d-9cf0-84e1b43ab70f.png";
import balmSolo from "@/imports/cad4b7c7409f459a87c54baf31ff8a20.png";
import balmCombo from "@/imports/da5d827eb4a24770b550b9dcb7996c6a.png";
import balmHero from "@/imports/ac922b49-759d-4131-bea3-6c14ef7c66c5.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const LIFESTYLE_IMG =
  "https://images.unsplash.com/photo-1728727267814-792db55ce678?w=800&h=900&fit=crop&auto=format";

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

const reviews = [
  {
    name: "Zsófi B.",
    rating: 5,
    date: "3 weeks ago",
    text: "I was skeptical about a balm stick doing this much, but my lips and cheeks genuinely look plumper after two weeks. The texture is so luxurious — melts right in. Worth every penny.",
  },
  {
    name: "Anna K.",
    rating: 5,
    date: "1 month ago",
    text: "Been using it as a lip treatment every night and the difference is unreal. No more dry flaky lips. Also use it around my eyes and it's become a non-negotiable in my routine.",
  },
  {
    name: "Réka M.",
    rating: 4,
    date: "2 weeks ago",
    text: "Love how convenient the stick format is — I keep it in my bag and use it throughout the day. Skin feels noticeably softer and more hydrated. Delivery was super quick too.",
  },
];

const benefits = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Deep Moisture Lock",
    desc: "Intensive hydration that doesn't just sit on the surface — it penetrates for lasting softness.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "5% Volufiline™",
    desc: "Clinically proven to increase volume and fullness in targeted areas — naturally, no needles needed.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "PDRN Repair Complex",
    desc: "Supports collagen synthesis and skin regeneration for visibly firmer, younger-looking skin.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "True Multi-Use",
    desc: "Lips, eye area, cheeks, nasolabial folds, neck — one balm covers your entire glow routine.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Results From Week 1",
    desc: "Visible plumping and hydration from the very first applications. Cumulative results with daily use.",
  },
];

const problems = [
  { icon: "😣", label: "Dry, flaky lips and dull skin" },
  { icon: "📉", label: "Loss of volume and firmness over time" },
  { icon: "💰", label: "Expensive clinic treatments and fillers" },
];

function HeroVisual({ mobile = false }: { mobile?: boolean }) {
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

  /* ── MOBILE: video dominant + small floating product image ── */
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
          <ImageWithFallback
            src={balmHero}
            alt="Medicube PDRN Pink Collagen Volume Multi Balm"
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

  /* ── DESKTOP: tall video with product image floating out bottom-right ── */
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
        <ImageWithFallback
          src={balmHero}
          alt="Medicube PDRN Pink Collagen Volume Multi Balm"
          className="relative w-full h-auto object-contain"
          style={{ transform: "rotate(-5deg) translateY(-8px)" }}
        />
      </div>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${
            s <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border border-border rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-shadow hover:shadow-sm"
      aria-expanded={open}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <span
          className="font-semibold text-foreground leading-snug"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />
        )}
      </div>
      {open && (
        <div
          className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border bg-secondary"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <p className="pt-4">{a}</p>
        </div>
      )}
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const galleryImages = [balmSolo, balmCombo];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-white border-b border-border"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="shrink-0">
            <ImageWithFallback
              src={locaLogo}
              alt="Loca.hu"
              className="h-10 md:h-8 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#product"
              className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
            <a href="#benefits" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-foreground border-b border-border">Benefits</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-foreground border-b border-border">Reviews</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-medium text-foreground">FAQ</a>
            <a
              href="#product"
              onClick={() => setMenuOpen(false)}
              className="mt-1 w-full text-center bg-accent text-accent-foreground font-semibold text-sm px-5 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Shop Now
            </a>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
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
              <h1
                className="text-5xl lg:text-[3.4rem] font-bold leading-tight text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Plump, Glow &{" "}
                <span className="text-accent">Restore</span>
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
                <span className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
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
            <h1
              className="text-4xl font-bold leading-tight text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Plump, Glow &{" "}
              <span className="text-accent">Restore</span>
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
              <span className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
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

      {/* ─── TRUST BAR ─── */}
      <section className="bg-primary py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              { icon: <Truck className="w-4 h-4" />, label: "Free delivery on all orders" },
              { icon: <ShieldCheck className="w-4 h-4" />, label: "SSL secured payment" },
              { icon: <RefreshCw className="w-4 h-4" />, label: "30-day money-back guarantee" },
              { icon: <Smile className="w-4 h-4" />, label: "Dermatologist tested" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="text-pink-300">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ─── */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Sound familiar?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Skin Deserves More
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              As skin matures, it loses volume, hydration, and firmness. Most
              products address one issue at a time — and none of them are
              affordable or convenient.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {problems.map(({ icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 border border-border shadow-sm text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <p className="font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-accent rounded-full p-3 shadow-lg shadow-pink-200">
              <ChevronDown className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-pink-200 shadow-sm p-8 text-center max-w-2xl mx-auto">
            <div className="text-4xl mb-4">✨</div>
            <h3
              className="text-2xl font-bold text-foreground mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              One Balm. Total Care.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The PDRN Pink Collagen Multi Balm combines skin-repairing PDRN,
              collagen-boosting actives, and the clinically proven Volufiline™
              complex in a single travel-ready stick. One product, full-face
              results — at a fraction of clinic prices.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section id="benefits" className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              What it does
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Science Meets Skincare
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`rounded-2xl p-6 border transition-shadow hover:shadow-md ${
                  i === 0
                    ? "bg-accent text-white border-transparent"
                    : "bg-white border-border"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    i === 0 ? "bg-white/20 text-white" : "bg-pink-50 text-accent"
                  }`}
                >
                  {icon}
                </div>
                <h3
                  className={`font-bold text-lg mb-2 ${i === 0 ? "text-white" : "text-foreground"}`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-muted-foreground"}`}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT SHOWCASE ─── */}
      <section id="showcase" className="bg-secondary py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Gallery */}
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden bg-[#fdf4f7] aspect-square shadow-xl flex items-center justify-center">
                <ImageWithFallback
                  src={galleryImages[activeImage]}
                  alt="PDRN Pink Collagen Volume Multi Balm — product photo"
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
                    <ImageWithFallback
                      src={img}
                      alt={`Product view ${i + 1}`}
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
                <h2
                  className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
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
                <span
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
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

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Customer reviews
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Real Results, Real People
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-foreground text-lg">4.9</span>
              <span className="text-muted-foreground text-sm">based on 147 reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map(({ name, rating, date, text }) => (
              <div key={name} className="bg-secondary rounded-2xl p-6 border border-border flex flex-col gap-3">
                <StarRating rating={rating} />
                <p className="text-foreground text-sm leading-relaxed flex-1">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-bold text-[#c45c7a]">
                      {name.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUARANTEE / TRUST ─── */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shop With Confidence
            </h2>
            <p className="mt-3 text-white/60 max-w-lg mx-auto">
              Every order is backed by our full promise — no risk, no worry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Truck className="w-6 h-6" />,
                title: "Free Shipping",
                desc: "All orders ship free. Delivered in 3–5 business days across Hungary.",
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "30-Day Returns",
                desc: "Not satisfied? Return it within 30 days for a full refund — no questions asked.",
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: "Secure Payment",
                desc: "SSL-encrypted checkout. Pay by card, PayPal, or Apple Pay — fully protected.",
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "Customer Support",
                desc: "Our team responds within 24 hours. Reach us at support@loca.hu anytime.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-400/20 flex items-center justify-center text-pink-300">
                  {icon}
                </div>
                <h3
                  className="font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="bg-white py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Have questions?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
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

      {/* ─── FINAL CTA ─── */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* Lifestyle image */}
              <div className="aspect-square md:aspect-auto md:h-full min-h-64 overflow-hidden bg-[#fdf4f7]">
                <ImageWithFallback
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

                <h2
                  className="text-3xl sm:text-4xl font-bold text-foreground leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  This Week's Beauty Pick
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The PDRN Pink Collagen Multi Balm is our most-loved skincare
                  product right now. Stock is limited — secure yours at today's
                  special price.
                </p>

                <div className="flex items-end gap-2 justify-center md:justify-start">
                  <span
                    className="text-3xl font-bold text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
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

      {/* ─── FOOTER ─── */}
      <footer className="bg-primary text-white/80 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            <div className="flex flex-col gap-4">
              <ImageWithFallback
                src={locaLogo}
                alt="Loca.hu"
                className="h-9 w-auto object-contain invert mix-blend-screen self-start"
              />
              <p className="text-sm text-white/50 leading-relaxed">
                Loca.hu — curated, focused, purposeful. One product at a time,
                always the best of its kind.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4
                className="text-white font-semibold text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact
              </h4>
              <p className="text-sm text-white/50">support@loca.hu</p>
              <p className="text-sm text-white/50">Mon–Fri, 9:00–17:00</p>
              <p className="text-sm text-white/50">Budapest, Hungary</p>
            </div>

            <div className="flex flex-col gap-3">
              <h4
                className="text-white font-semibold text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Legal
              </h4>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms &amp; Conditions</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Imprint / Company Info</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>© 2024 Loca.hu — All rights reserved.</p>
            <p>Designed for fast, focused shopping.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
