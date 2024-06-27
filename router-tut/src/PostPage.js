import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import api from './api/posts.js';
import { useContext } from 'react';
import DataContext from './context/DataContext';

function PostPage() {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams(); 
  const post = posts.find((post) => (post.id).toString() === id);
  const history = useHistory();

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
    <main className='PostPage'>
        <article className='post'>
            {post &&
              <>
                <h2>{post.title}</h2>
                <p className='postDate'>{post.datetime}</p>
                <p className='postBody'>{post.body}</p>
                <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
                <button className='deleteButton' onClick={() => handleDelete(post.id)}>
                    Delete Button
                </button>
              </>
            }
            { !post &&
              <>
                <h2>Post Not Found</h2>
                <p>Well, That's Disappointing</p>
                <p><Link to='/'>Visit Our HomePage</Link></p>
              </>
            }
        </article>
    </main>
  )
}

export default PostPage