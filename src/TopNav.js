import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class TopNav extends React.Component {
  render() {
    return (
      <>
      <div class="TopNavLinkButtons">
        <Link className="theLink" to="./">Go to Home Page</Link>
        <Link className="theLink" to="./GitHubApp">Go to GitHub App</Link>
        <Link className="theLink" to="./SudokuApp">Go to Sudoku App</Link>
      </div>
      </>
    );
  }
}

export default TopNav;