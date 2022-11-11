import Slideshow from "../components/Slideshow";
import Home from "../pages/Home";
import Layout from "./../layout/Layout";
import Navbar from "./../components/Navbar";
import Login from "../pages/Login";
import Register from "./../pages/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Navbar />,
      },
    ],
  },
  {
    path: "/*",
    element: <Layout></Layout>,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
