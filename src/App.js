import "./App.css";
import { Posts } from "./components/Posts";
import { PostProvider } from "./context/PostsContext";
import { Wrapper } from "./style/Wrapper";
import { NewPost } from "./components/NewPost";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <PostProvider>
        <Wrapper>
          <h1>Hello from my blog!</h1>

          <Switch>
            <Route path="/newpost">
              <NewPost />
            </Route>
            <Route path="/">
              <Posts />
            </Route>
          </Switch>
        </Wrapper>
      </PostProvider>
    </Router>
  );
}

export default App;
