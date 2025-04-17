"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote:
        "Heart And team provided the expertise we needed to scale our business. Their software solutions transformed our workflow and made us more efficient.",
      name: "Alice R.",
      role: "CEO, Tech Startup",
      team: "Heart", // Heart team
    },
    {
      quote:
        "The level of customization and support we received from AlzoByte helped us overcome technical challenges and grow our business.",
      name: "David P.",
      role: "Founder, E-commerce Business",
      team: "Square", // Square team
    },
    {
      quote:
        "Heart And innovative approach helped streamline our operations. They understand the needs of modern businesses and deliver results.",
      name: "Sophia M.",
      role: "COO, Logistics Firm",
      team: "Heart", // Heart team
    },
    {
      quote:
        "The team at AlzoByte took the time to understand our unique needs and delivered solutions that exceeded our expectations. Their dedication is unmatched.",
      name: "John B.",
      role: "Marketing Director, Retail Brand",
      team: "Square", // Square team
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
    <section className="relative py-16 md:py-24 bg-white" ref={ref}>
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
            Voices of Strength
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Heart and Square we just dont talk about transitions. We make
            them happen.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[var(--heading-color)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-[#D4AF37]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white text-700 mb-4 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-[white]">{testimonial.name}</h4>
                  <p className="text-sm text-white">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
