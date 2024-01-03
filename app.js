import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="title" id="title">
    Title
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <h1 className="header" id="heading">
      hello world
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
