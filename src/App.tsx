/**
 * --------------------------------------------------
 * UV Portfolio
 * Root Application
 * Author: Yuvaraj P.
 * --------------------------------------------------
 */

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import ScrollIndicator from "./components/common/ScrollIndicator";

function App() {
  return (
    <>
      <Navbar />

      <main className="relative">

        <Hero />

        <ScrollIndicator />

      </main>
    </>
  );
}

export default App;