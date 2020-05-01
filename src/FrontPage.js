import React from 'react';
import './FrontPage.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class FrontPage extends React.Component {
    render() {
      return (
        <>
        <div id="Greeting">
          My React Apps
        </div>
        <div class="linkButtons">
          <Link className="theLink" to="./GitHubApp">Go to GitHub App</Link>
          <Link className="theLink" to="./SudokuApp">Go to Sudoku App</Link>
          <Link className="theLink" to="./SpeedCount">Go to SpeedCount App</Link>
        </div>
        </>
      );
    }
}

export default FrontPage;