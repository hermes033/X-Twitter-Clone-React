import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import MainBar from "./mainbar";
import { useLocation } from "react-router-dom";
import MessagesRight from "~/pages/messages/messagesRight";
import Messages from "~/pages/messages";
import { useEffect, useState } from "react";

function MainLayout() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const isMesgPage = location.pathname === "/messages";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-3 saniye sonra loading biter

    return () => clearTimeout(timer); // Temizlik için timeout'u temizle
  }, []);

  return (

    <div>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <svg viewBox="0 0 24 24" width={70} height={70} className="m-auto" >
            <g>
              <path fill="#fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
              </path>
            </g>
          </svg>
        </div>
      ) :
        <div className="min-w-[1024px] flex justify-center">
          <header
            className={`w-[275px] fixed ${isMesgPage ? "mr-[991px] px" : "mr-[974px]"
              }`}
          >
            <Sidebar />
          </header>

          <div className="min-w-[1024px] flex justify-center">
            {isMesgPage ? (
              <div className="flex w-[1098px] ml-[367px]">
                <Messages />
                <MessagesRight />
              </div>
            ) : (
              <>
                <main className="border-l border-r border-[#2f3336] ml-[235px] border w-[600px]">
                  <MainBar />
                </main>

                <aside className="w-[350px] h-screen">
                  <Rightbar />
                </aside>
              </>
            )}
          </div>
        </div>
      }

    </div>


  );
}

export default MainLayout;
// OLCUDE PROBLEM VAR MESSAGES DE