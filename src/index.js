import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GitHubApp from './GitHubApp';
import SudokuApp from './SudokuApp';
import FrontPage from './FrontPage';
import SpeedCount from './SpeedCount/SpeedCount';

import * as serviceWorker from './serviceWorker';
import {Redirect, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import TodoApp from './ToDo/TodoApp';

const routing = (
  <Router>
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={FrontPage} />
      <Route path="/GitHubApp" component={GitHubApp} />
      <Route path="/SudokuApp" component={SudokuApp} />
      <Route path="/SpeedCountApp" component={SpeedCount} />
      <Route path="/TodoApp" component={TodoApp} />
      <Redirect to={process.env.PUBLIC_URL + '/'} />
    </div>
  </Router>
)

ReactDOM.render(
  // <OutputComponents />
  routing,
  document.getElementById('reactSide')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
