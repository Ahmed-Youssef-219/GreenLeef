const About = () => {
  const flex_col_center = "flex flex-col items-center justify-center";
  return (
    <section id="about" className={`${flex_col_center} text-[#EAD7DC] font-lato`}>
      <h2 className="my-8 text-4xl">About</h2>
      <div className="text-left leading-8 tracking-wider mb-8 px-4 w-[290px] sm:w-[500px] md:w-[800px] font-light">
        <p className="py-2">
          Founded in 2008, GreenLeaf Landscaping has been providing exceptional
          landscaping services to clients in Germany.
        </p>
        <p className="py-2">
          Our team of experienced professionals is dedicated to delivering
          top-quality work and outstanding customer service.
        </p>
        <p className="py-2">
          Our mission is to create beautiful, functional, and sustainable
          outdoor spaces that exceed our clients' expectations.
        </p>
      </div>
    </section>
  );
};

export default About;
