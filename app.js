import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = <h1>Hey Namaste!</h1>;

const Title = () => <h1>My name is ujjwal mishra</h1>;

const Heading = () => (
  <div>
    {jsxheading}
    {Title()}
    {<Title />}
    {<Title></Title>}
    <h2>Hello</h2>
  </div>
);
const s = ReactDOM.createRoot(document.getElementById("root"));

s.render(<Heading />);
