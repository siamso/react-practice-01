import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
        <Header title='React Js Blog'/>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout