import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NbaTeams from './components/NbaTeams';
import NbaStats from './components/NbaStats';

export default () => {
  return (
    <div className="base">
      <header>
        <p>NBA Basketball Blog</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nbateams">NBA teams</Link>
            </li>
            <li>
              <Link to="/nbastats">NBA stats</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/nbateams" component={NbaTeams} />
        <Route path="/nbastats" component={NbaStats} />
      </div>
      <footer>React Router v4 Browser Example (c) 2017</footer>
    </div>
  );
};
