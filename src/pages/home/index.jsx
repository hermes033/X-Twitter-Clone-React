import { Helmet } from 'react-helmet-async'
import NavHome from './navHome'
import PostHome from   './postHome'
import ShowMoreHome from './showMore'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home / X</title>
      </Helmet>


      <nav className='fixed top-0'>
        <NavHome />
      </nav>

      <div className=''>
        <PostHome />
      </div>

      <div>
        <ShowMoreHome/>
      </div>

    </div>
  )
}

export default Home