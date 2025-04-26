import Logo from "../../assets/images/main-logo.svg";
import Cart from "../../assets/images/Cart.svg";
import earning from "../../assets/images/earning.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // collaps useState
  const [isCollapsed, setIsCollapsed] = useState(true);
  //   Home dropdown state
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  // cuorses dropdown state
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  // pages dropdown state
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  // blog dropdown state
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  // contact dropdown state
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  // cart dropdown state
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  // courses nested state for free
  const [isFreeDropdownOpen, setisFreeDropdownOpen] = useState(false);
  // courses nested state for paid
  const [isPaidDropdownOpen, setispaiddropdownopen] = useState(false);
  // courses nested dropdown function for paid
  let paidtimeoute;
  const paiddropdownover = () => {
    clearTimeout(paidtimeoute);
    setispaiddropdownopen(true);
  };
  const paiddropdownoute = () => {
    paidtimeoute = setTimeout(() => {
      setispaiddropdownopen(false);
    }, 2000);
  };
  // handle scroll function
  const [scrollPosition, setScrollPosition] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* navbar start */}
      <nav
        className={`${
          scrollPosition ? "bg-bgNavbar" : "bg-transparent"
        } p-[0px] w-full h-[60px] px-10 flex justify-between items-center text-white fixed top-0 left-0  z-50 duration-500`}
      >
        {/* logo start */}
        <div>
          <img src={Logo} alt="" />
        </div>
        {/* logo end */}
        {/* navbar menu start */}
        <ul className="items-center justify-between gap-8 hidden lg:flex ms-20">
          <li
            className="relative flex items-center justify-center gap-1 duration-500"
            onMouseOver={() => setIsHomeDropdownOpen(true)}
            onMouseOut={() => setIsHomeDropdownOpen(false)}
          >
            <span className="cursor-pointer mb-1"> Home</span>
            <svg
              className="w-4 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </li>
          <li
            className="relatie flex items-center justify-center gap-1"
            onMouseEnter={() => setIsCoursesDropdownOpen(true)}
            onMouseLeave={() => setIsCoursesDropdownOpen(false)}
          >
            <span className="cursor-pointer mb-1">Courses</span>
            <svg
              className="w-4 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
            <div className="relative mt-[60px] right-[400px]">
              {isCoursesDropdownOpen && (
                <div className="absolute flex flex-col items-start w-[980px] h-auto bg-white shadow-2xl border-b-4 rounded-lg border-yellow-500">
                  <div className="flex h-full w-full">
                    {/* courses dropdown content */}
                    {/* courses first section start*/}
                    <div className="h-auto w-[300px] bg-[#eff6f8] rounded-lg">
                      <div className="p-5 pt-8">
                        <h1 className="text-black">Free Courses</h1>
                        <p className="text-gray-400 pt-3">
                          Free learning resources <br /> for skill development.
                        </p>
                      </div>
                      <div className="w-auto h-auto mx-4 p-3 bg-white rounded-lg">
                        <h1 className="text-black">Paid Courses</h1>
                        <p className="text-gray-400 hover:text-yellow-500">
                          Courses are available upon purchase.(Requires login)
                        </p>
                      </div>
                    </div>
                    {/* courses first section end*/}

                    {/* courses secound section start */}

                    <div className="w-full h-auto">
                      <div className="h-auto w-full flex ms-5">
                        {/* courses secound section first part */}
                        <div className="h-auto w-full pt-10">
                          <h1 className="text-black">Finance</h1>
                          <p className="text-gray-400 mt-3 hover:text-yellow-500">
                            Understanding corporate finance <br /> and
                            investments
                          </p>
                        </div>

                        <div className="h-auto w-full pt-10">
                          <h1 className="text-black">DESIGN</h1>
                          <p className="text-gray-400 mt-3 hover:text-yellow-500">
                            Advanced photoshop techniques <br /> for designers
                          </p>
                        </div>
                      </div>
                      {/* courses secound section secound part */}
                      <div className="h-auto w-full flex ms-5">
                        {/* courses secound section first part */}
                        <div className="h-auto w-full pt-10">
                          <h1 className="text-black">MANAGEMENT</h1>
                          <p className="text-gray-400 mt-3 hover:text-yellow-500">
                            Crisis management and <br /> problem-solving
                            strategies
                          </p>
                        </div>

                        <div className="h-auto w-full pt-10">
                          <h1 className="text-black">DEVELOPMENT</h1>
                          <p className="text-gray-400 mt-3 hover:text-yellow-500">
                            Building single page applications <br /> with
                            angular
                          </p>
                        </div>
                      </div>
                      {/* courses third section start */}
                      <div className=" flex h-[100px]  rounded-lg w-[600px] text-gray-500 m-10 bg-[#eff6f8] items-center justify-center">
                        <div>
                          <img src={earning} alt="" />
                        </div>
                        <div className="ms-10 w-full text-start">
                          <h1 className="text-black">
                            Increase your potential earnings
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet scelerisque integer
                            adipiscing velit sem sed.
                          </p>
                        </div>
                        <div className=" text-black bg-yellow-500 rounded-sm m-8">
                          <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* courses third section end */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li
            className="relative flex items-center justify-center gap-1"
            onMouseOver={() => setIsPagesDropdownOpen(true)}
            onMouseOut={() => setIsPagesDropdownOpen(false)}
          >
            <span className="mb-1 cursor-pointer"> Pages</span>
            <svg
              className="w-4 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
            <div className="relative mt-[55px] cursor-pointer">
              {isPagesDropdownOpen && (
                <ul className="w-40 h-auto text-start  absolute  -right-14 text-black flex flex-col justify-center items-center gap-3 border-b-4 rounded-lg border-yellow-500 bg-white">
                  <li
                    className="hover:text-yellow-500"
                    onClick={() => setIsPagesDropdownOpen(false)}
                  >
                    <NavLink
                      to="/aboutone"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : ""
                      }
                    >
                      Aboute One
                    </NavLink>
                  </li>

                  <NavLink
                    to="/coursesone"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-500" : ""
                    }
                  >
                    <li
                      className="hover:text-yellow-500"
                      onClick={() => setIsPagesDropdownOpen(false)}
                    >
                      Courses One
                    </li>
                  </NavLink>

                  <NavLink
                    to="/FAQ"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-500" : ""
                    }
                  >
                    <li
                      className="hover:text-yellow-500"
                      onClick={() => setIsPagesDropdownOpen(false)}
                    >
                      FAQ
                    </li>
                  </NavLink>
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-500" : ""
                    }
                  >
                    <li
                      className="hover:text-yellow-500"
                      onClick={() => setIsPagesDropdownOpen(false)}
                    >
                      Pricing One
                    </li>
                  </NavLink>

                  <NavLink
                    to="/career"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-500" : ""
                    }
                  >
                    <li
                      className="hover:text-yellow-500"
                      onClick={() => setIsPagesDropdownOpen(false)}
                    >
                      Career
                    </li>
                  </NavLink>
                  <NavLink
                    to="/Event"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-500" : ""
                    }
                  >
                    <li
                      className="hover:text-yellow-500"
                      onClick={() => setIsPagesDropdownOpen(false)}
                    >
                      Events
                    </li>
                  </NavLink>
                  <NavLink
                    to="/Team"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-500" : ""
                    }
                  >
                    <li
                      className="hover:text-yellow-500"
                      onClick={() => setIsPagesDropdownOpen(false)}
                    >
                      Team
                    </li>
                  </NavLink>
                </ul>
              )}
            </div>
          </li>
          <li
            className="relative flex items-center justify-center gap-1"
            onMouseOver={() => setIsBlogDropdownOpen(true)}
            onMouseOut={() => setIsBlogDropdownOpen(false)}
          >
            <span className="mb-1 cursor-pointer"> Blogs</span>
            <svg
              className="w-4 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
            <div className="relative mt-[55px] cursor-pointer">
              {isBlogDropdownOpen && (
                <ul className="w-40 h-24  absolute -right-20 text-black flex flex-col justify-center items-center gap-1 bg-white border-b-4 rounded-lg border-yellow-500">
                  <li className="text-yellow-500">Blog One</li>
                  <li className="hover:text-yellow-500">Blog Two</li>
                  <li className="hover:text-yellow-500">Blog Three</li>
                </ul>
              )}
            </div>
          </li>
          <li
            className="relative flex items-center justify-center gap-1"
            onMouseOver={() => setIsContactDropdownOpen(true)}
            onMouseOut={() => setIsContactDropdownOpen(false)}
          >
            <span className="mb-1 cursor-pointer"> Contact</span>
            <svg
              className="w-4 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
            <div className="relative mt-[55px] cursor-pointer">
              {isContactDropdownOpen && (
                <ul className="w-40 h-24  absolute -right-14 text-black flex flex-col justify-center bg-white items-center gap-1 border-b-4 rounded-lg border-yellow-500">
                  <li className="text-yellow-500">Contact One</li>
                  <li className="hover:text-yellow-500">Contact Two</li>
                  <li className="hover:text-yellow-500">Contact Three</li>
                </ul>
              )}
            </div>
          </li>
        </ul>
        {/* navbar menu end */}
        {/* navbar btn start */}
        <div className="flex items-center gap-4 ">
          {/* cart div start */}
          <div
            className="relative me-8 cursor-pointer"
            onClick={() => setIsCartDropdownOpen(true)}
          >
            {" "}
            <img src={Cart} alt="" />
            <div className="w-[17px] h-[17px] bg-orange-300 flex items-center justify-center rounded-full absolute top-0 -right-2">
              0
            </div>
          </div>
          {isCartDropdownOpen && (
            <div className="w-full h-screen absolute top-0 right-0 bg-black bg-opacity-70 flex justify-end">
              <div className="bg-white w-[40%] h-full bg-opacity-100">
                <div className="w-full border-b-[1px] h-[65px] text-black border-black flex justify-between items-center">
                  <h1 className="text-2xl font-bold ms-5">Your Cart</h1>
                  {/* cart dev close button */}
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsCartDropdownOpen(false)}
                  >
                    <svg
                      className="w-[24px] h-[24px] me-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="h-full w-full flex justify-center items-center">
                  <p className="text-gray-500"> No items found</p>
                </div>
              </div>
            </div>
          )}

          {/* cart div end */}
          {/* login/register start */}
          <div className="flex items-center gap-4">
            <a href="#">Login</a>
            <span>|</span>
            <a href="#">Register</a>
            {/* start collaps button */}
            <div
              className=" lg:hidden flex flex-col gap-2 cursor-pointer"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <div
                className={`w-7 border-[1px] border-white  duration-500 ${
                  isCollapsed ? "" : "-rotate-45 translate-y-[5px]"
                }`}
              ></div>
              <div
                className={`w-7 border-[1px] border-white duration-500 ${
                  isCollapsed ? "" : "rotate-45 -translate-y-[5px]"
                }`}
              ></div>
            </div>
            {/* end collaps button */}
          </div>
          {/* login/register end */}
        </div>
        {/* navbar btn end */}
        {/* mobile menu start */}
        <div
          className={`absolute lg:hidden top-14 left-0 w-full h-screen duration-300 bg-white ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <ul className="flex flex-col gap-4 p-4 text-black">
            <li
              onMouseEnter={() => setIsHomeDropdownOpen(true)}
              onMouseLeave={() => setIsHomeDropdownOpen(false)}
            >
              <span className="flex justify-between">
                Home
                <svg
                  className="w-4 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>
              {isHomeDropdownOpen && (
                <ul className="h-24 w-full text-black flex flex-col justify-center ps-10 text-lg gap-1 border-t-[1px] bg-white border-b-[1px] rounded-lg border-b-yellow-500">
                  <li className="text-yellow-500">Home One</li>
                  <li className="hover:text-yellow-500">Home Two</li>
                  <li className="hover:text-yellow-500">Home Three</li>
                </ul>
              )}
            </li>
            <li
              onMouseOver={() => setIsCoursesDropdownOpen(true)}
              onMouseOut={() => setIsCoursesDropdownOpen(false)}
            >
              <span className="flex justify-between">
                Courses
                <svg
                  className="w-4 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>
              {isCoursesDropdownOpen && (
                <ul className="flex flex-col gap-2  w-full h-auto   mt-5 border-t-[1px] bg-white border-b-[1px] rounded-lg border-b-yellow-500 ">
                  <li
                    onMouseOver={() => setisFreeDropdownOpen(true)}
                    onMouseOut={() => setisFreeDropdownOpen(false)}
                  >
                    <span className="flex justify-between cursor-pointer">
                      Free
                      <svg
                        className="w-[18px] h-[18px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </span>
                    <div className="relative mt-[5px] cursor-pointer">
                      {isFreeDropdownOpen && (
                        <ul className="flex flex-col gap-1 ps-10 w-full h-28 p-0 border-[1px] bg-white">
                          <li>Corporate Finance And Investments</li>
                          <li>Advanced Photoshop Techniques</li>
                          <li>Crisis Management</li>
                          <li>Single Page Applications </li>
                        </ul>
                      )}
                    </div>
                  </li>
                  <li
                    onMouseOver={paiddropdownover}
                    onMouseOut={paiddropdownoute}
                  >
                    <span className="flex justify-between">
                      Paid
                      <svg
                        className="w-[18px] h-[18px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </span>
                    {isPaidDropdownOpen && (
                      <ul className="flex flex-col gap-1 ps-10 w-full h-44 mt-5 p-0 border-[1px] bg-white">
                        <li>Corporate Finance And Investments</li>
                        <li>Advanced Photoshop Techniques</li>
                        <li>Crisis Management</li>
                        <li>Single Page Applications </li>
                        <li>Corporate Finance And Investments</li>
                        <li>Advanced Photoshop Techniques</li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative flex items-center justify-start gap-1"
              onMouseOver={() => setIsPagesDropdownOpen(true)}
              onMouseOut={() => setIsPagesDropdownOpen(false)}
            >
              <span className="mb-1 cursor-pointer flex justify-between w-full">
                {" "}
                Pages
                <svg
                  className="w-4 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>

              <div className="relative mt-[55px] cursor-pointer">
                {isPagesDropdownOpen && (
                  <ul className="w-40 h-auto text-start absolute  right-80 top-0 text-black flex flex-col justify-center items-center gap-3 border-b-4 rounded-lg border-yellow-500 bg-white">
                    <li
                      className="hover:text-yellow-500"
                      onClick={() => setIsPagesDropdownOpen(false)}
                    >
                      <NavLink
                        to="/aboutone"
                        className={({ isActive }) =>
                          isActive ? "text-yellow-500" : ""
                        }
                      >
                        Aboute One
                      </NavLink>
                    </li>

                    <NavLink
                      to="/coursesone"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : ""
                      }
                    >
                      <li
                        className="hover:text-yellow-500"
                        onClick={() => setIsPagesDropdownOpen(false)}
                      >
                        Courses One
                      </li>
                    </NavLink>

                    <NavLink
                      to="/FAQ"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : ""
                      }
                    >
                      <li
                        className="hover:text-yellow-500"
                        onClick={() => setIsPagesDropdownOpen(false)}
                      >
                        FAQ
                      </li>
                    </NavLink>
                    <NavLink
                      to="/pricing"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : ""
                      }
                    >
                      <li
                        className="hover:text-yellow-500"
                        onClick={() => setIsPagesDropdownOpen(false)}
                      >
                        Pricing One
                      </li>
                    </NavLink>

                    <NavLink
                      to="/career"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : ""
                      }
                    >
                      <li
                        className="hover:text-yellow-500"
                        onClick={() => setIsPagesDropdownOpen(false)}
                      >
                        Career
                      </li>
                    </NavLink>
                    <NavLink
                      to="/Event"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : ""
                      }
                    >
                      <li
                        className="hover:text-yellow-500"
                        onClick={() => setIsPagesDropdownOpen(false)}
                      >
                        Events
                      </li>
                    </NavLink>
                    <NavLink
                      to="/Team"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500" : ""
                      }
                    >
                      <li
                        className="hover:text-yellow-500"
                        onClick={() => setIsPagesDropdownOpen(false)}
                      >
                        Team
                      </li>
                    </NavLink>
                  </ul>
                )}
              </div>
            </li>
            <li className="flex gap-1 justify-between">
              Blog
              <svg
                className="w-4 h-5 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </li>
            <li className="flex gap-1 justify-between">
              Contact
              <svg
                className="w-4 h-5 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </li>
          </ul>
        </div>
        {/* mobile menu end*/}
      </nav>
    </>
  );
}

export default Navbar;
