import team1 from "../../../assets/Home1/team-1.webp";
import team2 from "../../../assets/Home1/team-2.webp";
import team3 from "../../../assets/Home1/team-3.webp";
import team4 from "../../../assets/Home1/team-4.webp";
import team5 from "../../../assets/Home1/team-5.webp";
import team6 from "../../../assets/Home1/team-6.webp";
import team7 from "../../../assets/Home1/team-7.webp";
import team8 from "../../../assets/Home1/team-8.webp";
import SubFooter from "../../subfooter/SubFooter";

const data = [
  {
    id: 1,
    name: "Leslie Upton",
    image: team1,
    position: "instructor",
  },
  {
    id: 2,
    name: "Darnell Kuphal",
    image: team2,
    position: "instructor",
  },
  {
    id: 3,
    name: "Steven Roob",
    image: team3,
    position: "instructor",
  },
  {
    id: 4,
    name: "Wanda Abshire",
    image: team4,
    position: "instructor",
  },
  {
    id: 5,
    name: "Lee Schmitt",
    image: team5,
    position: "instructor",
  },
  {
    id: 6,
    name: "Jasmine Konopelski",
    image: team6,
    position: "instructor",
  },
  {
    id: 7,
    name: "Tonya Flatley",
    image: team7,
    position: "instructor",
  },
  {
    id: 8,
    name: "Colin Fay",
    image: team8,
    position: "instructor",
  },
];

function Team() {
  return (
    <>
      {/* team page hero section start */}
      <div className="w-full h-[550px] bg-teambg bg-center bg-cover">
        <div className="w-full h-full flex flex-col justify-center items-center bg-black/70">
          <h1 className="text-6xl font-medium pt-24 text-white">Our experts</h1>
        </div>
      </div>
      {/* team page hero section end */}
      {/* team cards section start */}
      <div className="w-full">
        {/* cards heading start */}
        <div className="w-full flex flex-col items-center justify-center pt-16 text-center">
          <p className="text-lg font-medium">Contact Us</p>
          <h1 className="text-5xl font-medium py-5">
            Know our expert team agents, <br /> they solve your questions
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id
          </p>
        </div>
        {/* cards heading end */}
        {/* cards start   */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 py-14">
          {data.map((team) => (
            <div key={team.id} className="">
              <div className="w-full h-[300px] sm:h-[370px] bg-[#e6ebeb] px-5  overflow-hidden rounded-t-md cursor-pointer">
                <div className="h-10"></div>
                <div>
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover transform transition hover:scale-110 duration-500"
                  />
                </div>
              </div>
              <div className="w-full py-3 text-center">
                <h1 className="text-lg font-bold">{team.name}</h1>
                <p className="text-gray-500">{team.position}</p>
              </div>
            </div>
          ))}
        </div>
        {/* cards end  */}
      </div>
      {/* team cards section end */}
      <SubFooter />
    </>
  );
}

export default Team;
