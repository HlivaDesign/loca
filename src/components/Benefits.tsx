import { Droplets, Sparkles, Heart, Layers, Clock } from "lucide-react";

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

export function Benefits() {
  return (
    <section id="benefits" className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            What it does
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
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
              <h3 className={`font-bold text-lg mb-2 font-serif ${i === 0 ? "text-white" : "text-foreground"}`}>
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
  );
}
