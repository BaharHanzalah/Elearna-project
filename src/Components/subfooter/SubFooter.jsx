function SubFooter() {
  return (
    <>
      <div className="w-full bg-subfooter bg-cover px-10 flex flex-col lg:flex-row justify-between items-center rounded-lg h-auto lg:h-72 pb-10 lg:pb-0 ">
        <h1 className="text-3xl font-medium">
          Are you ready to start your journey?
        </h1>
        <div className="flex gap-10 pt-10 lg:pt-0">
          <button className="bg-bgNavbar px-7 py-3 border-[1px] border-white bg-transparent text-white rounded-lg transform transition hover:scale-95 duration-500">
            Browse Courses
          </button>
          <button className="px-2 md:px-10 py-3 bg-yellow-500  rounded-lg  transform transition hover:scale-95 duration-500">
            Became A Teacher
          </button>
        </div>
      </div>
    </>
  );
}

export default SubFooter;
