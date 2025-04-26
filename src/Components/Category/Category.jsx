import { getData } from "./CardsData";
import categoryGirl from "../../assets/Home1/category-girl.webp";
import categoryVideo from "../../assets/Home1/category-video.mp4";
import categoryVideobtn from "../../assets/Home1/video-btns.svg";
function Category() {
  return (
    <>
      {/* category section start */}
      <div className="w-full h-auto">
        {/* category section text div start */}
        <div className="w-full h-auto flex flex-col items-center justify-center text-center py-10">
          <p className="text-lg">Top Categories</p>
          <h1 className="text-4xl font-serif pt-5">
            Discover leading categories to <br /> elevate your journey
          </h1>
        </div>
        {/* category section text div end */}
        {/* category section cards div start */}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 items-center justify-center text-center py-10">
          {getData.map((items, index) => {
            return (
              <div
                key={index}
                className="w-full h-auto p-4 bg-white rounded-lg"
              >
                <div
                  className="w-auto h-56 flex flex-col items-center justify-center gap-5 border-[1px]
                 border-gray-200 hover:shadow-2xl duration-500 cursor-pointer hover:bg-white"
                >
                  <div className="bg-[#eff6f8] rounded-full w-16 h-16 flex justify-center items-center">
                    <img src={items.img} alt="" />
                  </div>
                  <h1 className="text-1xl font-bold px-10">{items.titel}</h1>
                  <p>{items.courses}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* category section cards div end */}
      </div>
      {/* category section girl and video start */}
      <div className="w-full flex flex-col md:flex-row gap-10 justify-between px-5 py-20">
        {/* girl start */}
        <div className="w-full  lg:h-720 rounded-md relative bg-[#eff6f8] md:w-1/2">
          <div className="md:block lg:hidden left-10 top-24 w-full h-auto">
            {/* this dev is just for to move item and justify to center */}
            <div className="w-full h-auto flex flex-col items-center justify-center text-center py-5">
              <h1 className="font-serif text-2xl">
                Quick access to the popular courses
              </h1>
              <button className="py-3 px-12  rounded-md bg-[#ffb606] mt-10 transform transition hover:scale-95">
                Viwe Courses
              </button>
            </div>
          </div>
          <div className="w-full h-auto">
            <img
              src={categoryGirl}
              alt=""
              className="w-full h-full md:w-full rounded-lg p-10 lg:p-0"
            />
          </div>
          <div className="absolute left-10 top-24 w-56 hidden lg:block">
            <h1 className="font-serif text-2xl">
              Quick access to the popular courses
            </h1>
            <button className="py-3 px-12  rounded-md bg-[#ffb606] mt-10 transform transition hover:scale-95">
              Viwe Courses
            </button>
          </div>
        </div>
        {/* girl end */}
        {/* video start */}
        <div className="w-full md:w-1/2 h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#f1f1e9] rounded-md px-5 lg:gap-4 ">
          <div className="flex flex-col justify-center lg:w-full items-center lg:items-start mt-5 lg:mt-0">
            <h1 className="text-2xl font-serif">Develop your skills Online</h1>
            <button className="py-3 px-12 transform transition duration-300 hover:scale-90  rounded-md bg-[#0f252a] text-white mt-10">
              Apply Now
            </button>
          </div>
          <div className=" relative rounded-lg mb-6 lg:mb-0">
            <video
              src={categoryVideo}
              className="w-full h-full rounded-lg"
              autoPlay
              muted
            ></video>
            {/* video btns */}

            <img
              src={categoryVideobtn}
              alt=""
              className="h-auto w-auto lg:w-32 absolute bottom-8 left-48 md:bottom-10 md:left-28 lg:bottom-32 lg:left-16"
            />
          </div>
        </div>
        {/* video end */}
      </div>
      {/* category section girl and video end */}
      {/* category section end */}
    </>
  );
}

export default Category;
