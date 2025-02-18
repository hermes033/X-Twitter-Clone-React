import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavHome from './navHome';
import PostHome from './postHome';
import ShowMoreHome from './showMore';
import MainHome from './mainHome';

function Home() {
  const [posts1, setPosts1] = useState([]); // Postları tutacak state

  // Yeni post ekleyen fonksiyon
  const addPost = (newPost) => {
    setPosts1([newPost, ...posts1]); // Yeni postu en üste ekler
  };

  return (
    <div>
      <Helmet>
        <title>Home / X</title>
      </Helmet> 

      <nav className='fixed top-0'>
        <NavHome />
      </nav>

      {/* Post ekleme bileşeni, addPost fonksiyonunu prop olarak geçiyoruz */}
      <PostHome addPost={addPost} />

      <div>
        <ShowMoreHome />
      </div>

      {/* Postları gösteren bileşen, posts state’ini prop olarak geçiyoruz */}
      <div className='w-full min-h-screen'>
        <MainHome posts1={posts1} />
      </div>
    </div>
  );
}

export default Home;
