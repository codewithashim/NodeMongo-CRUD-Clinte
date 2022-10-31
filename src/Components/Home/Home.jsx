import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const users = useLoaderData();
  const [displayUser, setDisplayUser] = useState(users);

  // delete user
  const hendelDelete = (user) => {
    console.log("delete", user._id);
    const aggre = window.confirm("Are you sure?");
    if (aggre) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const newUsers = displayUser.filter((usr) => usr._id !== user._id);
            setDisplayUser(newUsers);
          }
        });
    }
  };
  // ========================== update 


  return (
    <>
      <section className="homeSection">
        <h2>Our Users : {displayUser.length}</h2>
        <div>
          {displayUser.map((user) => {
            return (
              <div className="userDetailsCard" key={user._id}>
                <div>
                  <h1>Name : {user.name}</h1>
                  <h1>Email : {user.email}</h1>
                  <h1>Adress : {user.adress}</h1>
                </div>

                <div>
                  <Link>
                    <button className="btn" onClick={() => hendelDelete(user)}>
                      Delete
                    </button>
                  </Link>
                  <Link to={`/update/${user._id}`}>
                    <button className="btn">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
