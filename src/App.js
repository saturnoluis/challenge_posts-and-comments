import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Single from './pages/Single';

import './App.css';

function App() {
  const [lights, setLights] = useState(false);

  return (
    <Router>
      <div className={`App App--${lights ? 'light' : 'dark'}`}>
        <div
          role="presentation"
          onClick={() => setLights(!lights)}
          className={`App__LightSwitch App__LightSwitch--${lights ? 'on' : 'off'}`}
        />
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
