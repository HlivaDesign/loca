import { Truck, RefreshCw, CreditCard, Headphones } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif">
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
