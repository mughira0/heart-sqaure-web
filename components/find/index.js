"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

function Find() {
  return (
    <section className=" max-w-[1500px] mx-auto px-4 py-20">
      <motion.div
        className="bg-[var(--main-color)] rounded-3xl p-8 md:p-16 text-center overflow-visible"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 slideIn">
          Build Your Dream{" "}
          <span className="bg-clip-text text-transparent bg-[var(--heading-color)]">
            Business
          </span>
        </h2>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto slideIn">
          lets build your dream business with us. we are here to help you
          achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gray-700 text-lg py-6 px-8 rounded-full hover:bg-gray-800">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-lg py-6 px-8 rounded-full"
          >
            Join as a Partner
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default Find;
