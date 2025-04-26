/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import about1 from "../../assets/Home1/about-1.webp";
import about2 from "../../assets/Home1/about-2.avif";
import about3 from "../../assets/Home1/about-3.webp";
import aboutVideo from "../../assets/Home1/category-video.mp4";
import Logo1 from "../../assets/Home1/logo1.svg";
import Logo2 from "../../assets/Home1/logo2.svg";
import Logo3 from "../../assets/Home1/logo3.svg";
import Logo4 from "../../assets/Home1/logo4.svg";
import Logo5 from "../../assets/Home1/logo5.svg";
import Logo6 from "../../assets/Home1/logo6.svg";
import icon1 from "../../assets/Home1/about-icon-1.svg";
import icon2 from "../../assets/Home1/about-icon-2.svg";
import icon3 from "../../assets/Home1/about-icon-3.svg";
import about4 from "../../assets/Home1/about-4.webp";
import yellowdot from "../../assets/Home1/yellodot.svg";
import review from "../../assets/Home1/review.webp";
import collun from "../../assets/Home1/colluns.svg";
import Marquee from "react-fast-marquee";
import SubFooter from "../subfooter/SubFooter";

const cards = [
  {
    id: 1,
    title: "Flexibility and convenience",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    id: 2,
    title: "Course accessibility",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    id: 3,
    title: "Cost-effectiveness",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    id: 4,
    title: "Personalized learning",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
];
function AboutOne() {
  const [btnhover, setbtnhover] = useState(0);
  return (
    <>
      <section className="">
        {/* about hero start */}
        <div className="w-full h-[550px] bg-bgabouthero bg-cover bg-bgNavbar flex flex-col justify-center items-center text-white">
          <p className="py-5">ABOUT US</p>
          <h1 className="text-6xl font-semibold text-center">
            You’re sincerely <br /> determined to grow
          </h1>
        </div>
        {/* about hero end */}

        {/* our story div start */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-[95%] flex lg:w-full h-[550px] relative mx-5">
            <img
              src={about1}
              alt=""
              className="absolute -top-20 lg:left-5 w-full h-full rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="relative p-8 px-16 py-14 lg:py-0 text-center lg:text-start mt-20">
            <p className="text-lg font-semibold">OUR STORY</p>
            <h1 className="text-5xl font-semibold py-5">
              Limitless learning and get more possibilities
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
              maecenas scelerisque imperdiet nec. Pellentesque mauris amet
              ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium
              est elementum elementum rhoncus.
            </p>
            {/* colection div */}
            <div className="flex justify-between mt-6">
              <div className="text-center">
                <h1 className="text-6xl font-semibold">1.5K</h1>
                <p className="">Finish seasons</p>
              </div>
              <div className="w-[2px] h-auto bg-black"></div>

              <div className="text-center">
                <h1 className="text-6xl font-semibold">7.8K</h1>
                <p className="">ENROLLED</p>
              </div>
              <div className="w-[2px] h-auto bg-black"></div>
              <div className="h-full w-[1px] bg-gray-300"></div>
              <div className="text-center">
                <h1 className="text-6xl font-semibold">100%</h1>
                <p className="">JOB PLACEMENT</p>
              </div>
            </div>
            <img
              src={about2}
              alt=""
              className="w-64 h-44 rounded-xl shadow-2xl absolute -top-64 lg:top-72 right-10 lg:-left-64 "
            />
          </div>
        </div>
        {/* our story div end */}

        {/* learining usage start */}
        <div className="bg-bgNavbar grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-3 py-14 px-20 mt-20 rounded-lg text-white mx-10">
          <div className="w-full flex flex-col gap-5 justify-center items-center lg:py-0 lg:flex-row">
            <div className="">
              <img src={icon1} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">150+ online courses</h1>
              <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 justify-center items-center lg:py-0 lg:flex-row">
            <div className="">
              <img src={icon2} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">Personalized learning</h1>
              <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 justify-center items-center lg:py-0 lg:flex-row">
            <div className="">
              <img src={icon3} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">Lifetime update</h1>
              <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        {/* learining usage end */}
        {/* why we are named div start */}
        <div className="flex flex-col justify-center items-center w-full h-auto py-14 text-center">
          <p>WHY WE ARE</p>
          <h1 className="text-3xl font-semibold">
            We believe in our good education and development <br /> system and
            we know how to work together to <br /> reach greater success
          </h1>
        </div>
        {/* why we are named div end */}
        {/* cards div start */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
          {cards.map((items, index) => (
            <div
              className={`w-full shadow-xl px-5 pt-10 duration-500 overflow-hidden 
                
                ${btnhover === index ? "h-[380px]" : "h-72"}
             
              `}
              key={items.id}
              onMouseEnter={() => setbtnhover(index)}
              onMouseLeave={() => setbtnhover(index)}
            >
              <p className="text-blue-600 text-4xl font-bold">0{items.id}</p>

              <h1 className="text-2xl font-medium py-5">{items.title}</h1>
              <p className="text-gray-500">{items.content}</p>
              {btnhover === index && (
                <button className="bg-bgNavbar text-white mt-10 mb-4 py-3 px-10 rounded-md duration-1000 hover:scale-95">
                  Get Started
                </button>
              )}
            </div>
          ))}
          {/* card button */}
        </div>
        {/* cards div end */}
        <AboutOffer />
      </section>
    </>
  );
}
// what we offer start
function AboutOffer() {
  const [textchang, settextchang] = useState(false);
  function handelprec() {
    settextchang((changeT) => !changeT);
  }
  return (
    <>
      <div className="w-full  h-auto bg-white grid grid-cols-1 lg:grid-cols-2 items-center  py-10">
        {/* abouteOne image section start */}
        <div className="w-full sm:w-full relative px-5 gap-5 flex">
          <div className="rounded-full">
            <img src={yellowdot} alt="" />
          </div>
          <img
            src={about3}
            alt="offer1"
            className="w-1/2 h-full shadow-lg  md:w-[60%] me-5  my-20 md:my-0"
          />

          <video
            src={aboutVideo}
            className="w-[30%] h-[300px] object-cover absolute left-5 top-20 rounded-tl-[4rem]"
            autoPlay
            loop
            muted
          ></video>
        </div>
        {/* aboutOne image section end */}
        {/* aboutOne text section start */}
        <div className="w-full md:pt-52 lg:pt-20 pe-5 md:ps-0">
          <div className="w-full pt-20 ps-10">
            <p className="text-lg pb-5">what we Offer</p>
            <h1 className="text-5xl font-bold">
              Personalized learning for your ambitions
            </h1>
            <p className="text-lg pt-5 text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>
            <ol className="list-disc grid grid-cols-2 pt-10  gap-10 font-bold">
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
        {/* aboutOne text section end */}
      </div>

      {/* aboutOne video section start */}

      <div className="w-full h-auto bg-bgNavbar">
        <div className="w-full flex justify-center items-center p-5 sm:ps-10 pt-10 ">
          <p className="text-white">
            Learn from 350+ leading universities and companies with us
          </p>
        </div>
        <Marquee speed={50}>
          <div className="flex gap-20 p-10">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
            <img src={Logo6} alt="" />
          </div>
        </Marquee>
      </div>
      {/* aboutOne video section end */}

      {/* aboutOne became secton start */}
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 py-20">
        {/*  becam section text div start */}
        <div className="w-full text-center md:text-end pt-28 ps-10 relative">
          <img
            src={review}
            alt=""
            className="absolute -right-64 top-52 w- h-24 shadow-xl rounded-full"
          />
          <h1 className="text-5xl font-medium">Became an instructor</h1>
          <p className="pt-10 text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
            scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est
            nec commodo orci dictum in. Lorem consectetur donec purus sagittis.
          </p>
          <button className="bg-bgNavbar px-10 py-3 rounded-md text-white text-lg mt-10 transform transition hover:scale-95">
            Start Teaching Today
          </button>
        </div>
        {/*  becam section text div end */}
        {/* became secton image div start */}
        <div className="w-full flex justify-center items-center md:justify-end pt-20 md:pt-0">
          <img src={about4} alt="" className="w-[80%] " />
        </div>
        {/* became secton image div end */}
      </div>
      {/* aboutOne became secton end */}
      {/* aboutone last section start */}
      <div className="w-full bg-[#eff6f8] flex flex-col gap-5 justify-center items-center py-10">
        <img src={collun} alt="" />
        <div
          className={`${
            textchang ? "hidden" : "block"
          } flex flex-col gap-5 justify-center items-center text-lg`}
        >
          <p className="text-center px-10">
            “Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
            tempus facilisis scelerisque vitae <br /> consectetur vitae. Amet
            faucibus venenatis donec mattis. Morbi placerat eleifend malesuada
            sed <br /> semper quis.”
          </p>
          <p>Linda Grady</p>
          <p className="text-gray-500">Co-assistant manager</p>
        </div>
        {/* this div will be change with btn click */}
        <div
          className={`${
            textchang ? "block" : "hidden"
          } flex flex-col gap-5 justify-center items-center  text-lg`}
        >
          <p className="text-center px-10">
            "Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor
            ut nibh montes ante gravida velit. <br /> Facilisi posuere in sed
            mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel
            aliquet <br /> cursus placerat duis."
          </p>
          <p>Jim Adams</p>
          <p className="text-gray-500">Designer</p>
        </div>
        <div className="flex gap-2 justify-center items-center py-10 ">
          <svg
            className="w-10 h-10 text-gray-800 dark:text-gray-500 rounded-full border-[1px] cursor-pointer border-gray-300 hover:border-gray-500 "
            onClick={handelprec}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke="currentColor" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          <svg
            className="w-10 h-10 text-gray-800 dark:text-gray-500 rounded-full border-[1px] cursor-pointer border-gray-300 hover:border-gray-500"
            onClick={handelprec}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke="currentColor" d="M19 12H5m14 0-4 4m4-4-4-4" />
          </svg>
        </div>
      </div>
      {/* aboutone last section end */}
      <SubFooter />
    </>
  );
}
// what we offer end

export default AboutOne;
