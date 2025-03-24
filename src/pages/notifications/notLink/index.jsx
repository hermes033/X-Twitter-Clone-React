import { Link } from "react-router-dom"

export default function NotfLinkComp() {
  return (
    <div className="w-full h-[53px] flex z-[-1]">
      <nav className="flex w-full justify-around items-center list-none">


        <li className="hover:bg-[#181818] transition-all cursor-pointer h-full flex items-center justify-center w-[175.1px]">
          <Link className="text-[#64686d] font-semibold">All</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer flex items-center justify-center h-full w-[205.88px]">
          <Link className="text-[#64686d] font-semibold">Verified</Link>
        </li>

        <li className="hover:bg-[#181818] transition-all cursor-pointer flex items-center justify-center h-full w-[217.44px]">
          <Link className="text-[#64686d] font-semibold">Mentions</Link>
        </li>
      </nav>
    </div>
  )
}