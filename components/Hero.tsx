import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';

const Hero = () => {
  return (
    <div className="relative h-screen w-full pb-20 pt-36 bg-black-100 flex flex-col justify-center items-center">
      {/* UI: Spotlights */}
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Background with consistent color */}
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black-100">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Dynamic Web Magic with Next.js
        </p>

        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
  Hi! I&apos;m Isaac Xavier, welcome to my developer portfolio.
</p>

        
        <a href="#about">
          <MagicButton
            title="View My Projects"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
