import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Workflows } from "@/components/Workflows";
import { Advantage } from "@/components/Advantage";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Workflows />
        <Advantage />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
