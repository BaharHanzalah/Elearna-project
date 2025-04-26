import career1 from "../../../../assets/Home1/career-2.webp";
import career2 from "../../../../assets/Home1/career-1.webp";
import career3 from "../../../../assets/Home1/career-3.svg";
import SubFooter from "../../../subfooter/SubFooter";

const data = [
  {
    heading: "Software development instructor",
    p1: "50 Posts available",
    p2: "4367 Lula Shores, Derekton 48438",
    btn1: "$23K - $35K",
    btn2: "Apply Now",
    li1: "ob Description : Lorem ipsum dolor sit amet consectetur.",
    li2: "Job Type : Full-time, Permanent",
    li3: "Experience : 2+ years",
  },
  {
    heading: "Machine learning educator",
    p1: "35 Posts available",
    p2: "4367 Lula Shores, Derekton 48438",
    btn1: "$20K - $35K",
    btn2: "Apply Now",
    li1: "ob Description : Lorem ipsum dolor sit amet consectetur.",
    li2: "Job Type : Full-time, Permanent",
    li3: "Experience : 2+ years",
  },
  {
    heading: "Blockchain Technology Instructor",
    p1: "47 Posts available",
    p2: "4367 Lula Shores, Derekton 48438",
    btn1: "$20K - $35K",
    btn2: "Apply Now",
    li1: "ob Description : Lorem ipsum dolor sit amet consectetur.",
    li2: "Job Type : Full-time, Permanent",
    li3: "Experience : 2+ years",
  },
  {
    heading: "Digital Design and UX Instructor",
    p1: "50 Posts available",
    p2: "4367 Lula Shores, Derekton 48438",
    btn1: "$23K - $35K",
    btn2: "Apply Now",
    li1: "ob Description : Lorem ipsum dolor sit amet consectetur.",
    li2: "Job Type : Full-time, Permanent",
    li3: "Experience : 2+ years",
  },
];
function Career() {
  return (
    <>
      {/* career hero section start */}
      <div className="w-full h-[500px] bg-Pricingbg flex flex-col justify-center ps-5 text-white bg-center bg-cover">
        <p className="text-lg font-medium py-5">We are hiring</p>
        <h1 className="text-6xl font-medium">
          Begin your journey as <br /> an instructor
        </h1>
      </div>
      {/* career hero section end*/}
      {/* career help section start */}
      <div className="w-full py-10 grid grid-cols-1 lg:grid-cols-2">
        {/* career image section start */}
        <div className=" grid grid-cols-1 md:grid-cols-2 px-5 gap-5 relative mb-28">
          <div className="w-full md:w-96 rounded-md">
            <img
              src={career1}
              alt=""
              className="object-cover rounded-md h-full w-full"
            />
          </div>
          <div className="w-full h-96 lg:h-[100%] lg:w-52 rounded-md lg:absolute -bottom-20 right-0 hidden md:block">
            <img
              src={career2}
              alt=""
              className="w-full object-cover h-full rounded-md"
            />
          </div>
        </div>
        {/* career image section end */}
        {/* career text section start */}
        <div className="w-full px-10">
          <div>
            <p className="text-lg font-semibold">Why we are</p>
            <h1 className="text-5xl font-semibold">
              We help connectivity across the world
            </h1>
            <p className="pt-8 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusm
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="py-8">
            <h1 className="flex gap-10 text-xl font-bold">
              <img src={career3} alt="" /> Full network visibility worldwide
            </h1>
            <p className="text-gray-500 ps-16 py-3">
              Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <h1 className="flex gap-10 text-xl font-bold">
              <img src={career3} alt="" /> Supported the use of fiber optic
              cable
            </h1>
            <p className="text-gray-500 ps-16 py-3">
              Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* career text section end */}
      </div>
      {/* career help section end */}
      {/* career cards section start */}
      <div className="bg-[#eff6f8]">
        {/* card section heading */}
        <div className="w-full text-center">
          <p className="pt-16 text-lg">job opening</p>
          <h1 className="text-5xl font-medium py-5">
            Be a part of our faculty
          </h1>
        </div>
        {/* card section heading end */}
        {/* card start */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 py-5 gap-7">
          {data.map((items, index) => (
            <div
              key={index}
              className="w-full p-10 bg-white rounded-lg hover:shadow-lg"
            >
              <h1 className="text-2xl font-medium">{items.heading}</h1>
              <p className="text-gray-500">{items.p1}</p>
              <p className="text-gray-500">{items.p2}</p>
              <div className="my-5 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                <button className="bg-yellow-500 w-44 py-3 px-4 cursor-default rounded-sm">
                  <p className="cursor-text"> {items.btn1}</p>
                </button>
                <button className="bg-bgNavbar w-44 text-white py-3 px-4 rounded-sm">
                  {items.btn2}
                </button>
              </div>
              <ul className="">
                <li className="relative text-gray-100 pl-4 before:absolute before:left-0 before:top-3 before:w-1 before:h-1 before:bg-gray-500 before:rounded-full">
                  {items.li1}
                </li>
                <li className="relative text-gray-100 pl-4 before:absolute before:left-0 before:top-3 before:w-1 before:h-1 before:bg-gray-500 before:rounded-full">
                  {items.li2}
                </li>
                <li className="relative text-gray-100 pl-4 before:absolute before:left-0 before:top-3 before:w-1 before:h-1 before:bg-gray-500 before:rounded-full">
                  {items.li3}
                </li>
              </ul>
            </div>
          ))}
        </div>
        {/* card end */}
      </div>
      {/* career cards section end */}
      <SubFooter />
    </>
  );
}

export default Career;
