import { useState } from "react";
import student1 from "../../assets/Home1/student-1.avif";
import student2 from "../../assets/Home1/student-2.avif";
function Students() {
  const [students, setStudents] = useState(false);
  function handleStudents() {
    setStudents((prev) => !prev);
  }

  return (
    <>
      <div className="w-full h-auto bg-bghero bg-bgNavbar text-white px-5">
        {/* student section title start */}
        <div className="w-full py-10">
          <p className="font-semibold">Our testimonials</p>
          <h1 className="text-5xl font-semibold">Trusted by our</h1>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between">
          <div>
            <h1 className="text-5xl font-semibold">successful students</h1>
          </div>
          <div className="flex gap-10 lg:justify-between mt-10 lg:mt-0">
            <div className="flex gap-5">
              <h1 className="text-5xl font-semibold">70M</h1>
              <div className="h-full w-[1px] bg-white"></div>
              <p className="text-gray-400 ">
                Successful <br className="hidden lg:block" /> students
              </p>
            </div>
            <div className="flex gap-5">
              <h1 className="text-5xl font-semibold">25k</h1>
              <div className="h-full w-[1px] bg-white"></div>
              <p className="text-gray-400">
                Global job <br className="hidden lg:block" /> placements
              </p>
            </div>
          </div>
        </div>
        {/* student section title end */}
        {/* student section body start */}
        <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-2 py-16">
          {/* student section image start */}
          <div className="px-3">
            <img
              src={student2}
              alt=""
              className={`${
                students ? "block" : "hidden"
              } w-auto rounded-lg h-full`}
            />
            <img
              src={student1}
              alt=""
              className={`${
                students ? "hidden" : "block"
              } w-auto rounded-lg h-full`}
            />
          </div>
          {/* student section image end */}
          {/* student section body text start */}
          <div className="flex flex-col gap-8 justify-center">
            <p
              className={`${
                students ? "block" : "hidden"
              } text-gray-400 text-2xl`}
            >
              “Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
              tempus facilisis scelerisque vitae consectetur vitae. Amet
              faucibus venenatis donec mattis. Morbi placerat eleifend malesuada
              sed semper quis.”
            </p>
            <p
              className={`${
                students ? "hidden" : "block"
              } text-gray-400 text-2xl`}
            >
              “Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh
              felis tempor vel aliquet cursus placerat duis. Est felis pulvinar
              tortor ut nibh montes ante gravida velit. Facilisi posuere in sed
              mattis blandit duis aliquet.”
            </p>
            <div>
              <h1
                className={`${
                  students ? "block" : "hidden"
                } text-white text-3xl font-bold`}
              >
                Linda Grady
              </h1>
              <h1
                className={`${
                  students ? "hidden" : "block"
                } text-white text-3xl font-bold`}
              >
                Jim Adams
              </h1>
              <p className="text-gray-400 mt-3">Co-assistant manager</p>
            </div>
            {/* btn div */}
            <div className="flex gap-2">
              <svg
                className="w-10 h-10 text-gray-800 dark:text-white rounded-full border-[1px] cursor-pointer border-gray-400 hover:border-white "
                onClick={handleStudents}
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
                className="w-10 h-10 text-gray-800 dark:text-white rounded-full border-[1px] cursor-pointer border-gray-400 hover:border-white"
                onClick={handleStudents}
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
          {/* student section body text end*/}
        </div>
        {/* student section body end */}
      </div>
    </>
  );
}

export default Students;
