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
        <h3 className="text-2xl text-center">Our social media profiles</h3>
        <div className="flex items-center justify-between my-4">
          <AiOutlineTwitter className="text-4xl mx-4 hover:text-[#1D9BF0] cursor-pointer" />
          <AiFillInstagram className="text-4xl mx-4 hover:text-[#DD2A7B] cursor-pointer" />
          <BsFacebook className="text-3xl mx-4 hover:text-[#3b5998] cursor-pointer" />
        </div>

        <form action="#" className="bg-red-500 w-[600px] my-10">
            <h3>Send us a message</h3>
            <div className="flex flex-col items-center justify-start">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="fullName" id="name" />
            </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
