import { Helmet } from 'react-helmet-async';
import ExpoloreSearch from './expolereSearch';
import ExploreLinkComp from './expoloreLink';
import ExploreMain from './exploreMain';
import ExploreInf from './exploreInf';

function Explore() {
  return (
    <div>
      <Helmet>
        <title>Explore / X</title>
      </Helmet>

      {/* Üst kısım sabit */}
      <div
        className='w-[599px] h-[106.8px] fixed z-10 top-0 border-r-[1px] bg-black border-[#3d4043] border-b-[0.1px] border-l-0 border-t-0'
      >
        <ExpoloreSearch />
        <ExploreLinkComp />
      </div>

      {/* Ana içerik */}
      <div className='w-full h-[336.6px] pt-[106.8px]'>
        <ExploreMain />
      </div>

      <div className='mt-[100px] w-full'>
        <ExploreInf />
        <ExploreInf />
      </div>

    </div>
  );
}

export default Explore;
