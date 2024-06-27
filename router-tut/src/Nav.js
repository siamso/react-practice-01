import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context/DataContext';

function Nav() {

  const { search, setSearch } = useContext(DataContext);

  return (
    <nav className='Nav'>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
          <input 
            id='search' 
            type="text"
            placeholder='Search Post'
            aria-label='Search Posts'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav