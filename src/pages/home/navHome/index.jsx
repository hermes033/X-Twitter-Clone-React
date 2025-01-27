import { Link } from "react-router-dom"

export default function NavHome() {
  return (
    <nav className="w-full h-[53px] sticky z-[3] top-[0.5px] backdrop-blur-md flex items-center border-b-[1px] bg-[#000000ea] border-[#2f3336]">

      <div className="w-[292.1px] h-full flex items-center justify-center text-center transition-all hover:bg-[#3d404346]">
        <Link className="w-full h-[52px] flex items-center justify-center">
          <span className="w-full h-[20px] font-bold text-[#eff3f4]">For you</span>
        </Link>
      </div>

      <div className="w-[306.3px] h-full flex items-center justify-center text-center transition-all hover:bg-[#3d404340]">
        <Link className="w-full h-[52px] flex items-center justify-center">
          <span className="w-full h-full pt-4 font-semibold text-[#71767b]">Following</span>
        </Link>
      </div>

    </nav>
  )
}