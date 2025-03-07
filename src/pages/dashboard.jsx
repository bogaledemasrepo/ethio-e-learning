import Annualanalysis from "../components/Annualanalysis";
import CourseCard from "../components/CourseCard";
import Leftnav from "../components/Leftnav";
import Rapper from "../components/Rapper";

function Dashboard() {
  return (
    <Rapper>
      <main className="w-full min-h-screen bg-[#46516166] flex px-4">
        <Leftnav />
        <div className="flex-1 p-2 border bg-amber-50 border-slate-400">
          <div className="flex h-16 justify-between items-end px-4 border-b border-slate-400 pb-1">
            <h1 className="text-3xl font-bold text-slate-500 underline underline-offset-2">
              Dashboard
            </h1>
            <div className="relative"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-500 text-xl px-4 mt-4 font-semibold">
              Top rated courses
            </h1>
            <div className="flex gap-2">
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
          <Annualanalysis />
        </div>
      </main>
    </Rapper>
  );
}

export default Dashboard;
