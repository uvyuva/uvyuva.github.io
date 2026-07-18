/**
 * --------------------------------------------------
 * UV Portfolio
 * Root Application
 * Author: Yuvaraj P.
 * --------------------------------------------------
 */
import { ReactLenis } from "lenis/react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import WhatIBuild from "./components/build";
import About from "./components/about";
import Journey from "./components/journey";
import Work from "./components/work";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { WhoamiProvider } from "./components/whoami/WhoamiProvider";



function App() {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, anchors: true }}
    >
      <WhoamiProvider>
      <Navbar />

      <main className="relative">
        <Hero />
        <WhatIBuild />
        <About />
        <Journey />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </main>

    </WhoamiProvider>
    </ReactLenis>
  );
}

export default App;