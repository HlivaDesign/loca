import { Lock, Truck } from "lucide-react";

export function OrderSummary() {
  return (
    <div className="bg-white rounded-2xl border border-pink-200 shadow-sm p-6 sticky top-24">
      <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Rendelés Összesítése</h3>
      
      {/* Product */}
      <div className="flex gap-4 items-center pb-4 border-b border-border">
        <div className="w-16 h-16 bg-pink-50 rounded-lg overflow-hidden shrink-0 border border-pink-100 flex items-center justify-center">
          <img 
            src="/images/2acf9c4f-8517-470d-9cf0-84e1b43ab70f.png" 
            alt="PDRN Pink Collagen" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground text-sm">PDRN Pink Collagen Volume Multi Balm</h4>
          <p className="text-muted-foreground text-xs mt-1">1 db</p>
        </div>
        <div className="font-bold text-foreground">
          6 990 Ft
        </div>
      </div>

      {/* Totals */}
      <div className="py-4 space-y-2 border-b border-border">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Részösszeg</span>
          <span className="font-medium text-foreground">6 990 Ft</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Szállítás</span>
          <span className="font-medium text-accent">Ingyenes</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center py-4">
        <span className="text-lg font-bold text-foreground">Összesen</span>
        <span className="text-2xl font-bold text-accent">6 990 Ft</span>
      </div>

      {/* Badges */}
      <div className="bg-pink-50/50 rounded-xl p-4 mt-2 space-y-3">
        <div className="flex items-center gap-3 text-sm text-foreground font-medium">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
            <Lock className="w-4 h-4" />
          </div>
          Biztonságos SSL titkosított fizetés
        </div>
        <div className="flex items-center gap-3 text-sm text-foreground font-medium">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
            <Truck className="w-4 h-4" />
          </div>
          30 napos pénzvisszafizetési garancia
        </div>
      </div>
    </div>
  );
}
