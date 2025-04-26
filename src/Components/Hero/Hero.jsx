import heroGirl from "../../assets/Home1/hero-girl.webp";
import heroStudent from "../../assets/Home1/hero-student.avif";
import heroChat from "../../assets/Home1/hero-chat.webp";
import PrimaryCircle from "../../assets/Home1/primary-circle.svg";
import orangeBall from "../../assets/Home1/orange-ball.svg";

function Hero() {
  return (
    <>
      {/* hero section start */}
      <section className="flex flex-col-reverse z-0 lg:flex-row items-center lg:justify-between h-auto w-full pt-40 gap-20 bg-bgNavbar bg-bghero bg-cover bg-center   pb-20">
        {/* hero section images start */}
        <div className="w-full h-full relative lg:w-[700px] flex justify-center lg:justify-start">
          <img src={heroGirl} />
          <div className="absolute bottom-4 right-10 w-48 sm:w-60 duration-500">
            <img src={heroStudent} alt="" className="w-full h-full" />
          </div>
          <div className="absolute left-5 bottom-40 w-48 sm:w-60 duration-500">
            <img src={heroChat} alt="" className="w-full h-full" />
          </div>
          <div className="absolute top-28 left-16">
            <img src={PrimaryCircle} alt="" />
          </div>
          <div className="absolute top-52 left-20 w-3 h-3">
            <img src={orangeBall} alt="" className="h-full w-full" />
          </div>
          <div className="absolute bottom-52 right-0">
            <img src={orangeBall} alt="" className="h-full w-full" />
          </div>
        </div>
        {/* hero section images end */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 h-full text-white mt-10">
          <p className="text-lg font-bold">ONLINE LEARNING</p>
          <h1 className="text-4xl sm:text-6xl font-semibold mt-6">
            More then
            <span className="ms-2 text-yellow-500">25000+</span> education
            courses online
          </h1>
          <p className="text-lg mt-12 font-bold">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </p>
          <button className="w-52 bg-bgNavbar px-10 py-3 mt-20 rounded-md border-[0.5px] border-white text-lg font-bold">
            Get Started
          </button>
        </div>
      </section>

      {/* hero section end */}
    </>
  );
}

export default Hero;
