import Header from './Header.js';
import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import NewPost from './NewPost.js';
import EditPost from './EditPost.js';
import PostPage from './PostPage.js';
import About from './About.js';
import Missing from './Missing.js';
import { Route, Switch, useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import {format} from 'date-fns';
import api from './api/posts.js';
import useWindowSize from './hooks/useWindowSize.js';
import useAxiosFetch from './hooks/useAxiosFetch.js';

function App() {
  const [posts, setPosts] = useState([]),
  [search, setSearch] = useState(''),
  [searchResults, setSearchResult] = useState([]),
  [postTitle, setPostTitle] = useState(''),
  [postBody, setPostBody] = useState(''),
  [editTitle, setEditTitle] = useState(''),
  [editBody, setEditBody] = useState(''),
  history = useHistory(),
  { width } = useWindowSize(),
  {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data)
  },[data])

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()))

      setSearchResult(filteredResults.reverse());

  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody};
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? {...response.data} : post));
      setEditTitle('');
      setEditBody('');
      history.push('/');
    } catch (err) {
      console.log(`Error: ${err.message}`)
    } 
  }
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      history.push('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }
  return (
    <div className="App">
      <Header title='React Js Blog' width={width}/>
      <Nav search={search} setSearch={setSearch}/>
      <Switch>
        <Route exact path='/'>
          <Home 
            posts={searchResults}
            fetchError={fetchError}
            isLoading={isLoading}
          />
        </Route>
        <Route exact path='/post'>
          <NewPost
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            handleSubmit={handleSubmit}
          />
        </Route>
        <Route path='/edit/:id'>
          <EditPost
            posts={posts}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
            handleEdit={handleEdit}
          />
        </Route>
        <Route  path='/post/:id'>
          <PostPage
            posts={posts}
            handleDelete={handleDelete}
          />
        </Route>
        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
