import { Link } from "react-router-dom"

export default function ShowMoreHome() {
  return (
    <div className="hover:bg-[#3f3e3e18] cursor-pointer w-full h-[48.8px] flex items-center justify-center border-b-[1px] border-[#2f3336]">
      <Link className="text-[#1880c7] text-[16px]">Show 70 posts</Link>
    </div>
  )
}