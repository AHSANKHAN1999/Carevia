import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
   
    </main>
  );
}
