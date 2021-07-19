import React from "react";
import NavBar from "./Home/NavBar";

const User = ({ user, setUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username: "grumpy19" });
  };

  console.log("logged in as", user.username);
  return (
    <div>
      <h2 className="header-container"> Log in </h2>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input type="text" value="grumpy19" readOnly></input>
        <input type="text" value="*********" readOnly></input>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default User;
