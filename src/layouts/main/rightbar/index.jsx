import { useLocation } from "react-router-dom";
import Premium from "~/pages/premium";
import Search from "./search";
import WhoToFollow from "./follow";
import Footer from "./footer";
import WhatsHappening from "./whats";

function Rightbar() {
  const location = useLocation();

  // Eğer /explore sayfasındaysak sadece WhoToFollow'u göster
  const isExplorePage = location.pathname === "/explore";

  return (
    <aside className="ml-7 w-[350px] min-h-[100vh]">
      {isExplorePage ? (
        <div className="mt-3">
          <WhoToFollow/>
          <Footer/>
        </div>

      ) : (
        <>
          <Search />
          <Premium />
          <WhoToFollow />
          <WhatsHappening />
          <Footer />
        </>
      )}
    </aside>
  );
}

export default Rightbar;
