import { Link } from "react-router-dom"

export default function ProfileNav() {
  return (
    <div className="w-full h-[53.8px] border-b-[1px] border-[#2f3336]">
      <nav className="w-full h-[53px] flex items-center">

        <Link className="hover:bg-[#181818] border-b-[4px] border-[#1d9bf0] w-[90.74px] h-[53px] font-bold flex tracking-wide items-center justify-center">Posts</Link>
        <Link className="hover:bg-[#181818] w-[101.91px] h-[53px] font-semibold text-[#71767b] tracking-wide flex items-center justify-center">Replies</Link>
        <Link className="hover:bg-[#181818] w-[121.41px] h-[53px] font-semibold text-[#71767b] tracking-wide flex items-center justify-center">Highlights</Link>
        <Link className="hover:bg-[#181818] w-[104.46px] h-[53px] font-semibold text-[#71767b] tracking-wide flex items-center justify-center">Articles</Link>
        <Link className="hover:bg-[#181818] w-[93.61px] h-[53px] font-semibold text-[#71767b] tracking-wide flex items-center justify-center">Media</Link>
        <Link className="hover:bg-[#181818] w-[86.24px] h-[53px] font-semibold text-[#71767b] tracking-wide flex items-center justify-center">Likes</Link>


      </nav>
    </div>
  )
}