"use client";
import Image from "next/image";
import project1 from "@public/project-1.png";
import project2 from "@public/project-2.png";
import project3 from "@public/project-3.png";
import project4 from "@public/project-4.png";
import project5 from "@public/project-5.png";
import project6 from "@public/project-6.png";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section id="gallery" className="text-[#EAD7DC] mt-20">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl my-8 text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Look at what we’ve done!
        </motion.h1>
        <motion.p
          className="text-center text-[#797A7B] mb-4 mx-4 w-300px sm:w-[600px]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Discover what clients were able to achieve with GreenLeef Landscape.
        </motion.p>
        <motion.button
          className="px-8 py-4 mb-8 border rounded-md hover:scale-90"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          View project gallery
        </motion.button>

        <motion.div
          className="mx-4 flex items-center justify-center flex-wrap gap-8"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project1}
            alt="project-1 image"
            className="cursor-pointer"
          />
          <Image
            src={project2}
            alt="project-2 image"
            className="cursor-pointer"
          />
          <Image
            src={project3}
            alt="project-3 image"
            className="cursor-pointer"
          />
          <Image
            src={project4}
            alt="project-4 image"
            className="cursor-pointer"
          />
          <Image
            src={project5}
            alt="project-5 image"
            className="cursor-pointer"
          />
          <Image
            src={project6}
            alt="project-6 image"
            className="cursor-pointer"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
