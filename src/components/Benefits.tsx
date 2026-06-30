import { Droplets, Sparkles, Heart, Layers, Clock } from "lucide-react";

const benefits = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Mély Hidratálás",
    desc: "Intenzív hidratálás, ami nem csak a felszínen marad — mélyre hatol a hosszantartó puhaságért.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "5% Volufiline™",
    desc: "Klinikailag bizonyítottan növeli a feszességet és a térfogatot a célzott területeken — tűk nélkül.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "PDRN Regeneráló Komplex",
    desc: "Támogatja a kollagén szintézist és a sejtregenerációt a láthatóan feszesebb, fiatalosabb bőrért.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Többfunkciós Használat",
    desc: "Ajkak, szemkörnyék, orcák, nevetőráncok, nyak — egyetlen balzsam a teljes arcápolási rutinhoz.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Eredmények 1 Hét Alatt",
    desc: "Látható dúsító és hidratáló hatás már az első használattól. Folyamatos javulás napi használat mellett.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Mire jó
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">
            Tudomány és Bőrápolás
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
