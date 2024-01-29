import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        na: "Dummy",
      },
    };
  }
  async componentDidMount() {
    const d = await fetch("https://api.github.com/users/Ujjwal1220");
    const json = await d.json();
    console.log(json);
    this.setState({
      userinfo: json,
    });
  }
  render() {
    // console.log(this.state.userinfo.name);state keyword is important
    const { name, location, avatar_url } = this.state.userinfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}, Raebareli</h3>
      </div>
    );
  }
}

export default Userclass;

/***
 * constructor is called(dummy data)
 *
 * render(dummy)
 * -----<HTML DUMMY>
 *
 * component did mount
 * ------ <API> Call
 * -------<This.setstate>-> state variable is updated
 *
 *---- update Cycle start
    render(api data)
    <HTML> with data

    component did update

 */
