/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: What I Build
 * --------------------------------------------------
 */

import Container from "../common/Container";
import { buildData } from "../../data/build";
import BuildCard from "./BuildCard";

const WhatIBuild = () => {
  return (
    <section
      id="build"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_65%)]" />

      <Container className="relative z-10 max-w-[1700px]">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-5xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-neutral-500">
            WHAT I BUILD
          </p>

          <h2
            className="text-4xl font-light leading-[0.95] text-white md:text-5xl lg:text-6xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            From scalable cloud data
            <br />
            platforms to intelligent AI
            <br />
            experiences.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-[17px] leading-8 text-white/55">
            I focus on building reliable cloud-native systems,
            AI-powered applications and modern web experiences
            that balance performance, scalability and thoughtful
            engineering.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">

          {buildData.map((item) => (
            <BuildCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default WhatIBuild;