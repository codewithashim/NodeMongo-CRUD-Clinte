import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AddUsers from "../AddUsers/AddUsers";
import Layout from "../Layout/Layout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("http://localhost:5000/users");
        },
        element: <Home></Home>,
      },
      {
        path: "/user/add",
        element: <AddUsers></AddUsers>,
      },
    ],
  },
]);

export default route;
