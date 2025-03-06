import MenuIcon from "../components/MenuIcon";
import CloseIcon from "../components/CloseIcon";
import { useState } from "react";

function Leftnav() {
  const [leftNavShrinked, setLeftNavShrinked] = useState(true);
  return (
    <nav
      className={`${
        leftNavShrinked ? "w-[48px]" : "w-[240px]"
      } bg-slate-300 transition-all duration-300 relative`}
    >
      <button
        className="relative p-2"
        onClick={() => setLeftNavShrinked(!leftNavShrinked)}
      >
        {leftNavShrinked ? (
          <MenuIcon bg="bg-[#777]" />
        ) : (
          <CloseIcon bg="bg-[#777]" />
        )}
      </button>
      <div className="flex flex-col gap-2">
        {["Dashboard"].map((Item) => (
          <div
            key={Item}
            className="w-full p-2 flex gap-2 items-center px-1 hover:bg-amber-50 bg-slate-200 border border-slate-300 cursor-pointer py-2"
          >
            <p className="text-2xl font-bold text-slate-600">D</p>
            <p className={`${leftNavShrinked && "hidden"}`}>{Item}</p>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Leftnav;
