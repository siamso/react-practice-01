import React from 'react';
import Feed from './Feed.js';
import { useContext } from 'react';
import DataContext from './context/DataContext';

function Home() {

  const { searchResults, isLoading, fetchError } = useContext(DataContext);

  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts = {searchResults}/> : <p className='statusMsg'>No posts to display.</p>)}
    </main>
  )
}

export default Home