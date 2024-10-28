import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Men from "./Pages/Men.jsx";
import Women from "./Pages/Women.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Home", element: <Home /> },
      { path: "/Women", element: <Women /> },
      { path: "/Men", element: <Men /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
