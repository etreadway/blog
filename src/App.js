import "./App.css";
import { Posts } from "./components/Posts";
import { Wrapper } from "./style/Wrapper";

function App() {
  return (
    <Wrapper>
      <h1>Hello from my blog!</h1>
      <Posts />
    </Wrapper>
  );
}

export default App;
