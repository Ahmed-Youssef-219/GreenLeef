"use client";
import { motion } from "framer-motion";

const About = () => {
  const flex_col_center = "flex flex-col items-center justify-center";
  return (
    <section
      id="about"
      className={`${flex_col_center} text-[#EAD7DC] font-lato`}
    >
      <motion.h2
        className="my-8 text-4xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        About
      </motion.h2>
      <div className="text-left leading-8 tracking-wider mb-8 px-4 w-[290px] sm:w-[500px] md:w-[800px] font-light">
        <motion.p className="py-2">
          Founded in 2008, GreenLeaf Landscaping has been providing exceptional
          landscaping services to clients in Germany.
        </motion.p>
        <motion.p
          className="py-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Our team of experienced professionals is dedicated to delivering
          top-quality work and outstanding customer service.
        </motion.p>
        <motion.p
          className="py-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Our mission is to create beautiful, functional, and sustainable
          outdoor spaces that exceed our clients' expectations.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
