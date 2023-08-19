import Image from "next/image";
import hardscape from "@public/hardscap_2.png";
import irrigation from "@public/irrigation.png";
import landscape from "@public/landscape_2.png";
import outdoor from "@public/outdoor_2.png";
const Services = () => {

  const flex_col_center = "flex flex-col items-center justify-center";
  return (
    <section
      id="services"
      className={`${flex_col_center} text-[#EAD7DC] font-lato mb-8`}
    >
      <h2 className="my-8 text-4xl">Services</h2>
      <p className="mb-8 mx-4 w-300px sm:w-[600px] leading-8 tracking-wider">
        At GreenLeaf Landscaping, we offer a wide range of services to create
        the perfect outdoor space for your home or business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        {/* one Card */}
        <div className="bg-[#D2F1A7] w-[290px] sm:w-[380px] rounded-lg text-[#0F080A]">
          <Image
            src={hardscape}
            alt="hardscaping image"
            objectFit="cover"
            className="w-full"
          />
          <div className="p-4 c">
            <h3 className="text-xl py-1 font-semibold">Hardscaping</h3>
            <p className="text-[11px] py-1 text-[#B06D7E]">4 WEEKS TO BUILD</p>
            <p className="py-1 text-[#351D23]">Installation of patios, walkways, and retaining walls.</p>
            <button className="my-2 bg-[#0F080A] text-[#EAD7DC] py-2 px-4 rounded-md hover:scale-90">Show Details</button>
          </div>
        </div>
        {/* one Card */}
        <div className="bg-[#D2F1A7] w-[290px] sm:w-[380px] rounded-lg text-[#0F080A]">
          <Image
            src={irrigation}
            alt="hardscaping image"
            className="w-full"
          />
          <div className="p-4 c">
            <h3 className="text-xl py-1 font-semibold">Hardscaping</h3>
            <p className="text-[11px] py-1 text-[#B06D7E]">4 WEEKS TO BUILD</p>
            <p className="py-1 text-[#351D23]">Installation of patios, walkways, and retaining walls.</p>
            <button className="my-2 bg-[#0F080A] text-[#EAD7DC] py-2 px-4 rounded-md hover:scale-90">Show Details</button>
          </div>
        </div>
        {/* one Card */}
        <div className="bg-[#D2F1A7] w-[290px] sm:w-[380px] rounded-lg text-[#0F080A]">
          <Image
            src={outdoor}
            alt="hardscaping image"
            className="w-full"
          />
          <div className="p-4 c">
            <h3 className="text-xl py-1 font-semibold">Hardscaping</h3>
            <p className="text-[11px] py-1 text-[#B06D7E]">4 WEEKS TO BUILD</p>
            <p className="py-1 text-[#351D23]">Installation of patios, walkways, and retaining walls.</p>
            <button className="my-2 bg-[#0F080A] text-[#EAD7DC] py-2 px-4 rounded-md hover:scale-90">Show Details</button>
          </div>
        </div>
        {/* one Card */}
        <div className="bg-[#D2F1A7] w-[290px] sm:w-[380px] rounded-lg text-[#0F080A]">
          <Image
            src={landscape}
            alt="hardscaping image"
            className="w-full"
          />
          <div className="p-4 c">
            <h3 className="text-xl py-1 font-semibold">Hardscaping</h3>
            <p className="text-[11px] py-1 text-[#B06D7E]">4 WEEKS TO BUILD</p>
            <p className="py-1 text-[#351D23]">Installation of patios, walkways, and retaining walls.</p>
            <button className="my-2 bg-[#0F080A] text-[#EAD7DC] py-2 px-4 rounded-md hover:scale-90">Show Details</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
