import PostsList from "./components/posts/PostsList";
import AddPostForm from "./components/posts/AddPostForm";

function App() {
  return (
    <>
      <main>
        <AddPostForm />
        <PostsList />
      </main>
    </>
  );
}

export default App;
