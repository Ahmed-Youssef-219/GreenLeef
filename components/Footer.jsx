const Footer = () => {
  return (
    <section id="footer" className="w-screen bg-[#D2F1A7]">
      <div className="text-[#6A3945] font-lato flex items-center justify-evenly flex-wrap">
        <div className="p-2 my-4 mx-4 text-center">
          <h2 className="text-[#0F080A] font-pacifico my-8 sm:my-16 text-3xl sm:text-5xl">
            GreenLeef Landscape
          </h2>
          <p>Transform Your Outdoor Space with GreenLeaf Landscaping</p>
        </div>
        <ul className="my-10 border-t border-[#6A3945] mx-4 sm:mx-8 md:mx-16">
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">Home</li>
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">About</li>
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">Services</li>
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">
            Testimonials
          </li>
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">
            Our Portfolio
          </li>
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">
            Contact us
          </li>
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">FAQ</li>
        </ul>
        <ul className="my-10 border-t border-[#6A3945] self-start sm:mx-8 md:mx-16">
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">Facebook</li>
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">
            Instagram
          </li>
          <li className="my-2 cursor-pointer hover:text-[#0F080A]">Twitter</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
