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

      <div className='mb-1'>
        <PostHome />
      </div>

      <div>
        <ShowMoreHome/>
      </div>

    </div>
  )
}

export default Home