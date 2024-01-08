import { Component } from "react";
import { UserClass } from "./index";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>

        <UserClass name={"vTrox"} location={"pune"} social={"@vTrox"} />
      </div>
    );
  }
}

export default About;
