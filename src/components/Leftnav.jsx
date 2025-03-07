import MenuIcon from "../components/MenuIcon";
import CloseIcon from "../components/CloseIcon";
import { useState } from "react";
import { Link } from "react-router";

function Leftnav() {
  const [leftNavShrinked, setLeftNavShrinked] = useState(true);
  return (
    <nav
      className={`${
        leftNavShrinked ? "w-[48px]" : "w-[240px]"
      } bg-slate-300 transition-all duration-300 relative`}
    >
      <button
        className="relative p-2 border border-slate-200 hover:bg-slate-200/80 rounded-sm"
        onClick={() => setLeftNavShrinked(!leftNavShrinked)}
      >
        {leftNavShrinked ? (
          <MenuIcon bg="bg-[#777]" />
        ) : (
          <CloseIcon bg="bg-[#777]" />
        )}
      </button>
      <div className="flex flex-col">
        {[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Students", href: "/students" },
          { title: "Courses", href: "/courses" },
          { title: "Profile", href: "/profile" },
        ].map((Item) => (
          <Link key={Item.title} to={Item.href}>
            <div className="w-full p-2 flex gap-2 items-center px-1 hover:bg-amber-50 border border-slate-300 cursor-pointer py-2">
              <p className="text-2xl font-bold text-slate-600">D</p>
              <p
                className={`${
                  leftNavShrinked && "hidden"
                } font-semibold text-slate-500`}
              >
                {Item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Leftnav;
