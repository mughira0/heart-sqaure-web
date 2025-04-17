"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function AboutUs({ left = false, data }) {
  return (
    <section className="py-20 bg-bgLight">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col gap-12 items-center ${
            left ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Image with motion */}
          <motion.div
            initial={{ opacity: 0, x: left ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative w-full md:w-1/2 h-[500px] rounded-lg overflow-hidden border border-borderColor2"
          >
            <Image
              src={data?.image}
              alt="About Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[--main-color] z-10 w-full h-full" />
          </motion.div>

          {/* Text Content with motion */}
          <motion.div
            initial={{ opacity: 0, x: left ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            className="space-y-6 w-full md:w-1/2 z-20"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-primary font-light">
                {data?.title}
              </h2>
              <div className="w-24 h-[4px] bg-primaryCustom"></div>
            </div>
            <p className="text-blackCustom leading-relaxed font-secondary">
              {data?.description1}
            </p>
            <p className="text-blackCustom leading-relaxed font-secondary">
              {data?.description2}
            </p>
            <Link
              href="#learn-more"
              className="inline-block border-2 border-primaryCustom text-primaryCustom hover:bg-primary hover:text-white px-6 py-3 uppercase tracking-wider text-sm transition-colors mt-4 font-secondary"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
