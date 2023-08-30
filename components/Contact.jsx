"use client";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { motion } from "framer-motion";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="text-[#EAD7DC] mt-20">
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          className="text-4xl my-8 text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Let’s work on your project together!
        </motion.h2>
        <motion.p
          className="mx-4 w-300px sm:w-[600px] text-md tracking-wider text-[#797A7B]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Ready to transform your outdoor space? Contact us today for a{" "}
          <span className="text-[#EAD7DC]">FREE consultation and quote.</span>
        </motion.p>
        <div className="mt-8">
          <motion.h3
            className="text-3xl text-center"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Our social media profiles
          </motion.h3>
          <motion.div
            className="flex items-center justify-evenly my-4"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AiOutlineTwitter className="text-4xl mx-4 hover:text-[#1D9BF0] cursor-pointer" />
            <AiFillInstagram className="text-4xl mx-4 hover:text-[#DD2A7B] cursor-pointer" />
            <BsFacebook className="text-3xl mx-4 hover:text-[#3b5998] cursor-pointer" />
          </motion.div>
        </div>

        <motion.form
          action="#"
          className="w-[290px] sm:w-[600px] mx-4 my-10 p-6 border rounded-md"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl text-center">
            Send us a message
          </h3>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="name"
              placeholder="Enter Your Name"
              className="w-full my-2 p-2 outline-none rounded-sm bg-white/25 focus:scale-105"
            />
          </div>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="email">G-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your G-Mail"
              className="w-full my-2 p-2 outline-none rounded-sm bg-white/25 focus:scale-105"
            />
          </div>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="message">Full Name</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Enter Your Message"
              className="w-full my-2 p-2 outline-none rounded-sm bg-white/25 focus:scale-105 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-7 border rounded-md text-lg hover:scale-90"
            onClick={handleSubmit}
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
