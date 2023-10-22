import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Main from "./Main/Main";

import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import AuthProvider from "./component/AuthProvider/AuthProvider";
import Add from "./component/Add/Add";
import Private from "./component/Private/Private";
import Cart from "./component/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <Private>
            <Add></Add>
          </Private>
        ),
      },
      {
        
          path:'/cart',
          element:<Private><Cart></Cart>
        </Private>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
