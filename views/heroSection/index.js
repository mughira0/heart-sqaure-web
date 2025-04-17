import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

function HeroSection() {
  const words = ["HEART", "AND", "SQUARE"];

  return (
    <div className="w-full relative bg-[--main-color] h-[calc(100vh-180px)] max-h-[100vh] overflow-hidden">
      <div className="invisible  xl:visible absolute  xl:top-1/2 left-5 transform -translate-y-1/2 text-white/50 font-bold text-left space-y-1">
        {words.map((word, index) => (
          <div
            key={index}
            className="text-4xl sm:text-6xl leading-[0.8] md:text-5xl lg:text-6xl xl:text-[8rem] tracking-tight"
          >
            {word}
          </div>
        ))}
      </div>
      <div className="relative flex justify-center align-middle items-center gap-2 m-auto mx-w-[600px] h-full  flex">
        <div className="absolute top-[10%] w-[200px] h-[100px]  animate-spinY">
          <Image
            src={"/images/logo.png"}
            fill
            alt="Hero Logo"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="mb-12 text-center px-4">
          <p className="text-[var(--heading-color)] font-semibold uppercase tracking-widest mb-3">
            EXPLORE
          </p>
          <h2 className="text-4xl  leading-[1.1] md:text-5xl md:leading-[1.1] font-extrabold text-white/90 mb-4">
            Transform Your Business with <br />
            <span className=" text-[var(--heading-color)]  bg-clip-text">
              Proven Growth Strategies
            </span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Unlock the potential of optimizing operations, automating processes,
            and scaling for long-term success.
          </p>
          <div className="flex justify-center mt-8">
            <Button className="bg-[var(--heading-color)] hover:bg-[var(--heading-color)] rounded-full w-[170px]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className=" absolute transform  bottom-[0px]   w-[350px] h-[350px]  md:right-10  md:absolute  md:w-[400px] md:h-[400px] lg:right-10 lg:absolute   lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px]  flex justify-end">
        <Image
          src={"/images/hero.png"}
          fill
          alt="Hero Image"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}

export default HeroSection;
