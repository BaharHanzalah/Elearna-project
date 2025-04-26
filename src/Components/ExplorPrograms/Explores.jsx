import { ExploresData } from "./ExploresData";
import { subExplore } from "./ExploresData";
function Explores() {
  return (
    <>
      <div className="bg-[#eff6f8] w-full h-auto px-5 py-16 relative flex flex-col justify-center items-center">
        <div className="w-full px-5">
          <h1 className="uppercase font-sans font-medium">Trending courses</h1>
          <p className="font-sans font-medium text-4xl text-main-colo-1 mt-4 mb-12">
            Explore our top programs
          </p>
        </div>
        {/* cards start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto gap-10">
          {ExploresData.map((CardData) => (
            <div
              key={CardData.id}
              className=" w-full h-auto relative rounded-lg group"
            >
              <div
                className={`${
                  CardData.descrip ===
                    "Full-stack development with the MERN stack" ||
                  CardData.descrip === "Database integration with MongoDB"
                    ? "right-0 md:right-10"
                    : "left-0 md:left-10"
                } w-72 sm:w-80 bg-white h-auto absolute bottom-3 opacity-0 group-hover:opacity-100 duration-500 z-40 py-7 px-5 rounded-lg`}
              >
                <h1 className="text-lg font-sans font-bold">
                  {CardData.descrip}
                </h1>
                <ul className="flex gap-3 py-4 text-gray-500">
                  <li>{CardData.lia}</li>
                  <li>{CardData.lib}</li>
                </ul>
                <p className="pb-3 text-gray-500">{CardData.lic}</p>
                <ul>
                  {Object.values(CardData.listD).map((listdata, index) => (
                    <li key={index} className="flex text-gray-500">
                      {CardData.listicon}
                      {listdata}
                    </li>
                  ))}
                </ul>
                <div className="flex">
                  <button className="hidden group-hover:block w-full py-3  bg-yellow-500 mt-3 rounded-lg ">
                    {CardData.btn1}
                  </button>
                  <button
                    className={`${
                      CardData.paid === "Free" ? "hidden" : "block"
                    } bg-[#0f252a] w-full text-white py-3 mt-3 rounded-lg ms-5`}
                  >
                    {CardData.btn2}
                  </button>
                </div>
              </div>
              <div className="w-auto bg-white relative">
                <div className="group-hover:h-96 group-hover:z-0">
                  <img
                    src={CardData.img}
                    alt=""
                    className="group-hover:h-full bg-cover"
                  />
                </div>
                {/* card body */}
                <div className="py-10 px-5 text-start relative group-hover:absolute bottom-5 group-hover:z-20">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-center absolute text-white flex justify-center items-center right-3 bottom-64">
                    <p>{CardData.paid}</p>
                  </div>
                  <p className="text-gray-500 uppercase">{CardData.title}</p>
                  <h1 className="text-1xl font-sans font-bold py-3 group-hover:text-white">
                    {CardData.descrip}
                  </h1>
                  <span className="flex gap-2">
                    <img src={CardData.stars} alt="" />
                    <p>{CardData.starsText}</p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="text-center w-full py-14">
            <p className="text-lg">Why we are</p>
            <h1 className="py-3 text-4xl font-medium pt-5">
              Elevate your professional journey
            </h1>
            <p className="text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris <br /> mus. Vitae diam dolor lacus amet integer ut.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-10 pb-28">
            {subExplore.map((items, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 items-center justify-center text-center my-3 py-5"
              >
                <div>
                  <img src={items.img} alt="" />
                </div>
                <h1 className="mt-5 text-lg font-bold">{items.title}</h1>
                <p className="text-gray-500">{items.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Yellowfooter />
      </div>
    </>
  );
}
export function Yellowfooter() {
  return (
    <div className="w-[90%] bg-[#ffb606] px-10 mx-5 flex flex-col lg:flex-row justify-between items-center py-10 rounded-lg h-auto lg:h-48 absolute -bottom-20">
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
  );
}
export default Explores;
