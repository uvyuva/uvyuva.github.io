/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Hero
 * --------------------------------------------------
 */

import Button from "../common/Button";
import Container from "../common/Container";
import UVIdentity from "./UVIdentity";

const Hero = () => {
  return (
    <section className="flex min-h-[100svh] items-center overflow-hidden pt-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left */}

          <div>

            <p className="mb-8 text-xs uppercase tracking-[0.38em] text-neutral-500">
              AWS DATA ENGINEER · GENERATIVE AI · WEB DEVELOPER
            </p>

            <h1 className="max-w-[15ch] text-[clamp(4rem,7vw,6.8rem)] font-black leading-[0.92] tracking-tight">
              Building intelligent
              <br />
              data experiences.
            </h1>

            <p className="mt-10 max-w-lg text-lg leading-8 text-neutral-600">
              I design scalable cloud-native platforms,
              AI-powered solutions and modern web
              applications focused on performance,
              reliability and thoughtful engineering.
            </p>

            <div className="mt-14 flex flex-wrap gap-6">

              <Button href="#work">
                Selected Work
              </Button>

              <Button
                href="#contact"
                variant="secondary"
              >
                Let's Connect
              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">

            <UVIdentity />

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;