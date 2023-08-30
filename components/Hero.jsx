"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  const flex_col_center = "flex flex-col items-center justify-center";

  return (
    <section 
      id="hero"
      className={`w-screen h-screen bg-hero bg-center bg-cover text-[#EAD7DC] ${flex_col_center}`}
    >
      <motion.div
        className="mb-10 text-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xl sm:text-2xl md:text-4xl mb-8">Welcome to</p>
        <h1 className="font-pacifico font-bold text-3xl sm:text-6xl md:text-8xl text-[#0F080A]">
          Greenleef Landscape
        </h1>
      </motion.div>
      <motion.p
        className="mt-8 mb-14 w-[290px] sm:w-[500px] md:w-[700px] sm:text-xl md:text-2xl text-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Transforming your outdoor space into a beautiful oasis. Expert
        landscaping services tailored to your needs.
      </motion.p>

      <motion.button
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-6 py-2 px-4 rounded-sm bg-[#0F080A] hover:scale-95"
      >
        Explore Our Services
      </motion.button>
    </section>
  );
};

export default Hero;
