import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pricingdata } from "./PricingData";
import Marquee from "react-fast-marquee";
import Logo1 from "../../../../assets/Home1/logo1.svg";
import Logo2 from "../../../../assets/Home1/logo2.svg";
import Logo3 from "../../../../assets/Home1/logo3.svg";
import Logo4 from "../../../../assets/Home1/logo4.svg";
import Logo5 from "../../../../assets/Home1/logo5.svg";
import Logo6 from "../../../../assets/Home1/logo6.svg";
import tack from "../../../../assets/Home1/Tick.svg";
import tackc from "../../../../assets/Home1/Tickc.svg";
import yellowcheck from "../../../../assets/Home1/yellowcheck.svg";
import yellowcross from "../../../../assets/Home1/yellowcross.svg";
import carton from "../../../../assets/Home1/carton.svg";
import collun from "../../../../assets/Home1/colluns.svg";

const faqs = [
  {
    question: "How do I enroll in an online course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Are there any prerequisites for enrolling in online courses?",
    answer:
      "Prerequisites depend on the course. Some may require prior knowledge.",
  },
  {
    question: "What are the technical requirements for online learning?",
    answer:
      "A stable internet connection, a computer or smartphone, and a web browser.",
  },
  {
    question: "What if I encounter technical difficulties?",
    answer:
      "You can contact our support team for assistance with technical issues.",
  },
  {
    question: "Are there live classes, or can I learn at my own pace?",
    answer: "Most courses are self-paced, but some include live sessions.",
  },
];
function Pricing() {
  const [btnmove, setbtnmove] = useState(true);
  function movebtn() {
    setbtnmove((priv) => !priv);
  }
  const Homepage = useNavigate();
  function gotohome() {
    Homepage("/");
  }
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [textchang, settextchang] = useState(false);
  function handelprec() {
    settextchang((changeT) => !changeT);
  }
  return (
    <>
      {/* pricing page hero section start */}
      <div className="w-full h-[500px] bg-Pricingbg flex flex-col justify-center items-center text-center text-white bg-center bg-cover">
        <p className="text-lg font-medium py-5">Pricing</p>
        <h1 className="text-6xl font-medium">
          Flexible pricing plan for <br /> every one
        </h1>
      </div>
      {/* pricing page hero section end */}
      {/* pricing cards section start */}
      <div className="w-full">
        {/* btn div start */}
        <div className="w-full py-10 flex justify-center items-center">
          <div
            className="w-20 h-10 rounded-full bg-gray-300 p-1"
            onClick={movebtn}
          >
            <div
              className={`${
                btnmove ? "float-start" : "float-end"
              } w-8 h-8 rounded-full bg-yellow-500 duration-500`}
            ></div>
          </div>
        </div>
        {/* btn div end */}
        {/* cards div start */}
        <div className="w-full py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 bg-[#ffffff]">
          {pricingdata.map((items, index) => (
            <div
              key={index}
              className={`${
                items.title === "Primeum"
                  ? "bg-bgNavbar text-white"
                  : "bg-white"
              } shadow-2xl rounded-md`}
            >
              <div
                className={`${
                  items.title === "Primeum" ? "block" : "hidden"
                } w-full h-4 bg-yellow-500 rounded-t-md`}
              ></div>
              <div className="w-full px-14 py-10">
                <p className="py-10 text-lg font-bold">{items.title}</p>
                <p className="text-gray-500">{items.subtitle}</p>
                <div
                  className={`${
                    items.title === "Primeum" ? "py-5" : "py-10"
                  } flex`}
                >
                  <h1 className="text-4xl font-medium">
                    {btnmove ? items.pricem : items.pricey}/
                  </h1>
                  <p className="font-medium pt-3">
                    <sub>{items.month}</sub>
                  </p>
                </div>
                <ul>
                  <li className="flex gap-5">
                    <img src={items.icon} alt="" />
                    {items.li1}
                  </li>
                  <li className="flex gap-5 py-5">
                    <img src={items.icon} alt="" />
                    {items.li2}
                  </li>
                  <li className="flex gap-5">
                    <img src={items.icon} alt="" />
                    {items.li3}
                  </li>
                  <li className="flex gap-5 py-5">
                    <img src={items.icon} alt="" />
                    {items.li4}
                  </li>
                  {items.nested && (
                    <>
                      <li className="flex flex-col gap-2 py-5">
                        <div className="flex gap-5 items-center">
                          <img src={items.nested.icon1} alt="" />
                          {items.nested.li5}
                        </div>
                      </li>
                      <button className="w-72 px-10 py-3 rounded-lg bg bg-yellow-500">
                        {items.nested.btn2}
                      </button>
                    </>
                  )}
                </ul>
                <button
                  className={`${
                    items.title === "Primeum" ? "hidden" : "block"
                  } w-72 px-10 py-3 rounded-lg bg bg-bgNavbar text-white text-lg mt-10`}
                >
                  {items.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* pricing cards section end */}
      {/* pricing marquee section start  */}
      <div className="w-full h-auto bg-[#eff6f8]">
        <div className="w-full flex justify-center items-center p-5 sm:ps-10 pt-20 ">
          <p>Learn from 350+ leading universities and companies with us</p>
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
      {/* pricing marquee section end  */}
      {/* Pricing comparison start */}
      <div className="w-full">
        {/* heading div start */}
        <div className="w-full flex flex-col justify-center items-center text-center py-20">
          <h1 className="text-5xl font-medium">Pricing comparison</h1>
          <p className="text-gray-500 pt-10">
            Distracted by the readable content of a page when looking at its{" "}
            <br />
            point of using that it has a more many desktop.
          </p>
        </div>
        {/* heading div end */}
        {/* table div starrt */}
        <div className="w-full hidden lg:flex">
          {/* first table start */}
          <div className="w-[55%]">
            <div className="text-center w-full flex flex-col justify-center items-end py-5 px-5">
              <p className="text-xl font-medium pe-10">Basic plan</p>
              <p className="text-xl font-medium py-1 pe-10">
                <sup className="font-bold">$</sup>{" "}
                <span className="text-4xl font-medium">199/</span>{" "}
                <sub>month</sub>
              </p>
              <p className="text-lg text-gray-500">No credit card required.</p>
            </div>
            <ul className="ps-5 text-center text-lg font-medium">
              <li className="flex justify-between bg-[#eff6f8] py-4 px-5">
                <p>Access to 30+ top courses</p>
                <img src={tack} alt="" className="pe-20" />
              </li>
              <li className="flex justify-between py-4 px-5">
                <p>Certification prep</p>
                <img src={tack} alt="" className="pe-20" />
              </li>
              <li className="flex justify-between py-4 px-5 bg-[#eff6f8]">
                <p>Customizable content</p>
                <img src={tack} alt="" className="pe-20" />
              </li>
              <li className="flex justify-between py-4 px-5">
                <p>AI-powered coding exercises</p>
                <img src={tack} alt="" className="pe-20" />
              </li>
              <li className="flex justify-between py-4 px-5 bg-[#eff6f8]">
                <p>Analytics and adoption reports</p>
                <img src={tackc} alt="" className="pe-20" />
              </li>
              <li className="flex justify-between py-4 px-5">
                <p>24/7 customer support</p>
                <img src={tackc} alt="" className="pe-20" />
              </li>
              <li className="flex justify-between py-4 px-5 bg-[#eff6f8]">
                <p>Instructor Q&A</p>
                <img src={tack} alt="" className="pe-20" />
              </li>
              <li className="flex justify-between py-4 px-5">
                <p>Skills assessments</p>
                <img src={tackc} alt="" className="pe-20" />
              </li>
            </ul>
          </div>
          {/* secound table start */}
          <div className="w-[22%] rounded-md bg-[#20383e]">
            <div className="text-center w-full flex flex-col justify-center items-center py-5 text-white">
              <p className="text-xl font-medium">Basic plan</p>
              <p className="text-xl font-medium py-1">
                <sup className="font-bold">$</sup>{" "}
                <span className="text-4xl font-medium">299/</span>{" "}
                <sub>month</sub>
              </p>
              <p className="text-lg text-gray-300">No credit card required.</p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <img src={yellowcheck} alt="" />
              <img src={yellowcheck} alt="" />
              <img src={yellowcheck} alt="" />
              <img src={yellowcheck} alt="" />
              <img src={yellowcross} alt="" />
              <img src={yellowcross} alt="" />
              <img src={yellowcheck} alt="" />
              <img src={yellowcheck} alt="" />
            </div>
          </div>
          {/* third table start*/}
          <div className="w-[23%]">
            <div className="text-center w-full flex flex-col justify-center items-center py-5 px-5">
              <p className="text-xl font-medium">Basic plan</p>
              <p className="text-xl font-medium">
                <sup className="font-bold text-lg">$</sup>{" "}
                <span className="text-4xl font-medium">399/</span>{" "}
                <sub>month</sub>
              </p>
              <p className="text-lg text-gray-500">No credit card required.</p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <ul className="w-full">
                <li className="bg-[#eff6f8] py-5 flex flex-col items-center gap-10">
                  <img src={tack} alt="" />
                </li>
                <li className="py-5 flex flex-col items-center gap-10">
                  <img src={tack} alt="" />
                </li>
                <li className="bg-[#eff6f8] py-5 flex flex-col items-center gap-10">
                  <img src={tack} alt="" />
                </li>
                <li className="py-5 flex flex-col items-center gap-10">
                  <img src={tack} alt="" />
                </li>
                <li className="bg-[#eff6f8] py-5 flex flex-col items-center gap-10">
                  <img src={tack} alt="" />
                </li>
                <li className="py-5 flex flex-col items-center gap-10">
                  <img src={tack} alt="" />
                </li>
                <li className="bg-[#eff6f8] py-5 flex flex-col items-center gap-10">
                  <img src={tack} alt="" />
                </li>
                <li className="py-5 flex flex-col items-center gap-10">
                  <img src={tack} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* table div end */}
        {/* mini screen table start */}
        {/* mini screen table heading*/}
        <div className="block lg:hidden">
          <div className="w-full flex justify-center items-center">
            <div className="text-center w-full flex flex-col justify-center items-center py-5 px-5">
              <p className="text-xl font-medium pe-10">Basic plan</p>
              <p className="text-xl font-medium py-1 pe-10">
                <sup className="font-bold">$</sup>{" "}
                <span className="text-4xl font-medium">199/</span>{" "}
                <sub>month</sub>
              </p>
              <p className="text-lg text-gray-500">No credit card required.</p>
            </div>
            {/*  */}
            <div className="text-center w-full flex flex-col justify-center items-center bg-[#20383e] text-white rounded-tl-md rounded-tr-md py-5 px-3">
              <p className="text-xl font-medium">Basic plan</p>
              <p className="text-xl font-medium py-1">
                <sup className="font-bold">$</sup>{" "}
                <span className="text-4xl font-medium">299/</span>{" "}
                <sub>month</sub>
              </p>
              <p className="text-lg text-gray-300">No credit card required.</p>
            </div>
            {/*  */}
            <div className="text-center w-full flex flex-col justify-center items-center py-5 px-5">
              <p className="text-xl font-medium">Basic plan</p>
              <p className="text-xl font-medium">
                <sup className="font-bold text-lg">$</sup>{" "}
                <span className="text-4xl font-medium">399/</span>{" "}
                <sub>month</sub>
              </p>
              <p className="text-lg text-gray-500">No credit card required.</p>
            </div>
          </div>
          {/* mini screen table body start*/}
          <div className="w-full text-xl font-medium py-3 bg-[#eff6f8]">
            <p className="w-full text-center">Access to 30+ top courses</p>
            <ul className="w-full flex justify-between px-36 py-5">
              <li>
                <img src={tack} alt="" />
              </li>
              <li>
                <img src={yellowcheck} alt="" />
              </li>
              <li>
                <img src={tack} alt="" />
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="w-full text-xl font-medium py-3">
            <p className="w-full text-center">Certification prep</p>
            <ul className="w-full flex justify-between px-36 py-5">
              <li>
                <img src={tack} alt="" />
              </li>
              <li>
                <img src={yellowcheck} alt="" />
              </li>
              <li>
                <img src={tack} alt="" />
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="w-full text-xl font-medium py-3 bg-[#eff6f8]">
            <p className="w-full text-center">Customizable content</p>
            <ul className="w-full flex justify-between px-36 py-5">
              <li>
                <img src={tack} alt="" />
              </li>
              <li>
                <img src={yellowcheck} alt="" />
              </li>
              <li>
                <img src={tack} alt="" />
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="w-full text-xl font-medium py-3">
            <p className="w-full text-center">AI-powered coding exercises</p>
            <ul className="w-full flex justify-between px-36 py-5">
              <li>
                <img src={tack} alt="" />
              </li>
              <li>
                <img src={yellowcheck} alt="" />
              </li>
              <li>
                <img src={tack} alt="" />
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="w-full text-xl font-medium py-3 bg-[#eff6f8]">
            <p className="w-full text-center">Analytics and adoption reports</p>
            <ul className="w-full flex justify-between px-36 py-5">
              <li>
                <img src={tackc} alt="" />
              </li>
              <li>
                <img src={yellowcross} alt="" />
              </li>
              <li>
                <img src={tack} alt="" />
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="w-full text-xl font-medium py-3">
            <p className="w-full text-center">24/7 customer support</p>
            <ul className="w-full flex justify-between px-36 py-5">
              <li>
                <img src={tackc} alt="" />
              </li>
              <li>
                <img src={yellowcross} alt="" />
              </li>
              <li>
                <img src={tack} alt="" />
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="w-full text-xl font-medium py-3 bg-[#eff6f8]">
            <p className="w-full text-center">Instructor Q&A</p>
            <ul className="w-full flex justify-between px-36 py-5">
              <li>
                <img src={tack} alt="" />
              </li>
              <li>
                <img src={yellowcheck} alt="" />
              </li>
              <li>
                <img src={tack} alt="" />
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="w-full text-xl font-medium py-3">
            <p className="w-full text-center">Skills assessments</p>
            <ul className="w-full flex justify-between px-36 py-5">
              <li>
                <img src={tackc} alt="" />
              </li>
              <li>
                <img src={yellowcheck} alt="" />
              </li>
              <li>
                <img src={tack} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* mini screen table end*/}
      {/* dropbox start */}
      <div className="">
        {/* dropbox heading */}
        <div className="w-full  bg-[#eff6f8] grid grid-cols-1 sm:grid-cols-2 justify-center items-center mt-20 pt-20">
          <div className="w-full ps-10 sm:ps-20 md:ps-44">
            <img src={carton} alt="" />
          </div>
          <div className="w-full  font-medium py-3 text-center pt-16 sm:pt-0">
            <p>Contact US</p>
            <h1 className="text-5xl px-10">
              Frequently asked <br /> questions
            </h1>
          </div>
        </div>
        {/* collaps box start */}
        <div className="w-full px-10 md:px-44 grid grid-cols-1 pt-10 bg-gray-100 rounded-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <svg
                    className="w-6 h-6 duration-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" d="M5 12h14" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 duration-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" d="M5 12h14m-7 7V5" />
                  </svg>
                )}
              </button>
              {openIndex === index && (
                <p className="pb-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        {/* collaps box end */}
      </div>
      {/* dropbox end */}
      <div className="w-full flex flex-col gap-5 justify-center items-center py-10">
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
            Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut
            nibh montes ante gravida velit. <br /> Facilisi posuere in sed
            mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel
            aliquet <br /> cursus placerat duis.
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
      <button onClick={gotohome}>gotohome</button>
    </>
  );
}

export default Pricing;
