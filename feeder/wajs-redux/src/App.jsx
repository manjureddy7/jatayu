import React from 'react';
// eslint-disable-next-line
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './style.scss';
import { Users, Projects, Home } from './components';

const IMAGE_URL = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28c626b0-fa3b-4f3c-9023-32cce0c4df6d/d9hu0go-ecb1aeeb-a9c4-4907-9270-7c8df2b9f78a.jpg/v1/fill/w_1024,h_650,q_75,strp/jatayu_by_elcaide_d9hu0go-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUwIiwicGF0aCI6IlwvZlwvMjhjNjI2YjAtZmEzYi00ZjNjLTkwMjMtMzJjY2UwYzRkZjZkXC9kOWh1MGdvLWVjYjFhZWViLWE5YzQtNDkwNy05MjcwLTdjOGRmMmI5Zjc4YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ycEU5tS1rQuQH8FzGSXMtzFpmWVqNm-LjD_zj7BfZJU';

const App = () => (
  <div className="wrapper">
    <div className="logo">
      <img className="jatayu-logo" src={IMAGE_URL} alt="JATAYU logo" height="300px" width="500px" />
      <h1 className="container">
        Welcome to JATAYU generated React Web app with basic Redux JS setup!
      </h1>
    </div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/projects">
            <Projects />
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
