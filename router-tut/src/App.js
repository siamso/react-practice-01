import Header from './Header.js';
import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import NewPost from './NewPost.js';
import EditPost from './EditPost.js';
import PostPage from './PostPage.js';
import About from './About.js';
import Missing from './Missing.js';
import { Route, Switch} from 'react-router-dom';
import { DataProvider } from './context/DataContext.js';

function App() {
  return (
    <div className="App">
      <Header title='React Js Blog'/>
      <DataProvider>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/post' component={NewPost} />
          <Route path='/edit/:id' component={EditPost} />
          <Route  path='/post/:id' component={PostPage} />
          <Route path='/about' component={About} />
          <Route path='*' component={Missing} />
        </Switch>
      </DataProvider>
      <Footer/>
    </div>
  );
}

export default App;
