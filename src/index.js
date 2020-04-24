import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      incrementAmount: 0,
      clearAll: false
    }

  }
  
  makeBoard()  {
    let table = [];
    for (let i = 0; i < 5; i++) {
      let children = [];
      for (let j = 0; j < 5; j++) {
        children.push(<Square clearAll={this.state.clearAll} text={this.state.incrementAmount}/>);
      }
      table.push(<tr>{children}</tr>);
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

  render() {
    const tempVar = 1;

    return(
      <div>
        <App />
        <table id="myTableId" className="myTable">
          {this.makeBoard()}
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

ReactDOM.render(
  <Board />,
  document.getElementById('reactSide')
);

// prevent right click on table
document.getElementById('myTableId').addEventListener('contextmenu', event => event.preventDefault());


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
