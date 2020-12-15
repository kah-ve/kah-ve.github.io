import React from "react";
import TopNav from '../TopNav/TopNav';
import "./GitHubApp.css"

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const output = `
    Bio: ${this.props.bio} <br />Public Repos: ${this.props.public_repos} \
    | Followers: ${this.props.followers}`;

    return (
      <div className="imgandcard">
        <div className="imgCard">
          <img src={this.props.avatar_url} alt=""/>
        </div>
        <div className="github-profile">
          <div className="info">
            <div className="name">{this.props.name}</div>
            <div className="company">
              <span className="textDesc">Bio:</span> {this.props.bio} <br />
              <span className="textDesc">Public Repos:</span> {this.props.public_repos} <br />
              <span className="textDesc">Followers:</span> {this.props.followers} <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      errorMessage: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
      const res = await fetch(
        `https://api.github.com/users/${this.state.username}`
      );
      if (res.status !== 404) {
        const jsonObj = await res.json();
        this.props.onSubmit(jsonObj);
        console.log(jsonObj);
        this.setState({
          username: "",
        });
        this.setState({errorMessage: ""});
      }
      else {
        // alert("API Fetch Failed.");
        this.setState({errorMessage: "API fetch failed. Enter a valid GitHub user."});
      }

  };

  onNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <>
      <form type="submit" className="git-form-box" onSubmit={this.handleSubmit}>
        <input
          className="inputGit"
          type="text"
          onChange={this.onNameChange}
          value={this.state.username}
          placeholder="GitHub username"
          required
        />
        <button className="buttonGit">Add User</button>
      </form>
      <div className="error-message">{this.state.errorMessage}</div>
      </>
    );
  }
}

class GitHubApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: myData,
    };
  }

  addNewProfile = (profileData) => {
    this.setState( prev => (
      {profiles: [...prev.profiles, profileData]}
    ))
  };

  render() {
    return (
      <>
        <TopNav />
        <div className="GitHubApp">
          <div id="titleApp">GitHub Cards</div>
          <Form onSubmit={this.addNewProfile} />
          <CardList data={this.state.profiles} />
        </div>
        <div id="help-note"><b>Note:</b> Add a GitHub username to include their information in this card.</div>
      </>
    );
  }
}

const CardList = (props) => {
  return (
    <>
      {props.data.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </>
  );
};

const myData = [
  {
    name: "John Smith",
    avatar_url:
      "https://raw.githubusercontent.com/kah-ve/kah-ve.github.io/gh-pages/thumbnaildemo.jpg",
    bio: "Software Engineer at Earth Labs",
    public_repos: 3,
    followers: 5
  },
];

export default GitHubApp;

