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
  const isGrokPage = location.pathname === "/grok";
  const isCommPage = location.pathname === '/communities';
  const isProfPage = location.pathname === '/undefined'
  return (
    <aside className="ml-[30px] min-w-[350px]">
      {isExplorePage ? (
        <div className="mt-3">
          <WhoToFollow />
          <Footer />
        </div>
      ) : isNotfPage || isCommPage || isProfPage ? (
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
      ) : isGrokPage ? (
        <div>

        </div>
      ) : (
        <div className="max-h-[160vh] min-h-[160vh]">
          <div className="fixed top-0">
            <Search />
          </div>
          <div className="mt-16">
            <Premium />
            <WhoToFollow />
            <WhatsHappening />
            <Footer />
          </div>
        </div>
      )
      }
    </aside >
  );
}

export default Rightbar;
