"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import hardscape from "@public/hardscap2.png";
import irrigation from "@public/irrigation.png";
import landscape from "@public/landscape2.png";
import outdoor from "@public/outdoor2.png";
const Services = () => {
  const flex_col_center = "flex flex-col items-center justify-center";
  return (
    <section
      id="services"
      className={`${flex_col_center} text-[#EAD7DC] font-lato mb-8 mt-16`}
    >
      <motion.h2
        className="my-8 text-4xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Services
      </motion.h2>
      <motion.p
        className="mb-8 mx-4 w-[290px] sm:w-[500px] md:w-[800px] leading-8 tracking-wider font-light"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        At GreenLeaf Landscaping, we offer a wide range of services to create
        the perfect outdoor space for your home or business.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        {/* one Card */}
        <motion.div
          className="bg-[#D2F1A7] w-[290px] sm:w-[380px] rounded-lg text-[#0F080A]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={hardscape}
            alt="hardscaping image"
            objectFit="cover"
            className="w-full"
          />
          <div className="p-4 c">
            <h3 className="text-xl py-1 font-semibold">Hardscaping</h3>
            <p className="text-[11px] py-1 text-[#B06D7E]">4 WEEKS TO BUILD</p>
            <p className="py-1 text-[#351D23]">
              Installation of patios, walkways, and retaining walls.
            </p>
            <button className="my-2 bg-[#0F080A] text-[#EAD7DC] py-2 px-4 rounded-md hover:scale-90">
              Show Details
            </button>
          </div>
        </motion.div>
        {/* one Card */}
        <motion.div
          className="bg-[#D2F1A7] w-[290px] sm:w-[380px] rounded-lg text-[#0F080A]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={irrigation} alt="hardscaping image" className="w-full" />
          <div className="p-4 c">
            <h3 className="text-xl py-1 font-semibold">Irrigation systems</h3>
            <p className="text-[11px] py-1 text-[#B06D7E]">4 WEEKS TO BUILD</p>
            <p className="py-1 text-[#351D23]">
              Installation of patios, walkways, and retaining walls.
            </p>
            <button className="my-2 bg-[#0F080A] text-[#EAD7DC] py-2 px-4 rounded-md hover:scale-90">
              Show Details
            </button>
          </div>
        </motion.div>
        {/* one Card */}
        <motion.div
          className="bg-[#D2F1A7] w-[290px] sm:w-[380px] rounded-lg text-[#0F080A]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={outdoor} alt="hardscaping image" className="w-full" />
          <div className="p-4 c">
            <h3 className="text-xl py-1 font-semibold">Outdoor lighting</h3>
            <p className="text-[11px] py-1 text-[#B06D7E]">4 WEEKS TO BUILD</p>
            <p className="py-1 text-[#351D23]">
              Installation of patios, walkways, and retaining walls.
            </p>
            <button className="my-2 bg-[#0F080A] text-[#EAD7DC] py-2 px-4 rounded-md hover:scale-90">
              Show Details
            </button>
          </div>
        </motion.div>
        {/* one Card */}
        <motion.div
          className="bg-[#D2F1A7] w-[290px] sm:w-[380px] rounded-lg text-[#0F080A]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={landscape} alt="hardscaping image" className="w-full" />
          <div className="p-4 c">
            <h3 className="text-xl py-1 font-semibold">Landscape Design</h3>
            <p className="text-[11px] py-1 text-[#B06D7E]">4 WEEKS TO BUILD</p>
            <p className="py-1 text-[#351D23]">
              Installation of patios, walkways, and retaining walls.
            </p>
            <button className="my-2 bg-[#0F080A] text-[#EAD7DC] py-2 px-4 rounded-md hover:scale-90">
              Show Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
