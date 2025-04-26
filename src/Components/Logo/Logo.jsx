import Marquee from "react-fast-marquee";
import Logo1 from "../../assets/Home1/logo1.svg";
import Logo2 from "../../assets/Home1/logo2.svg";
import Logo3 from "../../assets/Home1/logo3.svg";
import Logo4 from "../../assets/Home1/logo4.svg";
import Logo5 from "../../assets/Home1/logo5.svg";
import Logo6 from "../../assets/Home1/logo6.svg";
function Logo() {
  return (
    <>
      {/* logo section start */}
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
      {/* logo section end */}
    </>
  );
}

export default Logo;
