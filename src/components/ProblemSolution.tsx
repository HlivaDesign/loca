import { ChevronDown } from "lucide-react";

const problems = [
  { icon: "😣", label: "Száraz, hámló ajkak és fakó bőr" },
  { icon: "📉", label: "Feszesség és térfogatvesztés" },
  { icon: "💰", label: "Drága klinikai kezelések" },
];

export function ProblemSolution() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Ismerősen hangzik?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
            A Bőröd Többet Érdemel
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Ahogy a bőr érik, veszít feszességéből és hidratáltságából. A legtöbb 
            termék egyszerre csak egy problémát kezel — és egyik sem megfizethető vagy kényelmes.
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
            Egyetlen Balzsam. Teljes Ápolás.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            A PDRN Pink Collagen Multi Balm egyesíti a bőrjavító PDRN-t, 
            a kollagén-fokozó hatóanyagokat és a klinikailag bizonyított Volufiline™ 
            komplexet egyetlen kompakt stiftben. Egy termék, teljes arcra kiterjedő 
            eredmények — a klinikai árak töredékéért.
          </p>
        </div>
      </div>
    </section>
  );
}
