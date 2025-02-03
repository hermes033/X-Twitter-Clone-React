import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { morePopop } from "~/utils/moreConst";

export default function MorePopover() {
  

  return createPortal(
    <div className="w-[318px] h-[449px] bottom-[10px] left-0 bg-black shadow-box rounded-xl right-0 items-stretch flex flex-col overflow-hidden fixed z-[9999]">
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
    </div>,
    document.getElementById("portal-root")
  );
}
