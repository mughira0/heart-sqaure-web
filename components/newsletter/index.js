"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Newsletter() {
  return (
    <section
      className="bg-[--main-color] py-20"
      style={
        {
          // background:
          //   "linear-gradient(to right, rgba(204, 153, 0, 0.2) 2%, transparent 20%, transparent 80%, rgba(204, 153, 0, 0.2) 90%)",
        }
      }
    >
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h2
          className="text-3xl text-[var(--heading-color)] font-bold mb-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Stay Updated
        </motion.h2>
        <motion.p
          className="text-xl text-white mb-8 max-w-2xl mx-auto"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Subscribe to our newsletter for the latest internship trends, hiring
          tips, and platform updates.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white border-[--main-color]  text-[--main-color]"
          />
          <Button className="bg-[--main-color] text-[--white-color] border-[--main-color] ">
            Subscribe
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default Newsletter;
