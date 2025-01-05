import { Helmet } from 'react-helmet-async'
import ExpoloreSearch from './expolereSearch'
import ExploreLinkComp from './expoloreLink'
import ExploreMain from './exploreMain'

function Explore() {
  return (
    <div>
      <Helmet>
        <title>Explore / X</title>
      </Helmet>

      <div className='w-full h-[106.8px] border-[#3d4043] border-b-[1px] border-l-0 border-r-0 border-t-0'>
        <ExpoloreSearch />
        <ExploreLinkComp/>
      </div>

      <div className='w-full h-[336.6px]'>
        <ExploreMain/>
      </div>
    </div>
  )
}

export default Explore