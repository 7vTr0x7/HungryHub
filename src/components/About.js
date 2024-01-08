import { User, UserClass } from "./index";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"vTrox"} />
      <UserClass name={"vTrox"} location={"pune"} social={"@vTrox"} />
    </div>
  );
};

export default About;
