
import Link from "next/link";
const Hero = () => {

    const flex_col_center = 'flex flex-col items-center justify-center'

  return (
    <div className={`w-screen h-screen bg-hero bg-center bg-cover text-[#EAD7DC] ${flex_col_center}`}>
      <div className="mb-10 text-center">
        <p className="text-xl sm:text-2xl md:text-4xl mb-8">Welcome to</p>
        <h1 className="font-pacifico font-bold text-3xl sm:text-6xl md:text-8xl text-[#0F080A]">Greenleef Landscape</h1>
      </div>
      <p className="my-6 w-[290px] sm:w-[500px] md:w-[700px] sm:text-xl md:text-2xl text-center">
        Transforming your outdoor space into a beautiful oasis. Expert
        landscaping services tailored to your needs.
      </p>
      <Link href='./services' className="mt-6 py-2 px-4 rounded-sm bg-[#0F080A] hover:scale-95">Explore Our Services</Link>
    </div> 
  );
};

export default Hero;
