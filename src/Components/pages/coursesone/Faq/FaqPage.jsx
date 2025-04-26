import { useState } from "react";
import SubFooter from "../../../subfooter/SubFooter";
const menuItems = [
  {
    title: "Enrollment and registration",
    icon: {
      path: "M19 12H5m14 0-4 4m4-4-4-4",
      width: 24,
      height: 24,
    },
  },
  {
    title: "Technical requirements",
    icon: {
      path: "M19 12H5m14 0-4 4m4-4-4-4",
      width: 24,
      height: 24,
    },
  },
  {
    title: "Assessments and grading",
    icon: {
      path: "M19 12H5m14 0-4 4m4-4-4-4",
      width: 24,
      height: 24,
    },
  },
  {
    title: "Communication and support",
    icon: {
      path: "M19 12H5m14 0-4 4m4-4-4-4",
      width: 24,
      height: 24,
    },
  },
  {
    title: "Certificates and degrees",
    icon: {
      path: "M19 12H5m14 0-4 4m4-4-4-4",
      width: 24,
      height: 24,
    },
  },
];

const uldata = [
  {
    question: "How do I enroll in an online course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "What are the benefits of online learning?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Are there any prerequisites for enrolling in online courses?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
];
const uldata2 = [
  {
    question: "What kind of internet connection do I need?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Can I use the learning website offline?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "How do I enable or disable cookies in my browser?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Does the learning website support multiple languages?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Can I use a VPN to access the learning website?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
];

function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showQuetion, setshowQuetion] = useState(0);
  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      {/* faq page hero section start*/}
      <div className="w-full h-screen bg-Faqbg bg-center bg-cover">
        <div className="w-full h-full bg-black opacity-70 text-white gap-5 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">Frequently asked questions</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id
          </p>
        </div>
      </div>
      {/* faq page hero section end*/}
      {/* faq page table section start */}
      <div className="w-full bg-white flex flex-col lg:flex-row gap-10 md:grid-cols-2 py-20 px-10">
        <div className="w-full lg:w-[500px] h-auto bg-[#eff6f8] ">
          <ul className="py-2 text-gray-500 text-lg font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  showQuetion === index ? "bg-bgNavbar text-white" : ""
                } flex justify-between py-5 px-5 cursor-pointer`}
                onClick={() => setshowQuetion(index)}
              >
                {item.title}
                <svg
                  className="w-8 h-8 text-gray-500 cursor-pointer border-gray-40"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={item.icon.width}
                  height={item.icon.height}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path stroke="currentColor" d={item.icon.path} />
                </svg>
              </li>
            ))}
          </ul>
        </div>
        {/* table section first table end */}
        <div className="w-full px-10">
          {showQuetion === 0 && (
            <ul className=" py-5  text-lg font-medium">
              {uldata.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col border-b-[1px] py-5 cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex justify-between">
                    <p>{item.question}</p>
                    <span>
                      {activeIndex === index ? (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="currentColor" d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="currentColor" d="M5 12h14m-7 7V5" />
                        </svg>
                      )}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <p className="mt-4 duration-500 text-black">
                      {item.answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
          {/*  */}
          {showQuetion === 1 && (
            <ul className=" text-lg  font-medium">
              {uldata2.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col border-b-[1px] py-5 cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex justify-between items-center">
                    <p>{item.question}</p>
                    <span>
                      {activeIndex === index ? (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="currentColor" d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path stroke="currentColor" d="M5 12h14m-7 7V5" />
                        </svg>
                      )}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <p className="mt-4 text-black">{item.answer}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* faq page table section end */}
      <SubFooter />
    </>
  );
}

export default FaqPage;
