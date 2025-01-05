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


      <nav className=''>
        <NavHome />
      </nav>

      <div>
        <PostHome />
      </div>

      <div>
        <ShowMoreHome/>
      </div>

    </div>
  )
}

export default Home