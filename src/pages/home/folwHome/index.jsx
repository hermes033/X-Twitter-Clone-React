import { Helmet } from "react-helmet-async"
import NavHome from "../navHome"
import PostHome from "../postHome"
import ShowMoreHome from "../showMore"
import MainHome from "../mainHome"


export default function FollowingMainHome() {


  return (
    <div>
      <Helmet>
        <title>Home / X</title>
      </Helmet>

      <nav className='fixed top-0'>
        <NavHome />
      </nav>

      <div>
        <PostHome />
      </div>

      
      <div>
        <ShowMoreHome />
      </div>

      <div className='w-full min-h-screen'>
        <MainHome/>
      </div>

    </div>
  )
}