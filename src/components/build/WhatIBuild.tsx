/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: What I Build
 * --------------------------------------------------
 */

import Container from "../common/Container";
import { buildData } from "../../data/build";
import BuildCard from "./BuildCard";
import RollingText from "../common/RollingText";  // if you used Rule B


const WhatIBuild = () => {
  return (
    <section id="build" className="relative overflow-hidden bg-[#050505] py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_65%)]" />

      <Container className="relative z-10 max-w-300">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-neutral-500">
            WHAT I BUILD
          </p>

          <h2
            className="text-4xl font-light leading-[0.95] text-white md:text-5xl lg:text-6xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            <RollingText text="From scalable cloud data" />
            <br />
            <RollingText text="platforms to intelligent AI" />
            <br />
            <RollingText text="experiences." />
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-8 text-white/55">
            I focus on building reliable cloud-native systems, AI-powered
            applications and modern web experiences that balance performance,
            scalability and thoughtful engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {buildData.map((item) => (
            <BuildCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatIBuild;