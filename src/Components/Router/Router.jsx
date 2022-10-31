import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AddUsers from "../AddUsers/AddUsers";
import Layout from "../Layout/Layout";
import Update from "../Update/Update";

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
      {
        path: "/update/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/users/${params.id}`);
        },
        element: <Update></Update>,
      },
    ],
  },
]);

export default route;
