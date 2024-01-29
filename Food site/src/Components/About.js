import User from "./User";
import Userclass from "./Userclass";
import React from "react";

class About extends React.Component {
  // constructor() {
  //   // passing a parameter in class based component.
  //   super();
  // }

  // componentDidMount() {}

  render() {
    return (
      <div>
        <Userclass name={"first"} />
      </div>
    );
  }
}

// const About = () => {

//   return (
//     <div>
//       <Userclass name={"ujjwal mishra"} emailid={"mujjwal769@gmail.com"} />
//     </div>
//   );
// };
export default About;
