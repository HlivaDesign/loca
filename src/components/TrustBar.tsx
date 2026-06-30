import { Truck, ShieldCheck, RefreshCw, Smile } from "lucide-react";

export function TrustBar() {
  return (
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
  );
}
