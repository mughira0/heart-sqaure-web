"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-bold text-black  ${
            scrollY > 50 ? "text-black" : "text-white"
          } `}
        >
          HEART{" "}
          <span
            className={` ${
              scrollY > 50 ? "text-[var(--main-color)]" : "text-white"
            }`}
          >
            SQUARE
          </span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={` hover:text-[var(--main-color)] transition-colors  ${
              scrollY > 50 ? "text-black" : "text-white"
            }`}
          >
            Home
          </Link>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <XIcon className="text-blue-600" />
            ) : (
              <MenuIcon className="text-blue-600" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          className="md:hidden bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link
              href="/"
              className="text-blue-800 hover:text-[var(--main-color)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-blue-800 hover:text-[var(--main-color)] transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-blue-800 hover:text-[var(--main-color)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-blue-800 hover:text-[var(--main-color)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
