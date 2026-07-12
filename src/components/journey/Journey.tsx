/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Journey
 * --------------------------------------------------
 */

import { useState } from "react";

import Container from "../common/Container";
import FadeIn from "./FadeIn";
import Pipeline from "./Pipeline";
import JourneyCard from "./JourneyCard";

import { journeyData } from "../../data/journey";

import "./styles.css";

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-black py-36"
    >
      <Container className="max-w-[1500px]">

        <FadeIn>

          <div className="mx-auto mb-24 max-w-4xl text-center">

            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-neutral-500">
              MY JOURNEY
            </p>

            <h2
              className="text-5xl font-light leading-[0.95] text-white md:text-6xl lg:text-7xl"
              style={{ letterSpacing: "-0.04em" }}
            >
              From ETL foundations
              <br />
              to cloud engineering
              <br />
              and Generative AI.
            </h2>

          </div>

        </FadeIn>

        <div className="journey-flow">
          <Pipeline
            steps={journeyData}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />

          <JourneyCard
            step={journeyData[activeIndex]}
          />
        </div>

      </Container>
    </section>
  );
};

export default Journey;