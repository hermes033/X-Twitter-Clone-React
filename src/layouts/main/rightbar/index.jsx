import Premium from "~/pages/premium"
import Search from "./search"
import WhoToFollow from "./follow"
import Footer from "./footer"
import WhatsHappening from "./whats"




function Rightbar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <WhoToFollow />
      <WhatsHappening />
      <Footer />
    </aside>
  )
}

export default Rightbar