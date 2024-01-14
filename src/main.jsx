import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Login/Login";
import SignIn from "./Signin/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'signin',
    element:<SignIn/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>
);
