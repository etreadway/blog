import "./App.css";
import { Posts } from "./components/Posts";
import { PostProvider } from "./context/PostsContext";
import { Wrapper } from "./style/Wrapper";

function App() {
  return (
    <PostProvider>
      <Wrapper>
        <h1>Hello from my blog!</h1>
        <Posts />
      </Wrapper>
    </PostProvider>
  );
}

export default App;
