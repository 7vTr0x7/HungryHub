import { Component } from "react";
import { UserClass } from "./index";

import UserContext from "../../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>

        
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        

        <UserClass name={"vTrox"} location={"pune"} social={"@vTrox"} />
      </div>
    );
  }
}

export default About;
