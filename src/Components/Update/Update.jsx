import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const hendelUpdate = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`http://localhost:5000/update/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated Successfully");
          console.log(data);
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
      <form action="" onSubmit={hendelUpdate} className="addUserForm">
        <input
          type="text"
          onBlur={hendelInputBlur}
          name="name"
          defaultValue={storedUser.name}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="text"
          onBlur={hendelInputBlur}
          defaultValue={storedUser.adress}
          name="adress"
          placeholder="Enter Your Adress"
        />
        <br />
        <input
          type="email"
          onBlur={hendelInputBlur}
          defaultValue={storedUser.email}
          name="email"
          placeholder="Enter Email"
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
