import { Link } from "react-router";
import Leftnav from "../components/Leftnav";
import Rapper from "../components/Rapper";

function Studentslist() {
  return (
    <Rapper>
      <main className="w-full min-h-screen bg-[#46516166] flex px-4">
        <Leftnav />
        <div className="flex-1 p-2 border bg-amber-50 border-slate-400">
          <div className="flex h-16 justify-between items-end px-4 border-b border-slate-400 pb-1">
            <h1 className="text-3xl font-bold text-slate-500 underline underline-offset-2">
              Students data
            </h1>
            <div className="">
              <Link to={"register"}>
                <button className="px-3 py-2 rounded-sm bg-blue-500 text-white font-semibold cursor-pointer">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-1 mt-8">
            <div className="w-full px-2 pt-3 even:bg-slate-200 odd:bg-stone-300 flex items-end">
              <p className="flex-1 font-semibold text-slate-600">Name</p>
              <p className="flex-1 font-semibold text-slate-600">Department</p>
              <p className="flex-1 font-semibold text-slate-600">Gender</p>
              <p className="flex-1 font-semibold text-slate-600">Age</p>
              <p className="flex-1 font-semibold text-slate-600"></p>
            </div>
            {[1, 2, 3, 4, 5, 6].map((Item) => (
              <div
                key={Item}
                className="px-2 w-full pt-3 even:bg-slate-200 odd:bg-stone-300 flex items-end"
              >
                <p className="flex-1 text-slate-500">Name</p>
                <p className="flex-1 text-slate-500">Department</p>
                <p className="flex-1 text-slate-500">Male</p>
                <p className="flex-1 text-slate-500">18</p>
                <div className="flex-1 flex gap-1 pb-1">
                  <button className="flex-1 border hover:bg-[#6ec76e] hover:text-white transition-all duration-300 font-semibold text-sm py-1 cursor-pointer border-[#fff] rounded-sm text-slate-500">
                    Edit
                  </button>
                  <button className="flex-1 border hover:bg-[#d47474] hover:text-white transition-all duration-300 font-semibold text-sm py-1 cursor-pointer border-[#fff] rounded-sm text-slate-500">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Rapper>
  );
}

export default Studentslist;
