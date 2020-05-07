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

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const trackingId = 'UA-165682331-1';
ReactGA.initialize(trackingId);
ReactGA.pageview('/homepage');

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const routing = (
  <Router history={history}>
    <div>
      <Route exact path={'/'} component={FrontPage} />
      <Route path={"/GitHubApp"} component={GitHubApp} />
      <Route path={"/SudokuApp"} component={SudokuApp} />
      <Route path={"/SpeedCountApp"} component={SpeedCount} />
      <Route path={"/TodoApp"} component={TodoApp} />
      <Redirect to={'/'} />
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
