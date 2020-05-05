import React, { useState, Fragment } from "react";
import "./TodoApp.css";
import shortid from "shortid";

import TopNav from "../TopNav";

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleDisplay: "hidden",
    }

    this.toggleCloseDisplay = this.toggleCloseDisplay.bind(this);
  }

  toggleCloseDisplay() {
    this.setState({
      toggleDisplay: this.state.toggleDisplay === "hidden" ?  "visible" : "hidden", 
    })
  };

  render() {

    return (
      <div className="project-item" onClick={this.props.onClick} onMouseEnter={this.toggleCloseDisplay} onMouseLeave={this.toggleCloseDisplay}>
        {this.props.projectStr}
        <div
          className="project-close-button"
          style={{ visibility: this.state.toggleDisplay }}
          onClick={() => this.props.projectCloseClicked(this.props.projectStr)}
        ></div>
      </div>
    );
  }

}

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleDisplay: "hidden",
    }

    this.toggleCloseDisplay = this.toggleCloseDisplay.bind(this);
  }

  toggleCloseDisplay() {
    this.setState({
      toggleDisplay: this.state.toggleDisplay === "hidden" ?  "visible" : "hidden", 
    })
  };

  render() {

    return (
      <div className="todo-item" onMouseEnter={this.toggleCloseDisplay} onMouseLeave={this.toggleCloseDisplay}>
        {this.props.todosStr}
        <div
          className="close-button"
          style={{ visibility: this.state.toggleDisplay }}
          onClick={() => this.props.closeClicked(this.props.todosStr)}
        ></div>
      </div>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        ["Grocery Shopping", "Get Peanut Butter", "Remember Trail Mix"],
        [
          "School Preparation",
          "Get 0.5in Pen",
          "5 Subject Notebook",
          "Some snacks...",
        ],
      ],
      projectInput: "Grocery Shopping",
      todoInput: "",
    };

    this.getProjectsList = this.getProjectsList.bind(this);
    this.getTodosList = this.getTodosList.bind(this);
    this.onChangeTodo = this.onChangeTodo.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onProjectClick = this.onProjectClick.bind(this);
    this.closeClicked = this.closeClicked.bind(this);
    this.projectCloseClicked = this.projectCloseClicked.bind(this);
  }

  projectCloseClicked(projectStr) {
    let updatedData = this.state.data;

    updatedData.forEach((arr, index) => {
      if (arr[0] === projectStr) {
        updatedData.splice(index, 1);
      }
    });

    this.setState({
      data: updatedData,
    });
  }

  closeClicked(todoStr) {
    let updatedData = this.state.data;

    updatedData.forEach((arr, index) => {
      arr.forEach((item, innerIndex) => {
        if (item === todoStr) {
          updatedData[index].splice(innerIndex, 1);
        }
      }) 
    });

    this.setState({
      data: updatedData,
    });
  }

  onProjectClick(projectName) {
    this.setState({
      projectInput: projectName,
    });
  }

  getProjectsList() {
    return this.state.data.map((arr) => (
      <Project
        onClick={() => this.onProjectClick(arr[0])}
        projectStr={arr[0]}
        projectCloseClicked={this.projectCloseClicked}
      />
    ));
  }

  getTodosList(e) {
    let currProjectArr = this.state.data.filter(
      (arr) => arr[0] === this.state.projectInput
    );
    if (currProjectArr.length === 1) {
      currProjectArr = currProjectArr[0].slice(1);
      return currProjectArr.map((todoItem) => <Todo closeClicked={this.closeClicked} todosStr={todoItem} />);
    } else {
      return [];
    }
  }

  onChangeTodo(e) {
    this.setState({ todoInput: e.target.value });
  }

  onChangeProject(e) {
    this.setState({ projectInput: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let savedIndex = -1;
    this.state.data.forEach((arr, index) => {
      if (arr[0] === this.state.projectInput) {
        savedIndex = index;
      }
    });

    let newData = this.state.data;

    if (savedIndex !== -1) {
      newData[savedIndex].push(this.state.todoInput);
    } else {
      let arr = [this.state.projectInput, this.state.todoInput];
      newData.push(arr);
    }

    this.setState({
      data: newData,
    });

    this.setState({ todoInput: "" });
  }

  render() {
    return (
      <Fragment>
        <TopNav />
        <h1
          style={{ color: "red", margin: "50px auto -80px auto" }}
          id="greeting"
        >
          {" "}
          In Progress{" "}
        </h1>
        <div className="container">
          <div className="top-bar">
            <form type="submit" className="todo-form-box">
              <input
                type="text"
                placeholder="Add todo"
                value={this.state.todoInput}
                onChange={this.onChangeTodo}
                required
              />
              <input
                type="text"
                placeholder="Add to a Project"
                value={this.state.projectInput}
                onChange={this.onChangeProject}
                required
              />
              <input type="submit" value="Submit" onClick={this.onSubmit} />
            </form>
          </div>
          <div className="todo-body">
            <div className="left-nav">
              <div className="title-bar">
                <h4 className="todo-titles">Projects</h4>
              </div>
              <div id="projects-list">{this.getProjectsList()}</div>
            </div>
            <div className="seperator"></div>
            <div className="right-nav">
              <div className="title-bar">
                <h4 className="todo-titles">Todos</h4>
              </div>
              <div key={shortid.generate()} id="todos-list">
                {this.getTodosList()}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TodoApp;
