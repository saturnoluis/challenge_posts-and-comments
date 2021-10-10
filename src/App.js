import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Post from './pages/PostDetail';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post">
            <Post />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
