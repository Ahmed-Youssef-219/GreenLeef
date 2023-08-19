import TextimonialsCard from "./subComponents/TextimonialsCard";
import { register } from "swiper/element/bundle";

register();

const Testimonials = () => {
  return (
    <section id="textimonials">
        <h2 className="text-[#EAD7DC] text-center mt-14 text-4xl">Testimonials</h2>

      <div className="flex items-center justify-evenly flex-wrap">
        <TextimonialsCard imagesrc="person1" />
        <TextimonialsCard imagesrc="person2" />
        <TextimonialsCard imagesrc="person3" />
        <TextimonialsCard imagesrc="person4" />
        <TextimonialsCard imagesrc="person5" />
      </div>
    </section>
  );
};

export default Testimonials;
