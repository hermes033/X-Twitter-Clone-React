import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { mainMenu } from "~/utils/const"
import More from "./more"
import PostButton from "./post"

function Menu() {
  return (
    <nav className="-mt-[2px]">
      {/* Burda -mb-[10px men yazmisam] */}
      {
        mainMenu.map((menu, index) => (
          <NavLink key={index} to={menu.path} className="rounded-full mr-10 py-1 block group -mb-[10px]">
            {({ isActive }) => (
              <div className={classNames("p-3 rounded-full inline-flex transition-colors items-start gap-5 group-hover:bg-[#eff3f41a]", {
                'font-bold': isActive
              })}>
                <div className="w-[26.25px] h-[26.25px] relative">
                  {menu?.notification && <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{menu.notification}</span>}


                  {isActive && menu.icon.active}
                  {!isActive && menu.icon.passive}
                </div>


                <div className="text-xl pr-4">
                  {menu.title}
                </div>
              </div>
            )}
          </NavLink>
        ))
      }
      <More />
      <PostButton />
    </nav >
  )
}

export default Menu