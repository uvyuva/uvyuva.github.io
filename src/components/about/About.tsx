/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: About
 * --------------------------------------------------
 */

import { motion } from "framer-motion";

import "./styles.css";

import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import { aboutContent } from "../../data/about";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {/* Top Left */}

      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute left-[1%] top-[4%] z-0 sm:left-[2%] md:left-[4%]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="h-auto w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      {/* Bottom Left */}

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] z-0 sm:left-[6%] md:left-[10%]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="h-auto w-[100px] sm:w-[140px] md:w-[180px]"
        />
      </FadeIn>

      {/* Top Right */}

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute right-[1%] top-[4%] z-0 sm:right-[2%] md:right-[4%]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="h-auto w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      {/* Bottom Right */}

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] z-0 sm:right-[6%] md:right-[10%]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="h-auto w-[130px] sm:w-[170px] md:w-[220px]"
        />
      </FadeIn>

      {/* Content */}

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-16 text-center sm:gap-20 md:gap-24">

        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">

          <FadeIn delay={0}>
            <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
              {aboutContent.title}
            </h2>
          </FadeIn>

          <AnimatedText text={aboutContent.description} />

        </div>

        <FadeIn
          delay={0.2}
          y={20}
          className="space-y-3"
        >
          <h3 className="text-2xl font-semibold text-white">
            {aboutContent.name}
          </h3>

          <p className="text-sm uppercase tracking-[0.45em] text-white/60">
            {aboutContent.role}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.3}
          y={20}
        >
          <motion.a
            href="#contact"
            whileHover={{ opacity: 0.9 }}
            whileTap={{ opacity: 0.75 }}
            transition={{ duration: 0.2 }}
            className="
              inline-flex
              rounded-full
              px-10
              py-4
              text-sm
              font-medium
              uppercase
              tracking-[0.35em]
              text-white
            "
            style={{
              background:
                "linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)",
              boxShadow:
                "0px 4px 4px rgba(181,1,167,.25),4px 4px 12px #7721B1 inset",
              outline: "2px solid #E3E3E3",
              outlineOffset: "-3px",
            }}
          >
            Let's Connect
          </motion.a>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;