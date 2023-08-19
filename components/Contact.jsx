import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Contact = () => {
  return (
    <section id="contact" className="text-[#EAD7DC]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl my-8 text-center">
          Let’s work on your project together!
        </h2>
        <p className="mx-4 w-300px sm:w-[600px] text-md tracking-wider text-[#797A7B]">
          Ready to transform your outdoor space? Contact us today for a{" "}
          <span className="text-[#EAD7DC]">FREE consultation and quote.</span>
        </p>
        <div className="mt-8">
        <h3 className="text-3xl text-center">Our social media profiles</h3>
        <div className="flex items-center justify-evenly my-4">
          <AiOutlineTwitter className="text-4xl mx-4 hover:text-[#1D9BF0] cursor-pointer" />
          <AiFillInstagram className="text-4xl mx-4 hover:text-[#DD2A7B] cursor-pointer" />
          <BsFacebook className="text-3xl mx-4 hover:text-[#3b5998] cursor-pointer" />
        </div>
        </div>

        <form action="#" className="w-[290px] sm:w-[600px] mx-4 my-10 p-6 border rounded-md">
            <h3 className="text-2xl sm:text-3xl text-center">Send us a message</h3>
            <div className="flex flex-col items-start my-4">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="fullName" id="name" placeholder="Enter Your Name" className="w-full my-2 p-2 outline-none rounded-sm bg-white/25 focus:scale-105" />
            </div>
            <div className="flex flex-col items-start my-4">
                <label htmlFor="email">G-mail</label>
                <input type="email" name="email" id="email" placeholder="Enter Your G-Mail" className="w-full my-2 p-2 outline-none rounded-sm bg-white/25 focus:scale-105" />
            </div>
            <div className="flex flex-col items-start my-4">
                <label htmlFor="message">Full Name</label>
                <textarea name="message" id="message" rows="10" placeholder="Enter Your Message" className="w-full my-2 p-2 outline-none rounded-sm bg-white/25 focus:scale-105 resize-none"></textarea>
            </div>
            <button type="submit" className="py-3 px-7 border rounded-md text-lg">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
