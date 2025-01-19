import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import MainBar from "./mainbar";
import { useLocation } from "react-router-dom";
import MessagesRight from "~/pages/messages/messagesRight";
import Messages from "~/pages/messages";

function MainLayout() {
  const location = useLocation();

  const isMesgPage = location.pathname === "/messages";

  return (
    <div className="min-w-[1024px] border-red-600 flex justify-center">
      <header
        className={`w-[275px] fixed ${isMesgPage ? "mr-[991px] px" : "mr-[974px]"
          }`}
      >
        <Sidebar />
      </header>

      <>
        {isMesgPage ? (
          <div className="flex w-[1098px] ml-[367px]">
            <Messages />
            <MessagesRight />
          </div>
        ) : (
          <>
            <main className="border-l border-r border-[#2f3336] ml-[236px] border w-[600px]">
              <MainBar />
            </main>

            <aside className="w-[350px]">
              <Rightbar />
            </aside>
          </>
        )}
      </>
    </div>
  );
}

export default MainLayout;
// OLCUDE PROBLEM VAR MESSAGES DE