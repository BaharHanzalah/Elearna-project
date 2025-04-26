import { useState } from "react";
import { getData } from "../../Category/CardsData";
import { allcoursesdata } from "../../categoryTabs/CoursesData";
import { allcoursesdata1 } from "../../categoryTabs/CoursesData";

function CoursesOne() {
  const [courses, setCourses] = useState(false);
  return (
    <>
      {/* coursesone hero start */}
      <div className="w-full relative py-52 bg-bgNavbar bg-coursesbg bg-cover flex flex-col gap-5 justify-center items-center text-white text-center">
        <p className="text-lg font-medium">START WITH</p>
        <h1 className="text-3xl font-bold md:text-6xl">
          Professional online <br /> courses
        </h1>
        <div className="w-[95%] absolute rounded-sm -bottom-36 bg-white grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 items-center justify-center text-center py-5">
          {getData.map((items, index) => {
            return (
              <div key={index} className="w-full h-auto rounded-lg">
                <div
                  className="w-auto h-52 flex flex-col items-center justify-center gap-2
                 cursor-pointer"
                >
                  <div className="bg-[#eff6f8] rounded-full w-16 h-16 flex justify-center items-center">
                    <img src={items.img} alt="" />
                  </div>
                  <h1 className="text-1xl font-bold px-10 text-black">
                    {items.titel}
                  </h1>
                  <p className="text-gray-500">{items.courses}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* coursesone hero end */}
      {/* coursesone cards start */}

      {/* coursesone cars end */}
      {/* coursesone coureses section start */}
      <div className="w-full h-auto bg-[#eff6f8] py-14 pt-48">
        {/* courses heading start */}
        <p className="ps-5 text-center md:text-start">Online Learning</p>
        <div className="w-full flex flex-col items-center md:items-end justify-center  md:grid  md:grid-cols-2 mt-4 px-2">
          <div>
            <h1 className="text-5xl font-semibold">Top Online Courses</h1>
          </div>
          {/* <div className="flex gap-5 flex-wrap justify-end mt-10 md:mt-0 cursor-pointer pe-5">
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
          </div> */}
        </div>
        {/* courses heading end */}
        {/* courses all courses card design start */}
        {courses ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-10 px-5">
            {allcoursesdata.map((data, index) => (
              <div
                key={index}
                className="bg-white relative group hover:cursor-pointer h-auto my-10 hover:shadow-2xl"
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
                        <img
                          src={data.bookIcon}
                          alt=""
                          className="text-black"
                        />{" "}
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
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-10 px-5">
            {allcoursesdata1.map((data, index) => (
              <div
                key={index}
                className="bg-white relative group hover:cursor-pointer h-auto my-10 hover:shadow-2xl"
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
                        <img
                          src={data.bookIcon}
                          alt=""
                          className="text-black"
                        />{" "}
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
        )}
        {/* courses all courses card design end */}
        <div className="w-full flex justify-center items-center gap-2">
          <div
            onClick={() => setCourses(true)}
            className={`${
              courses ? "bg-yellow-500" : "bg-white"
            }  rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}
          >
            1
          </div>
          <div
            onClick={() => setCourses(false)}
            className={`${
              courses ? "bg-white" : "bg-yellow-500"
            }  rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}
          >
            2
          </div>
        </div>
      </div>
      {/* coursesone coureses section end */}
      {/* courses yellow section start */}
      <div className="w-full flex justify-center items-center relative pt-20">
        <div className="w-[90%] bg-[#ffb606] px-10 mx-5 flex flex-col lg:flex-row justify-between items-center py-10 rounded-lg h-auto lg:h-48 absolute">
          <h1 className="text-3xl font-medium">
            Are you ready to start your journey?
          </h1>
          <div className="flex gap-10 pt-10 lg:pt-0">
            <button className="bg-bgNavbar px-5 py-3 text-white rounded-lg transform transition hover:scale-95 duration-500">
              Browse Courses
            </button>
            <button className="px-2 md:px-10 py-3  rounded-lg bg-transparent border-[1px] border-black transform transition hover:scale-95 duration-500">
              Became A Teacher
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesOne;
