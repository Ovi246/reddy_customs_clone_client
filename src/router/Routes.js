import Slideshow from "../components/Slideshow";
import Home from "../pages/Home";
import Layout from "./../layout/Layout";
import Navbar from "./../components/Navbar";

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
]);

export default router;
