function CourseCard() {
  return (
    <div className="p-2  h-64 w-[50%] sm:w-56 opacity-80 hover:opacity-100 transition-all duration-300 border border-slate-300 m-4 rounded-md">
      <div className="h-[50%] w-full bg-red-300">
        <img src="" alt="" />
      </div>
      <div className="h-[50%] w-full">
        <div className="flex flex-col py-2 space-y-2">
          <div className="flex justify-between p-2">
            <p className="text-slate-400 text-sm">$156.00</p>
            <p className="text-slate-400 text-sm">$156.00</p>
            <p className="text-slate-400 text-sm">$156.00</p>
          </div>
          <h1 className="text-slate-500 font-bold text-sm">
            JavaScript Simplifeid course
          </h1>
          <button
            className={`py-2 px-3 text-white rounded-md transition duration-300 cursor-pointer text-sm font-semibold bg-sky-600/80`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
