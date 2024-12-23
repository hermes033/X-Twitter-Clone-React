import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { mainMenu } from "~/utils/const"
import More from "./more"
import PostButton from "./post"

function Menu() {
  return (
    <nav className="mt-0.5">
      {/* Burda -mb-[10px men yazmisam] */}
      {
        mainMenu.map((menu, index) => (
          <NavLink key={index} to={menu.path} className="py-1 block group -mb-[10px]">
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

      {/* <NavLink to='/bookmarks' className="hidden py-1 block group">
        {({ isActive }) => (
          <div className={classNames("p-3 rounded-full inline-flex transition-colors items-start gap-5 group-hover:bg-[#eff3f41a]", {
            'font-bold': isActive
          })}>
            {!isActive && (
              <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
                <path fill="#e7e9ea" d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                </path>
              </svg>
            )}
            {isActive && (
              <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
                <path fill="#e7e9ea" d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z">
                </path>
              </svg>
            )}

            <div className="text-xl pr-4">
              Bookmarks
            </div>
          </div>

        )}
      </NavLink>

      <NavLink to='/jobs' className="hidden py-1 block group">
        {({ isActive }) => (
          <div className={classNames("p-3 rounded-full inline-flex transition-colors items-start gap-5 group-hover:bg-[#eff3f41a]", {
            'font-bold': isActive
          })}>

            <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
              <path fill="#e7e9ea" d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z">
              </path>
            </svg>


            <div className="text-xl pr-4">
              Jobs
            </div>
          </div>

        )}
      </NavLink>

      <NavLink to='/verifiedorgs' className="hidden py-1 block group">
        {({ isActive }) => (
          <div className={classNames("p-3 rounded-full inline-flex transition-colors items-start gap-5 group-hover:bg-[#eff3f41a]", {
            'font-bold': isActive
          })}>

            <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block" >
              <path fill="#e7e9ea" d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z">
              </path>
            </svg>

            <div className="text-xl pr-4">
              Verified Orgs
            </div>
          </div>

        )}
      </NavLink> */}









    </nav >
  )
}

export default Menu