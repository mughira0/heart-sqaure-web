"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CompanyMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scrollWidth = marquee.scrollWidth;
    const clientWidth = marquee.clientWidth;

    if (scrollWidth <= clientWidth) return;

    let position = 0;
    const speed = 0.5;

    const scroll = () => {
      position -= speed;

      if (position <= -scrollWidth / 2) {
        position = 0;
      }

      if (marquee) {
        marquee.style.transform = `translateX(${position}px)`;
      }

      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  const logos = Array.from({ length: 10 }, (_, i) => (
    <div
      key={i}
      className="flex-shrink-0 mx-8 opacity-70 hover:opacity-100 transition-opacity"
    >
      <Image
        src={`/images/placeholder-logo.svg`}
        alt={`Company logo ${i + 1}`}
        width={120}
        height={40}
        className="h-10 w-auto object-contain"
      />
    </div>
  ));

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 py-8 px-4 md:px-12 rounded-2xl shadow-inner">
      <div className="w-full overflow-hidden">
        <div ref={marqueeRef} className="flex items-center whitespace-nowrap">
          {logos}
          {logos}
        </div>
      </div>
    </div>
  );
}
