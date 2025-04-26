import { CoursesData } from "./CoursesData";
import { useState } from "react";

function Courses() {
  const [activeTab, setActiveTab] = useState("All courses");

  return (
    <>
      <div className="w-full h-auto bg-[#eff6f8] py-14">
        {/* courses heading start */}
        <p className="ps-5 text-center md:text-start">Online Learning</p>
        <div className="w-full flex flex-col items-center md:items-end justify-center  md:grid  md:grid-cols-2 mt-4 px-2">
          <div>
            <h1 className="text-5xl font-semibold">Top Online Courses</h1>
          </div>
          <div className="flex gap-5 flex-wrap justify-end mt-10 md:mt-0 cursor-pointer pe-5">
            {Object.keys(CoursesData).map((item) => (
              <p
                key={item}
                className={`${
                  activeTab === item ? "text-black" : "text-gray-600"
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* courses heading end */}
        {/* courses all courses card design start */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-10 px-5">
          {CoursesData[activeTab].map((data, index) => (
            <div
              key={index}
              className="bg-white relative group hover:cursor-pointer h-auto my-10"
            >
              <div className="w-full h-auto bg-white overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full transform transition group-hover:scale-110 duration-700"
                />
              </div>

              <div className=" flex flex-col px-8 gap-5 my-5 relative">
                <div className="absolute rounded-full bg-blue-600 w-20 h-20 text-white flex items-center justify-center -top-16 right-5 transform transition group-hover:scale-110 duration-700">
                  <p>{data.paid}</p>
                </div>
                <p>{data.title}</p>
                <h1 className="text-2xl font-semibold">{data.description}</h1>
                <div className="flex items-center gap-1">
                  <img src={data.stars} alt="" />
                  <p>{data.rate}</p>
                </div>
                <div className="w-full h-14 border-t-[1px] border-gray-200">
                  <div className="group-hover:hidden flex items-center h-full">
                    <span className="flex items-center w-1/2 h-full gap-2">
                      <img src={data.bookIcon} alt="" className="text-black" />{" "}
                      <p>{data.btn1}</p>
                    </span>
                    <div className="w-[1px] h-full bg-gray-200"></div>
                    <span className="flex items-center w-1/2 h-full text-black gap-2 px-5">
                      <img src={data.prof} alt="" /> <p>{data.btn2}</p>
                    </span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="w-full">
                      <button className="hidden group-hover:block w-full py-3  bg-yellow-500 mt-3 rounded-lg ">
                        {data.btn3}
                      </button>
                    </div>

                    <div
                      className={`${
                        data.paid === "Free" ? "hidden" : "group-hover:block"
                      } w-full hidden duration-500`}
                    >
                      <button className="bg-[#0f252a] w-full text-white py-3 mt-3 rounded-lg ms-5">
                        {data.btn4}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* courses all courses card design end */}
        <div className="w-full flex justify-center items-center ">
          <div className="w-auto px-10 flex justify-center items-center bg-[#0f252a] text-white py-5 rounded-full my-10">
            <p>
              We assist you in finding the ideal tutor at no cost.{" "}
              <a href="#" className="underline">
                Browse all available courses
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
