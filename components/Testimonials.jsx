"use client";
import TextimonialsCard from "./subComponents/TextimonialsCard";
import { useRef } from "react";
import Slider from "./lib/Slider";

const Testimonials = () => {
  const card = useRef();

  return (
    <section id="textimonials">
      <h2 className="text-[#EAD7DC] text-center mt-14 text-4xl">
        Testimonials
      </h2>

      <Slider card={card}>
        <div  ref={card} draggable={false}  className="mx-4">
          <TextimonialsCard imagesrc="person1" />
        </div>
        <div  ref={card} draggable={false}  className="mx-4">
          <TextimonialsCard imagesrc="person2" />
        </div>
        <div  ref={card} draggable={false}  className="mx-4">
          <TextimonialsCard imagesrc="person3" />
        </div>
        <div  ref={card} draggable={false} className="mx-4">
          <TextimonialsCard imagesrc="person4" />
        </div>
        <div  ref={card} draggable={false} className="mx-4">
          <TextimonialsCard imagesrc="person5" />
        </div>
        <div  ref={card} draggable={false} className="mx-4">
          <TextimonialsCard imagesrc="person4" />
        </div>
        <div  ref={card} draggable={false} className="mx-4">
          <TextimonialsCard imagesrc="person3" />
        </div>
        <div  ref={card} draggable={false} className="mx-4">
          <TextimonialsCard imagesrc="person2" />
        </div>
        <div  ref={card} draggable={false} className="mx-4">
          <TextimonialsCard imagesrc="person1" />
        </div>
      </Slider>

      
    </section>
  );
};

export default Testimonials;
