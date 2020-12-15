import React from 'react';
import './FrontPage.css';

import {Link, BrowserRouter as Router } from 'react-router-dom'

class FrontPage extends React.Component {
    render() {
      return (
        <div id="front-page-container">
          <div id="greeting">
            My React Apps
          </div>
          <div class="linkButtons">
            <Link className="theLink" to="./TodoApp">Go to Todo App</Link>
            <Link className="theLink" to="./SpeedCountApp">Go to SpeedCount App</Link>
            <Link className="theLink" to="./GitHubApp">Go to GitHub App</Link>
            <Link className="theLink" to="./SudokuApp">Go to Sudoku App</Link>
          </div>
        </div>
      );
    }
}

export default FrontPage;