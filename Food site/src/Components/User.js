import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Count:-{count}</h2>
      <h2>Count2:-{count2}</h2>
      <h2>{props.name}</h2>
      <h3>mujjwal769@gmail.com</h3>
      <h4>Raebareli</h4>
    </div>
  );
};

export default User;
