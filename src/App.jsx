import Header from "./secetions/Header";
import Hero from "./secetions/Hero";
import Services from "./secetions/Services";
import About from "./secetions/About";
import Team from "./secetions/Team";
import Faq from "./secetions/Faq";
import Testimonials from "./secetions/Testimonials"; // 1. Importe aqui no topo
import Contact from "./secetions/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Faq />
      <Testimonials /> {/* 2. Insira a seção aqui */}
      <Contact />
    </>
  )
}

export default App;