import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30 pb-20 pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-serif">Biztonságos Pénztár</h1>
            <p className="text-muted-foreground mt-2">Már csak egy lépés, és tiéd a ragyogó bőr.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Mobile: Order Summary is at the top */}
            <div className="lg:hidden">
              <OrderSummary />
            </div>

            {/* Left Column: Form */}
            <div className="lg:col-span-7 xl:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-pink-100 shadow-sm">
              <CheckoutForm />
            </div>

            {/* Desktop: Order Summary on the right */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
              <OrderSummary />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
