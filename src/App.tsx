/**
 * --------------------------------------------------
 * UV Portfolio
 * Root Application
 * Author: Yuvaraj P.
 * --------------------------------------------------
 */
import Journey from "./components/journey";
import About from "./components/about";
import WhatIBuild from "./components/build";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import ScrollIndicator from "./components/common/ScrollIndicator";

function App() {
  return (
    <>
      <Navbar />

      <main className="relative">

        <Hero />
        <WhatIBuild />
        <About />
        <Journey />
        <ScrollIndicator />

      </main>
    </>
  );
}

export default App;