import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };

    console.log("child constructor");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/7vTr0x7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("child componentDidMount");
  }
  render() {
    console.log("child render");
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{login}</h3>
      </div>
    );
  }
}

export default UserClass;
