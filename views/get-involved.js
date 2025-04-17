"use client";

import { motion, useInView } from "framer-motion";
import { BarChart2, Rocket, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function GetInvolved() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const options = [
    {
      title: "Evaluate and Strategy",
      description:
        "Analyze current systems, identify gaps, and build actionable strategies for smarter growth.",
      icon: <BarChart2 className="w-8 h-8 text-[var(--heading-color)]" />,
      link: "#strategy",
    },
    {
      title: "Optimize and Implement",
      description:
        "Streamline processes, integrate efficient solutions, and turn plans into real-time execution.",
      icon: <Rocket className="w-8 h-8 text-[var(--heading-color)]" />,
      link: "#implement",
    },
    {
      title: "Scale and Impact",
      description:
        "Accelerate growth, expand your reach, and drive long-term impact across your business.",
      icon: <TrendingUp className="w-8 h-8 text-[var(--heading-color)]" />,
      link: "#scale",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative py-16 md:py-24" ref={ref}>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "100% auto",
          objectFit: "contain",
        }}
        className="h-full w-full z-0 absolute "
      ></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4 font-serif">
            Join Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our Proven 3 step process will guide you transform your business.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white border border-[#5D4037] rounded-lg p-6 flex flex-col items-center text-center hover:bg-[var(--heading-color)] hover:text-white transition-all duration-300 ease-in-out group"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--main-color)] flex items-center justify-center mb-4 transition-colors duration-300">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-[#5D4037] mb-3 group-hover:text-white transition-colors">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6 group-hover:text-white transition-colors">
                {option.description}
              </p>
              <Link
                href={option.link}
                className="mt-auto bg-white text-[var(--heading-color)] px-6 py-2 rounded-full font-medium group-hover:bg-white group-hover:text-[var(--heading-color)] transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
