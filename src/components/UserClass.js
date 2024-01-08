import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location, social } = this.props;

    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>count : {count}</h1>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          inc
        </button>

        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{social}</h3>
      </div>
    );
  }
}

export default UserClass;
