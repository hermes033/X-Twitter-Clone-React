import { Link } from "react-router-dom"

export default function ShowMoreHome() {
  return (
    <div className="hover:bg-[#3f3e3e18] w-full h-[48.8px] flex items-center justify-center border-b-[1px] border-[#2f3336]">
      <Link className="w-full cursor-pointer h-full flex items-center justify-center text-[#1880c7] text-[16px]"><a className="cursor-pointer" href="">Show 70 posts</a></Link>
    </div>
  )
}