import React from 'react';
import ReactDOM from 'react-dom';
import './SudokuApp.css';
import TopNav from './TopNav';

class Square extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        history: 0,
      }
    }
  
    buttonIsClicked(e) {
      this.setState({
        history: this.state.history + 1,
      });
    }
  
    resetIndividual(e) {
      this.setState({
        history: 0,
        
      })
    }
  
    render() {
      if (this.props.clearAll) {
        this.setState({
          history: 0,
        });
      }
  
      return (
        <td 
          id="squareButton"
          onClick={(e) => this.buttonIsClicked(e)}
          onContextMenu={(e) => this.resetIndividual(e)}
        >
          {this.state.history + this.props.text}
        </td>
      );
    }
  }
  
  class GitHubApp extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        incrementAmount: 0,
        clearAll: false
      }
  
    }
    
    makeBoard()  {
      let table = [];
      let id = 0;
      for (let i = 0; i < 5; i++) {
        let children = [];
        for (let j = 0; j < 5; j++) {
          children.push(<Square key={id} clearAll={this.state.clearAll} text={this.state.incrementAmount}/>);
          id += 1;
        }
        table.push(<tr key={id}>{children}</tr>);
        id += 1;
      }
  
      if (this.state.clearAll) {
        this.setState({
          clearAll: false,
        })
      }
  
      return table;
    }
  
    incrementAll(e) {
      const prevAmount = this.state.incrementAmount;
      this.setState({
        incrementAmount: prevAmount + 1,
      });
    }
  
    clearAll(e) {
      this.setState({
        clearAll: true,
        incrementAmount: 0
      });
    }

    contextMenu = (e) => {
      e.preventDefault();
    };

    render() {
      const tempVar = 1;
  
      return(
        <div>
          <TopNav />
          <table id="myTableId" className="myTable" onContextMenu={this.contextMenu}>
            <tbody>
              {this.makeBoard()}
            </tbody>
          </table>
          <div className="botOfGrid">
            <div>
              <br />
              <button id="incrementAll" onClick={(e) => this.incrementAll(e)}>Increment All</button>
              <div>Increment Amount: {this.state.incrementAmount}</div>
              <br />
            </div>
            <button id="clearAll" onClick={(e) => this.clearAll(e)}>Clear All</button>
            <div>Right Click Individual Box to Reset Individual History</div>
          </div>
        </div>
      );
    }
  }
export default GitHubApp;
