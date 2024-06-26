import Header from './Header.js';
import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import NewPost from './NewPost.js';
import PostPage from './PostPage.js';
import About from './About.js';
import Missing from './Missing.js';
import { Route, Switch, useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/post'>
          <NewPost/>
        </Route>
        <Route  path='/post/:id'>
          <PostPage/>
        </Route>
        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
