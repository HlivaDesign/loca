import { Star } from "lucide-react";

const reviews = [
  {
    name: "Zsófi B.",
    rating: 5,
    date: "3 hete",
    text: "Szkeptikus voltam, hogy egy balzsam mire lehet képes, de az ajkaim és az orcám is láthatóan teltebbek lettek két hét után. A textúrája isteni — azonnal beszívódik. Minden pénzt megér.",
  },
  {
    name: "Anna K.",
    rating: 5,
    date: "1 hónapja",
    text: "Minden este használom ajakápolóként, az eredmény hihetetlen. Nincs többé száraz, hámló száj. A szemem köré is kenem, mára a rutinomba bebetonozott darab lett.",
  },
  {
    name: "Réka M.",
    rating: 4,
    date: "2 hete",
    text: "Imádom, hogy ennyire praktikus — mindig a táskámban van és napközben is használom. A bőröm érezhetően puhább és hidratáltabb. A szállítás is szuper gyors volt.",
  },
];

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

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Vásárlói vélemények
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 font-serif">
            Valós Eredmények, Valós Emberek
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-foreground text-lg">4.9</span>
            <span className="text-muted-foreground text-sm">147 vélemény alapján</span>
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
  );
}
