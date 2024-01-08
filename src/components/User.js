import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h1>{name}</h1>
      <h2>Pune,India</h2>
      <h3>@vTrox</h3>
    </div>
  );
};

export default User;
