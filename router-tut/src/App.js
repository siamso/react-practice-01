import Header from './Header.js';
import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import NewPost from './NewPost.js';
import EditPost from './EditPost.js';
import PostPage from './PostPage.js';
import About from './About.js';
import Missing from './Missing.js';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch.js';
import { Route, Switch} from 'react-router-dom';
import  { action, useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts); 
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
      setPosts(data)
  },[data, setPosts])

  return (
    <div className="App">
      <Header title='React Js Blog'/>
        <Nav/>
        <Switch>
          <Route exact path='/'>
            <Home
              fetchError={fetchError}
              isLoading={isLoading}
            />
          </Route>
          <Route exact path='/post' component={NewPost} />
          <Route path='/edit/:id' component={EditPost} />
          <Route  path='/post/:id' component={PostPage} />
          <Route path='/about' component={About} />
          <Route path='*' component={Missing} />
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
