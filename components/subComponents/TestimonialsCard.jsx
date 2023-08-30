import { BsStarFill, BsStarHalf } from "react-icons/bs";


const TestimonialsCard = ({imagesrc}) => {
  return (
    <>
      <div className="card w-[300px] mx-auto my-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <div className="w-10 h-10 rounded-full mr-4 bg-cover bg-center" style={{backgroundImage: `url('${imagesrc}.jpg')`}} />
            <h3 className="text-[#797A7B]">Cameron Williamson</h3>
          </div>
          <div className="flex items-cetner text-[#F9D262]">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
        </div>
        <div className="text-[#797A7B]">December 1, 2023</div>
        <p className="text-[#C9B5BA]">
          Aenean integer ipsum, eget ligula pretium egestas. Viverra maecenas ut
          diam suspendisse proin ac, volutpat mi nunc. Varius ac lacus tristique
          posuere sed nunc.
        </p>
      </div>
    </>
  );
};

export default TestimonialsCard;
