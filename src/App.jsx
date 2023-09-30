import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Prediction from "./pages/Prediction";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/prediction",
          element: <Prediction />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
