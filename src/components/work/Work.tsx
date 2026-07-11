/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Work Section
 * --------------------------------------------------
 */

import Container from "../common/Container";
import WorkCard from "./WorkCard";
import WorkVideoCard from "./WorkVideoCard";

const Work = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-black py-36"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]" />

      <Container className="relative z-10 max-w-[1500px]">

        {/* Heading */}

        <div className="mx-auto mb-28 max-w-4xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-neutral-500">
            SELECTED WORK
          </p>

          <h2
            className="text-5xl font-light leading-[0.9] text-white md:text-6xl lg:text-8xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            Three projects.
            <br />
            One engineering mindset.
          </h2>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <WorkCard
            category="Cloud Engineering"
            title="AWS Migration Platform"
            description="Migrated enterprise datasets from on-premise infrastructure to AWS using Glue, S3, Lambda and Athena while building scalable ETL pipelines and automated validation workflows."
            gradient
          />

          <WorkVideoCard
            videoUrl="/videos/portfolio.mp4"
          />

          <WorkCard
            category="Generative AI"
            title="AI Resume Assistant"
            description="Designed AI-powered workflows using modern LLM APIs, prompt engineering and cloud integrations to generate resumes, portfolios and personalized career content."
          />

        </div>

      </Container>

    </section>
  );
};

export default Work;