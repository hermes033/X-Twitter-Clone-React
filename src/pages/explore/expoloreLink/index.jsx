import { Link } from "react-router-dom"

export default function ExploreLinkComp() {
  return (
    <div className="m-w-[600px] h-[53px] flex">
      <nav className="flex w-full justify-around items-center list-none">


        <li className="hover:bg-[#181818] transition-all cursor-pointer h-full flex items-center justify-center w-[112.4px]">
          <Link className="text-[#64686d] font-semibold">For you</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer flex items-center justify-center h-full w-[120.88px]">
          <Link className="text-[#64686d] font-semibold">Trending</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer flex items-center justify-center h-full w-[98.25px]">
          <Link className="text-[#64686d] font-semibold">News</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer flex items-center justify-center h-full w-[106.25px]">
          <Link className="text-[#64686d] font-semibold">Sports</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer flex items-center justify-center h-full w-[160.63px]">
          <Link className="text-[#64686d] font-semibold">Entertaintment</Link>
        </li>
      </nav>
    </div>
  )
}