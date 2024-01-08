import { Component } from "react";
import { UserClass } from "./index";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent did Mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>

        <UserClass name={"first"} location={"pune"} social={"@vTrox"} />
        <UserClass name={"second"} location={"pune"} social={"@kimshor"} />
        <UserClass name={"third"} location={"pune"} social={"@kimshor"} />
        <UserClass name={"fourth"} location={"pune"} social={"@kimshor"} />
      </div>
    );
  }
}

export default About;
