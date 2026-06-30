import { ChevronDown } from "lucide-react";

const problems = [
  { icon: "😣", label: "Dry, flaky lips and dull skin" },
  { icon: "📉", label: "Loss of volume and firmness over time" },
  { icon: "💰", label: "Expensive clinic treatments and fillers" },
];

export function ProblemSolution() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
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
          <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">
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
  );
}
