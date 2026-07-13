/**
 * --------------------------------------------------
 * UV Portfolio
 * Root Application
 * Author: Yuvaraj P.
 * --------------------------------------------------
 */
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Work from "./components/work";
import Journey from "./components/journey";
import About from "./components/about";
import WhatIBuild from "./components/build";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
//import ScrollIndicator from "./components/common/ScrollIndicator";

function App() {
  return (
    <>
      <Navbar />

      <main className="relative">

        <Hero />
        <WhatIBuild />
        <About />
        <Journey />
        <Work />
        <Skills />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}

export default App;