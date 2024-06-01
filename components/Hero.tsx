import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 flex items-center justify-center bg-black h-screen relative">
      {/* UI: Spotlights */}
      <div className="absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background with consistent color */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-30">
          {/* Optional: Add a radial gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-black"
            style={{
              // Optional: You can adjust the gradient to fit your design
              background: 'radial-gradient(ellipse at center, transparent 20%, black)',
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Add some padding at the top to prevent content from being pushed too close to the top */}
        <div className="py-12">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Portfolio Crafted with Next.js
          </p>
        </div>

        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
          Hi! I&apos;m Isaac Xavier, welcome to my Developer Portfolio.
        </p>

        <a href="#projects">
          <MagicButton
            title="View My Projects"
            icon={<FaCode />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
