import React from "react";
import "./App.css";

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
          <img src={this.props.avatar_url} />
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
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
      const res = await fetch(
        `https://api.github.com/users/${this.state.username}`
      );
      if (res.status != "404") {
        const jsonObj = await res.json();
        this.props.onSubmit(jsonObj);
        console.log(jsonObj);
        this.setState({
          username: "",
        });
      }
      else {
        console.log("API Fetch Failed.");
      }

  };

  onNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <form type="submit" className="formBox" onSubmit={this.handleSubmit}>
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
    );
  }
}

class App extends React.Component {
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
        <div className="App">
          <div id="titleApp">GitHub Cards</div>
          <Form onSubmit={this.addNewProfile} />
          <CardList data={this.state.profiles} />
        </div>
      </>
    );
  }
}

export default App;

const CardList = (props) => {
  let i = 0;
  return (
    <>
      {props.data.map((profile) => (
        <Card key={i++} {...profile} />
      ))}
    </>
  );
};

const myData = [
  {
    name: "John Smith",
    avatar_url:
      "https://wallpaperhd.wiki/wp-content/uploads/4k-wallpaper-minimalist-the-witcher-3-wild-hunt-minimalist-uhdpaper.com-4k-5.1321-wp.thumbnail.jpg",
    bio: "Software Engineer at Earth Labs",
    public_repos: 3,
    followers: 5
  },
];
