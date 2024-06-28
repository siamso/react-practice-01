import Layout from './Layout.js';
import Home from './Home.js';
import NewPost from './NewPost.js';
import EditPost from './EditPost.js';
import PostPage from './PostPage.js';
import About from './About.js';
import Missing from './Missing.js';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch.js';
import { Route, Routes} from 'react-router-dom';
import  { action, useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts); 
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
      setPosts(data)
  },[data, setPosts])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home
            fetchError={fetchError}
            isLoading={isLoading}
        />}/>
        <Route path='post'>
          <Route index element={<NewPost/>}/>
          <Route path=':id' element={<PostPage/>}/>
        </Route>
        <Route path='edit/:id' element={<EditPost/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<Missing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
