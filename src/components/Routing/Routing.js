import GitHubApp from '../GitHub/GitHubApp';
import SudokuApp from '../SudokuApp/SudokuApp';
import FrontPage from '../FrontPage/FrontPage';
import SpeedCount from '../SpeedCount/SpeedCount';
import TodoApp from '../ToDo/TodoApp';
import {HashRouter, Route, Redirect} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import React from "react";

const trackingId = 'UA-165682331-1';
ReactGA.initialize(trackingId);
ReactGA.pageview('/homepage');

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const routing = <HashRouter history={history}>
    <div>
      <Route exact path={'/'} component={FrontPage} />
      <Route path={"/GitHubApp"} component={GitHubApp} />
      <Route path={"/SudokuApp"} component={SudokuApp} />
      <Route path={"/SpeedCountApp"} component={SpeedCount} />
      <Route path={"/TodoApp"} component={TodoApp} />
    </div>
  </HashRouter>


export default routing;
