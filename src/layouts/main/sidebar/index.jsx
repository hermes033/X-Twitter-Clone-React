import Logo from "./logo"
import Menu from "./menu"
import AccaountMenu from "./menu/account"


function Sidebar() {
  return (
    <aside className="w-[275px] h-[1000px] ml-2 max-h-screen min-h-screen px-2 flex flex-col">
      <Logo />
      <Menu />
      <AccaountMenu />
    </aside>
  )
}

export default Sidebar