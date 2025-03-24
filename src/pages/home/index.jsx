import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { loadTweetsFromStorage } from '~/store/tweet';
import NavHome from './navHome';
import PostHome from './postHome';
import ShowMoreHome from './showMore';
import MainHome from './mainHome';

function Home() {
  const dispatch = useDispatch();
  const tweets = useSelector(state => state.tweet.tweets);

  useEffect(() => {
    dispatch(loadTweetsFromStorage());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Home / X</title>
      </Helmet>

      <nav className='fixed top-0'>
        <NavHome />
      </nav>

      <PostHome />

      <div>
        <ShowMoreHome />
      </div>

      <div className='w-full min-h-screen'>
        <MainHome posts1={tweets} />
      </div>
    </div>
  );
}

export default Home;
