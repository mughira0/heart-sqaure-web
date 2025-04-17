"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutUs from "../../components/aboutUs";
import Image from "next/image";
import GetInvolved from "../get-involved";
import Find from "../../components/find";
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} className="relative py-20">
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "100% auto",
          objectFit: "contain",
        }}
        className="h-full w-full z-0 absolute "
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading-color)] mb-4 font-serif">
          Get Involved
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join us in our mission to empower businesses with the tools and
          resources they need to thrive. Whether you're a seasoned entrepreneur,
          a seasoned entrepreneur, a seasoned entrepreneur.
        </p>
      </motion.div>
      <AboutUs data={left} left={true} />
      <Find />

      <AboutUs data={right} left={false} />

      <GetInvolved />
    </section>
  );
}

export default AboutSection;

const left = {
  image: "/images/look.jpg", // added file extension just in case
  title: "Slow Growth and Stagnation & Missed Opportunities",
  description1:
    "Businesses often plateau due to outdated strategies, poor digital presence, and lack of automation, causing them to miss out on growth potential.",
  description2:
    "Without proper systems in place, even the best products or services can remain unnoticed. It's time to evolve and embrace smart business practices that drive real momentum.",
};

const right = {
  image: "/images/growth.jpg", // added file extension just in case
  title: "Manual Time Consumption",
  description1:
    "Spending countless hours on repetitive manual tasks drains resources and hinders productivity.",
  description2:
    "By integrating intelligent automation and streamlined workflows, your team can focus on high-impact activities that truly grow your business.",
};
