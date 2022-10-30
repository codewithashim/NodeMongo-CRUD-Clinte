import React from "react";
import { useState } from "react";
import "./AddUser.css";

const AddUsers = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const hendelOnsubmit = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User Added Successfully");
        }
      });
  };
  const hendelInputBlur = (event) => {
    const value = event.target.value;
    const fild = event.target.name;
    const newUser = { ...user };
    newUser[fild] = value;
    setUser(newUser);
    console.log(value, fild);
  };

  return (
    <div>
      <form action="" onSubmit={hendelOnsubmit} className="addUserForm">
        <input
          type="text"
          onBlur={hendelInputBlur}
          name="name"
          placeholder="Enter Name"
        />
        <br />
        <input
          type="email"
          onBlur={hendelInputBlur}
          name="email"
          placeholder="Enter Email"
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUsers;
