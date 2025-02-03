import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { morePopop } from "~/utils/moreConst"
import { NavLink } from "react-router-dom"


export default function More() {
  return (
    <Popover className='relative'>

      <PopoverButton className="py-[3px] block group outline-none">
        <button>
          <div className="p-3 rounded-full inline-flex transition-colors items-start gap-5 group-hover:bg-[#eff3f41a]" >
            <div className="w-[26.25px] h-[26.25px] relative">
              <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
                <path fill="#e7e9ea" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z">
                </path>
              </svg>
            </div>

            <div className="text-xl pr-4">
              More
            </div>
          </div>
        </button>
      </PopoverButton>

      {/* More Click PopOver hover da problemz */}
      <PopoverPanel className="w-[318px] h-[449px] bottom-1 left-0 bg-black shadow-box rounded-xl right-0 items-stretch flex flex-col overflow-hidden z-[9999] absolute"> 
        {morePopop.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.elementt} // nese BU HISSE SONRA BAX CLICK ELIYENDE KECMIR ORA DEQIQE 22:35 3 CU DERS
            className="py-1 block group w-[318px] h-[56px]"
          >
            <div className="px-4 flex items-center gap-5 transition-colors group-hover:bg-[#edf1f31a]  w-[318px] h-[56px]">
              <div className="w-[24px] h-[24px] relative">
                {menu.icon.active}
              </div>
              <div className="text-xl pr-4 font-bold w-[238px] h-[24]">
                {menu.title}
              </div>
            </div>
          </NavLink>
        ))}
      </PopoverPanel>
    </Popover>
  )
}