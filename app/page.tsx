import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Manufacturing from "./components/Manufacturing/Manufacturing";
import Services from "./components/Services/Services";
import Industries from "./components/Industries/Industries";
import OthersVsMekark from "./components/OthersVsMekark/OthersVsMekark";
import WhyDifferent from "./components/WhyDifferent/WhyDifferent";
import Projects from "./components/Projects/Projects";
import InfraPartner from "./components/InfraPartner/InfraPartner";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Consultation from "./components/Consultation/Consultation";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <OthersVsMekark />
      <WhyDifferent />
      <Projects />
      <InfraPartner />
      <Manufacturing />
      <Testimonials />
      <FAQ />
      <Consultation />

    </>
  );
}
