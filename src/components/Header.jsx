import { useState } from "react";

function Header() {
  const Links = () => (
    <>
      {" "}
      {[
        { href: "/", title: "Home" },
        { href: "/services", title: "Services" },
        { href: "/about", title: "About" },
        { href: "/login", title: "Login" },
      ].map(({ href, title }) => (
        <li key={href}>
          <a href={href}>
            <div className="hover:bg-slate-300 font-semibold text-white transition duration-300 border border-slate-400 py-2 px-3">
              {title}
            </div>
          </a>
        </li>
      ))}
    </>
  );
  const [mobileNavOpend, setMobileNavOpend] = useState(true);
  return (
    <div className="w-full h-16 bg-[#46516166] flex items-center justify-between px-4">
      <a href="/">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <img src="/public/images/logo.jpeg" alt="alogo" />
        </div>
      </a>
      <nav>
        <div className="flex-1 sm:hidden">
          {mobileNavOpend ? (
            <>
              {" "}
              <button
                className="hover:bg-slate-300 transition duration-300 border border-slate-400 w-8 h-8 flex cursor-pointer flex-col justify-evenly p-1"
                onClick={() => setMobileNavOpend(!mobileNavOpend)}
              >
                <div className="w-full h-[4px] bg-white rounded-full"></div>
                <div className="w-full h-[4px] bg-white rounded-full"></div>
                <div className="w-full h-[4px] bg-white rounded-full"></div>
              </button>
            </>
          ) : (
            <>
              <div className="fixed top-0 left-0 w-full h-screen bg-zinc-800/80 flex">
                <div className="flex-1"></div>
                <div className="flex-1 bg-[#ffffff7a] flex gap-2 justify-end p-8">
                  <button
                    className="absolute hover:bg-slate-300 transition duration-300 border border-slate-400 py-2 px-3 cursor-pointer rounded-md text-white font-semibold"
                    onClick={() => setMobileNavOpend(!mobileNavOpend)}
                  >
                    X
                  </button>
                  <ul className="flex-1 flex gap-2 mt-20 flex-col">
                    <Links />
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
        <ul className="hidden sm:flex gap-2 ">
          <Links />
        </ul>
      </nav>
    </div>
  );
}

export default Header;
