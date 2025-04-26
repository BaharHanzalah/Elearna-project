import offer1 from "../../assets/Home1/offer-1.webp";
import offer2 from "../../assets/Home1/offer-2.webp";
import offer3 from "../../assets/Home1/offer-3.avif";
function Offers() {
  return (
    <>
      {/* offers start */}
      <div className="w-full  h-auto bg-white grid grid-cols-1 lg:grid-cols-2 items-center  py-10">
        {/* offers image section start */}
        <div className="w-full sm:w-full relative px-10">
          <img
            src={offer3}
            alt="offer1"
            className="w-auto relative md:absolute left-0 top-10 md:left-16 md:w-[400px] lg:w-[300px]  sm:w-full"
          />
          <img
            src={offer1}
            alt="offer1"
            className="w-auto float-start md:float-end shadow-lg lg:w-[300px] lg:h-[400px] md:w-1/2 me-5 sm:w-full my-20 md:my-0"
          />
          <img
            src={offer2}
            alt="offer1"
            className="w-auto relative md:absolute bottom-0  md:-bottom-44 left-0 md:left-10 lg:w-[300px] lg:h-[400px] md:w-1/2 pb-0 lg:pb-10"
          />
        </div>
        {/* offers image section end */}
        {/* offers text section start */}
        <div className="w-full ps-8 md:pt-52 lg:pt-20 pe-10">
          <div className="w-full px-3 pt-20">
            <p className="text-lg pb-5">what we Offer</p>
            <h1 className="text-5xl font-bold">
              Personalized learning for your ambitions
            </h1>
            <p className="text-lg pt-5 text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>
            <ol className="list-disc grid grid-cols-2 pt-10 ps-5 gap-10 font-bold">
              <li>Skill-based instruction</li>
              <li>Analytics and insights</li>
              <li>Global certification</li>
              <li>Customizable courses</li>
            </ol>
          </div>
          <div className="bg-[#eff6f8] w-full h-40 mt-10">
            <h1 className="font-bold pt-5 ps-10">Still have questions?</h1>
            <button className="bg-[#0f252a] text-white my-10 px-10 py-4 rounded-lg float-end me-3">
              Get Started
            </button>
          </div>
        </div>
        {/* offers text section end */}
      </div>
      {/* offers end */}
    </>
  );
}

export default Offers;
