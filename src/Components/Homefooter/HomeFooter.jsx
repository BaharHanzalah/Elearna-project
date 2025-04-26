import FooterLogo from "../../assets/images/main-logo.svg";
function HomeFooter() {
  return (
    <>
      <div className="w-full h-auto bg-bgNavbar bg-bgfooter bg-cover flex gap-10 pt-44 justify-between px-10 text-start flex-wrap">
        {/* logo div */}
        <div>
          <img src={FooterLogo} alt="Logo" />
          <p className="text-gray-500 pt-5 ">
            Lorem ipsum dolor sit amet <br /> consectetur. Posuere vitae lacus{" "}
            <br /> quis eget amet ut tristique cras.
          </p>
        </div>
        {/* text first div start*/}
        <div>
          <h1 className="text-lg font-bold text-white">Quick links</h1>
          <ul className="text-gray-500 flex flex-col gap-5">
            <li className="hover:text-yellow-500">Home</li>
            <li className="hover:text-yellow-500">Events</li>
            <li className="hover:text-yellow-500">Career</li>
            <li className="hover:text-yellow-500">Instructor</li>
          </ul>
        </div>
        {/* text secound div start */}

        <div>
          <h1 className="text-lg font-bold text-white">Popular courses</h1>
          <ul className="text-gray-500 flex flex-col gap-5">
            <li className="hover:text-yellow-500">Finance</li>
            <li className="hover:text-yellow-500">Management</li>
            <li className="hover:text-yellow-500">Design</li>
            <li className="hover:text-yellow-500">Web development</li>
          </ul>
        </div>
        {/* text third div start */}
        <div>
          <h1 className="text-lg font-bold text-white">Company</h1>
          <ul className="text-gray-500 flex flex-col gap-5">
            <li className="hover:text-yellow-500">About</li>
            <li className="hover:text-yellow-500">Courses</li>
            <li className="hover:text-yellow-500">Blog</li>
            <li className="hover:text-yellow-500">Contact</li>
            <li className="hover:text-yellow-500">License</li>
            <li className="hover:text-yellow-500">Pricing</li>
            <li className="hover:text-yellow-500">404</li>
          </ul>
        </div>
        {/* fourth div start */}
        <div>
          <h1 className="text-lg font-bold text-white">CMS</h1>
          <ul className="text-gray-500 flex flex-col gap-5">
            <li className="hover:text-yellow-500">Course details</li>
            <li className="hover:text-yellow-500">Instructor details</li>
            <li className="hover:text-yellow-500">Blog details</li>
          </ul>
        </div>
        <div className="w-full bg-white h-[1px]"></div>
        <div className="w-full flex justify-between items-center pb-6">
          <p className="text-gray-500">
            Design by <span className="text-white">BH Coder</span>
          </p>
          <p className="text-gray-500">
            Powered By <span className="text-white">Upskill</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeFooter;
