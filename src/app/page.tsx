import { Hero } from "@/components/Hero";
import { Navbar } from "../components/Navbar";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <LogoTicker />
      <section id="features">
        <Features />
      </section>
      <section id="product">
        <ProductShowcase />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
