"use client";
import TestimonialsCard from "./subComponents/TestimonialsCard";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [deviceWidth, setDeviceWidth] = useState(1000);

  if (typeof window !== 'undefined'){
    window.onresize = () => setDeviceWidth(window.innerWidth);
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: deviceWidth > 900 ? 3 : deviceWidth > 600 ? 2 : 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    arrows: true,
    speed: 3000,
  };

  return (
    <section id="testimonials" className="mb-14 mt-24">
      <motion.h2
        className="text-[#EAD7DC] text-center mt-14 text-4xl"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Testimonials
      </motion.h2>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Slider {...settings} className="cursor-grab">
          <TestimonialsCard imagesrc="person1" />
          <TestimonialsCard imagesrc="person2" />
          <TestimonialsCard imagesrc="person3" />
          <TestimonialsCard imagesrc="person4" />
          <TestimonialsCard imagesrc="person5" />
        </Slider>
      </motion.div>
    </section>
  );
};

export default Testimonials;
