import Sidebar from "./sidebar"
import Rightbar from "./rightbar"
import MainBar from "./mainbar"


function MainLayout() {

  return (
    <div className="min-w-[1024px] border-red-600 flex justify-center">

      <header className="w-[275px] -ml-[974px] fixed">
        <Sidebar />
      </header>


      <main className="border-l border-r border-[#2f3336] ml-[236px] border w-[600px]">
        <MainBar />
      </main>

      <aside className="w-[350px]">
        <Rightbar />
      </aside>




    </div>

  )
}

export default MainLayout