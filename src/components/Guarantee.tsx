import { Truck, RefreshCw, CreditCard, Headphones } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif">
            Vásárolj Bizalommal
          </h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Minden rendelésre teljes körű garanciát vállalunk — nincs kockázat, nincs aggodalom.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Truck className="w-6 h-6" />,
              title: "Ingyenes Szállítás",
              desc: "Minden rendelést ingyenesen szállítunk, 1-2 munkanapon belül Magyarország területén.",
            },
            {
              icon: <RefreshCw className="w-6 h-6" />,
              title: "30 Napos Visszatérítés",
              desc: "Nem vagy elégedett? Küldd vissza 30 napon belül a teljes vételárért — kérdések nélkül.",
            },
            {
              icon: <CreditCard className="w-6 h-6" />,
              title: "Biztonságos Fizetés",
              desc: "SSL-titkosított pénztár. Fizess kártyával, PayPal-lal vagy Apple Pay-jel — teljes biztonságban.",
            },
            {
              icon: <Headphones className="w-6 h-6" />,
              title: "Ügyfélszolgálat",
              desc: "Csapatunk 24 órán belül válaszol. Keress minket a support@loca.hu címen bármikor.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-400/20 flex items-center justify-center text-pink-300">
                {icon}
              </div>
              <h3 className="font-bold text-white font-serif">
                {title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
