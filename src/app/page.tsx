import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Benefits } from "@/components/Benefits";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Reviews } from "@/components/Reviews";
import { Guarantee } from "@/components/Guarantee";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Benefits />
      <ProductShowcase />
      <Reviews />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
