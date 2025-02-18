import { Link, useLocation } from "react-router-dom";

export default function NavHome() {
  const location = useLocation();

  return (
    <nav className="w-full h-[53px] sticky z-[3] top-[0.5px] backdrop-blur-md flex items-center border-b-[1px] bg-[#000000ea] border-[#2f3336]">

      {/* For You Link */}
      <div className="w-[292.1px] h-full flex items-center justify-center text-center transition-all hover:bg-[#3d404346]">
        <Link to="/" className="w-full h-[52px] flex flex-col items-center justify-center">
          <span
            className={`w-full h-full flex flex-col items-center justify-between ${location.pathname === "/" ? "font-bold text-white" : "font-semibold text-[#71767b]"
              }`}
          >
            <span className="mt-3.5">For you</span>
            {location.pathname === "/" && (
              <div className="w-[57px] h-[4px] bg-[#1d9bf0] rounded-full"></div>
            )}
          </span>

        </Link>
      </div>

      {/* Following Link */}
      <div className="w-[306.3px] h-full flex items-center justify-center text-center transition-all hover:bg-[#3d404340]">
        <Link to="/home/following" className="w-full h-[52px] flex flex-col items-center justify-center">
          <span
            className={`w-full h-full flex flex-col items-center justify-between ${location.pathname === "/home/following" ? "font-bold text-white" : "font-semibold text-[#71767b]"
              }`}
          >
            <span className="mt-3.5">Following</span>
          </span>
          {location.pathname === "/home/following" && (
            <div className="w-[73px] h-[4px] bg-[#1d9bf0] rounded-full"></div>
          )}
        </Link>
      </div>

    </nav>
  );
}
