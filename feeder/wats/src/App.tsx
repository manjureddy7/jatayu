import React from 'react';
// eslint-disable-next-line
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './style.scss';
import { Users, About, Home } from './components';

const App = () => (
  <div className="wrapper">
    <h1 className="container">
      Hello! Welcome to React Web App with TS setup (WATS)!
    </h1>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          {/* Now Home compoennt will receive proips from router */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
