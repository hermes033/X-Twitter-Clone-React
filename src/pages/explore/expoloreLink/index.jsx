import { Link } from "react-router-dom"

export default function ExploreLinkComp() {
  return (
    <div className="w-full h-[53px] flex">
      <nav className="flex w-full justify-around items-center list-none">


        <li className="hover:bg-[#181818] transition-all cursor-pointer h-full flex items-center justify-center w-[111.25px]">
          <Link className="text-[#64686d] font-semibold">For you</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer flex items-center justify-center h-full w-[120.99px]">
          <Link className="text-[#64686d] font-semibold">Trending</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer flex items-center justify-center h-full w-[99.04px]">
          <Link className="text-[#64686d] font-semibold">News</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer h-full w-[106.36px] flex items-center justify-center">
          <Link className="text-[#64686d] font-semibold">Sports</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer h-full w-[160.74px] flex items-center justify-center">
          <Link className="text-[#64686d] font-semibold">Entertaintment</Link>
        </li>

      </nav>
    </div>
  )
}