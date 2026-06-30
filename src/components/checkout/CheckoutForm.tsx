"use client";

import { useState } from "react";
import { CreditCard, Truck } from "lucide-react";

export function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("cod");
  const [sameAsShipping, setSameAsShipping] = useState(true);

  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      {/* Kapcsolattartó */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Kapcsolattartási adatok</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-sm font-medium text-foreground">Vezetéknév <span className="text-accent">*</span></label>
            <input type="text" id="lastName" required className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Kovács" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-sm font-medium text-foreground">Keresztnév <span className="text-accent">*</span></label>
            <input type="text" id="firstName" required className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Anna" />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">E-mail cím <span className="text-accent">*</span></label>
            <input type="email" id="email" required className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="anna.kovacs@email.com" />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">Telefonszám <span className="text-accent">*</span></label>
            <input type="tel" id="phone" required className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="+36 30 123 4567" />
          </div>
        </div>
      </section>

      {/* Szállítási cím */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Szállítási cím</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="zip" className="text-sm font-medium text-foreground">Irányítószám <span className="text-accent">*</span></label>
            <input type="text" id="zip" required className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="1051" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="city" className="text-sm font-medium text-foreground">Város <span className="text-accent">*</span></label>
            <input type="text" id="city" required className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Budapest" />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="address" className="text-sm font-medium text-foreground">Utca, házszám, emelet/ajtó <span className="text-accent">*</span></label>
            <input type="text" id="address" required className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Példa utca 12. 3. em. 4." />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="note" className="text-sm font-medium text-foreground">Megjegyzés a futárnak <span className="text-muted-foreground font-normal">(opcionális)</span></label>
            <textarea id="note" rows={2} className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" placeholder="Pl. Kapucsengő: 12, a piros kapunál..." />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input 
            type="checkbox" 
            id="sameAsShipping" 
            checked={sameAsShipping} 
            onChange={(e) => setSameAsShipping(e.target.checked)}
            className="w-4 h-4 text-accent bg-input-background border-border rounded focus:ring-accent/50"
          />
          <label htmlFor="sameAsShipping" className="text-sm text-foreground font-medium cursor-pointer">
            A számlázási cím megegyezik a szállítási címmel
          </label>
        </div>
      </section>

      {/* Fizetési mód */}
      <section>
        <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Fizetési mód</h3>
        <div className="grid gap-3">
          
          {/* Utánvét */}
          <label className={`cursor-pointer rounded-xl border-2 p-4 flex items-start gap-4 transition-all ${paymentMethod === 'cod' ? 'border-accent bg-pink-50/30' : 'border-border bg-white hover:border-pink-200'}`}>
            <div className="flex h-5 items-center">
              <input 
                type="radio" 
                name="payment" 
                value="cod" 
                checked={paymentMethod === 'cod'} 
                onChange={() => setPaymentMethod('cod')}
                className="w-4 h-4 text-accent border-border focus:ring-accent" 
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Truck className="w-5 h-5 text-accent" />
                <span className="font-bold text-foreground">Fizetés a futárnál (Utánvét)</span>
              </div>
              <p className="text-sm text-muted-foreground">Fizess készpénzzel vagy bankkártyával a csomag átvételekor.</p>
            </div>
          </label>

          {/* Bankkártya */}
          <label className={`cursor-pointer rounded-xl border-2 p-4 flex items-start gap-4 transition-all ${paymentMethod === 'card' ? 'border-accent bg-pink-50/30' : 'border-border bg-white hover:border-pink-200'}`}>
            <div className="flex h-5 items-center">
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                checked={paymentMethod === 'card'} 
                onChange={() => setPaymentMethod('card')}
                className="w-4 h-4 text-accent border-border focus:ring-accent" 
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-accent" />
                  <span className="font-bold text-foreground">Bankkártya</span>
                </div>
                {/* Icons placeholder for cards */}
                <div className="flex gap-1">
                  <div className="w-8 h-5 bg-muted rounded"></div>
                  <div className="w-8 h-5 bg-muted rounded"></div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Biztonságos fizetés bankkártyával (Stripe / Barion).</p>
            </div>
          </label>

        </div>
      </section>

      {/* CTA */}
      <button 
        type="submit" 
        className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-8 py-5 rounded-full hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-pink-200"
      >
        Megrendelés Véglegesítése (6 990 Ft)
      </button>

      <p className="text-center text-xs text-muted-foreground pt-2">
        A megrendelés véglegesítésével elfogadod az Általános Szerződési Feltételeket és az Adatvédelmi Tájékoztatót.
      </p>

    </form>
  );
}
