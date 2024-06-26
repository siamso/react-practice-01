import React from 'react';
import Feed from './Feed.js';

function Home({posts}) {
  return (
    <main className='Home'>
      {posts.length ? (
        <Feed
          posts={posts}
        />
      ) : (
        <p style={{marginTop: '2rem'}}>
          No posts to Show
        </p>
      )}
    </main>
  )
}

export default Home