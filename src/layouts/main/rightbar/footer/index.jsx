import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="pl-4 text-[13px] mt-4 w-[350px] h-[40px] text-[#6a6f74]">
      <nav className="w-[290px] h-full flex flex-wrap break-words items-stretch basis-auto">
        <div className="flex items-center justify-between w-full">
          <Link className="hover:underline transition-all">Terms of Service</Link>
          <Link className="hover:underline transition-all">Privacy Policy</Link>
          <Link className="hover:underline transition-all">Cookie Policy</Link>
        </div>
        <div className="flex items-center justify-between w-full">
          <Link className="hover:underline transition-all">Accessibility</Link>
          <Link className="hover:underline transition-all">Ads Info</Link>
          <Link className="hover:underline transition-all">More </Link>
          <p>© 2025 X Corp.</p>
        </div>

      </nav>
    </footer>
  )
}