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
  const isNotfPage = location.pathname === "/notifications";


  return (
    <aside className="ml-[30px] min-w-[350px] min-h-[100vh]">
      {isExplorePage ? (
        <div className="mt-3">
          <WhoToFollow />
          <Footer />
        </div>
      ) : isNotfPage ? (
        <div>
          <div className="fixed top-0">
            <Search />
          </div>
          <div className="mt-16">
            <WhoToFollow />
            <WhatsHappening />
            <Footer />
          </div>
        </div>
      ) : (
        <>
          <div className="fixed top-0">
            <Search />
          </div>
          <div className="mt-16">
            <Premium />
            <WhoToFollow />
            <WhatsHappening />
            <Footer />
          </div>
        </>
      )
      }
    </aside >
  );
}

export default Rightbar;
