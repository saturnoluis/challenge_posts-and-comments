import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Single from './pages/Single';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Single} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
