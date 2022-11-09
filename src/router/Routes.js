import Layout from "./../layout/Layout";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
    ],
  },
]);

export default router;
