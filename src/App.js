import "./App.css";
import { Posts } from "./components/Posts";
import { PostProvider } from "./context/PostsContext";
import { Wrapper } from "./style/Wrapper";
import { NewPost } from "./components/NewPost";

function App() {
  return (
    <PostProvider>
      <Wrapper>
        <h1>Hello from my blog!</h1>
        <NewPost />
        <Posts />
      </Wrapper>
    </PostProvider>
  );
}

export default App;
