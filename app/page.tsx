import Hero from "./components/sections/Hero";
import Cursos from "./components/sections/Cursos";
import Nosotros from "./components/sections/Nosotros";
// import Testimonios from "./components/sections/Testimonios";
import FAQ from "./components/sections/FAQ";
import Sede from "./components/sections/Sede";
import Contacto from "./components/sections/Contacto";
import Footer from "./components/sections/Footer";
import Espacios from "./components/sections/Espacios";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cursos />
      <Nosotros/>
      {/* <Testimonios /> */}
      <Espacios/>
      <Sede/>
      <FAQ/>
      <Contacto/>
      <Footer/>



    </main>
  );
}


