import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative min-h-[700px] w-full overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full z-[1] bg-[rgb(65,70,132)] opacity-50"></div>
      <div className="absolute h-full w-full overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Banner"
          layout="fill"
          className="object-cover object-position-center"
        />
      </div>
      <div className="container flex justify-center z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-left justify-center gap-6 lg:flex-1 text-white">
          <p className="text-[var(--white-color)] text-sm font-semibold">
            Why Work With Us
          </p>
          <h1 className="text-4xl text-[var(--white-color)] font-bold">
            Here’s what sets us apart:
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              title="Operational Excellence"
              description={
                <>
                  We don’t just plan; we{" "}
                  <span className="text-[var(--white-color)] font-semibold">
                    implement
                  </span>{" "}
                  strategies that drive real, measurable results.
                </>
              }
            />
            <Card
              title="Automation & Technology"
              description={
                <>
                  We use{" "}
                  <span className="text-[var(--white-color)] font-semibold">
                    cutting-edge tech
                  </span>{" "}
                  and automation to optimize workflows and boost growth.
                </>
              }
            />
            <Card
              title="Brand Marketing"
              description={
                <>
                  We enhance your brand with{" "}
                  <span className="text-[var(--white-color)] font-semibold">
                    branding kits, custom photography, promo videos
                  </span>
                  , and{" "}
                  <span className="text-[var(--white-color)] font-semibold">
                    social media strategies
                  </span>{" "}
                  to help you stand out.
                </>
              }
            />
            <Card
              title="Tailored Growth Strategies"
              description={
                <>
                  We create{" "}
                  <span className="text-[var(--white-color)] font-semibold">
                    custom strategies
                  </span>{" "}
                  for long-term, sustainable business growth.
                </>
              }
            />
          </div>
        </div>
        <div className="relative flex-auto lg:flex-1">
          <div className="relative  h-[200px]  animate-spinY">
            <Image
              src={"/images/logo.png"}
              fill
              alt="Hero Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, description }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex justify-center items-center bg-[var(--heading-color)] rounded-md h-[25px] w-[25px] mt-1">
        <Check className="text-white w-4 h-4" />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-lg font-bold text-white">{title}</h5>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
