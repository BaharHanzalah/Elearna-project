import Marquee from "react-fast-marquee";
import event1 from "../../../../assets/Home1/event-1.webp";
import event2 from "../../../../assets/Home1/event-2.webp";
import event3 from "../../../../assets/Home1/event-3.webp";
import event4 from "../../../../assets/Home1/event-4.webp";
import event5 from "../../../../assets/Home1/event-5.webp";
import event6 from "../../../../assets/Home1/event-6.webp";
const data = [
  {
    id: 1,
    img: event1,
    dot: "•",
    title: "See event Details",
    city: "NEW YORK, USA • 9:00 AM - 7:PM",
    text: "Leadership strategies for higher education institutions",
    day: 4,
    monthandyear: "OCT 2024",
  },
  {
    id: 2,
    img: event2,
    dot: "•",
    title: "See event Details",
    city: "KANSAS CITY, USA • 10:00 AM - 3:00 PM",
    text: "Professional development for online educators and trainers",
    day: 18,
    monthandyear: "OCT 2024",
  },
  {
    id: 3,
    img: event3,
    dot: "•",
    title: "See event Details",
    city: "DETROIT, USA • 10:00 AM - 5:00 PM",
    text: "Navigating the future of online education platforms",
    day: 20,
    monthandyear: "OCT 2024",
  },
  {
    id: 4,
    img: event4,
    dot: "•",
    title: "See event Details",
    city: "CHICAGO, USA • 9:00 AM - 7:00 PM",
    text: "Best practices for virtual classroom management",
    day: 25,
    monthandyear: "OCT 2024",
  },
  {
    id: 5,
    img: event5,
    dot: "•",
    title: "See event Details",
    city: "AUSTIN, USA • 10:00 AM - 5:00 PM",
    text: "The impact of emotional intelligence on student success",
    day: 6,
    monthandyear: "OCT 2024",
  },
  {
    id: 6,
    img: event6,
    dot: "•",
    title: "See event Details",
    city: "PHOENIX, USA • 9:00 AM - 3:00 PM",
    text: "Innovative teaching strategies for modern classrooms",
    day: 22,
    monthandyear: "OCT 2024",
  },
];
function Event() {
  return (
    <>
      {/* event hero section start */}
      <div className="bg-Eventbg bg-center bg-cover w-full h-[580px] text-white">
        <div className="w-full h-full bg-black opacity-70">
          <div className="flex flex-col justify-center w-full h-full ps-5">
            <p className="text-2xl font-medium">Enjoy with</p>
            <h1 className="text-6xl font-bold pt-5">
              Great upcoming events <br /> for our institute
            </h1>
          </div>
        </div>
      </div>
      {/* event hero section end */}
      {/* online events start */}
      <div className="w-full">
        {/* online events title start */}
        <div className="w-full text-center py-20">
          <p className="text-lg ">Our event</p>
          <h1 className="text-5xl py-5 font-medium">
            Professional online events
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu
            scelerisque urna <br /> a porttitor. Massa nec ipsum sed etiam et
            facilisis bibendum.
          </p>
        </div>
        {/* online events title end */}
        {/* online events cards start */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 pb-24">
          {/* online events cards item start */}
          {data.map((items) => (
            <div
              key={items.id}
              className="h-auto relative group cursor-pointer"
            >
              <img src={items.img} alt="" className="object-cover rounded-md" />
              <div className="absolute w-full overflow-hidden h-40 lg:h-0 group-hover:h-40 bottom-0 left-0 bg-white  duration-500">
                <div className="w-full bg-yellow-500 lg:hidden lg:group-hover:block">
                  <Marquee>
                    <div className="flex font-bold py-2">
                      <p className="px-5">{items.dot}</p>
                      <p>{items.title}</p>
                      <p className="px-5">{items.dot}</p>
                      <p>{items.title}</p>
                    </div>
                  </Marquee>
                </div>
                <div className="w-full p-5 text-center">
                  <p className="text-gray-500 text-sm">{items.city}</p>
                  <h1 className="text-xl font-medium">{items.text}</h1>
                </div>
              </div>
              <div className="absolute top-0 right-0 bg-white w-28 lg:w-0 h-14 group-hover:w-28 duration-500 rounded-bl-md overflow-hidden">
                <div className="text-center flex px-4">
                  <p className="text-4xl font-medium">{items.day}</p>
                  <p className="text-sm text-gray-500">{items.monthandyear}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* online events cards end */}
        {/* courses yellow section start */}
        <div className="w-full flex justify-center items-center relative pt-20">
          <div className="w-[90%] bg-[#ffb606] px-10 mx-5 flex flex-col lg:flex-row justify-between items-center py-10 rounded-lg h-auto lg:h-48 absolute">
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
        </div>
      </div>
      {/* online events end */}
    </>
  );
}

export default Event;
