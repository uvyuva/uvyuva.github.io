/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Journey
 * --------------------------------------------------
 */

import Container from "../common/Container";
import FadeIn from "./FadeIn";

import { journeyData } from "../../data/journey";

import "./styles.css";

const Journey = () => {
  return (
    <section id="journey" className="relative overflow-hidden bg-black py-36">
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

        <div className="timeline">
          {journeyData.map((step, index) => (
            <FadeIn
              key={step.year}
              delay={index * 0.12}
              className="timeline-item"
            >
              <span className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-year">{step.year}</span>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-subtitle">{step.subtitle}</p>
                <p className="timeline-desc">{step.description}</p>
                <div className="timeline-tech">
                  {step.technologies.map((tech) => (
                    <span key={tech} className="timeline-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Journey;