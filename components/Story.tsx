"use client";
import React from "react";
import { HeroParallax } from "@/components/hero-parrallax"; // Adjust the path as needed

// Define the products array
export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  
  // Define the HeroParallaxDemo component
  export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
  }
  
  const Story = () => {
    return (
      <section className="w-full py-20" id="about">
        <h1 className="heading text-white text-center mb-10">
          Explore My<span className="text-purple"> Developments</span>
        </h1>
  
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          {/* Integrate the HeroParallaxDemo component */}
          <HeroParallaxDemo />
        </div>
      </section>
    );
  };
  
  export default Story;