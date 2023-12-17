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
import HomePage from "./component/HomePage/HomePage";
import BrandProducts from "./component/BrandProducts/BrandProducts";
import ProDetails from "./component/ProdDetails/ProDetails";
import Update from "./component/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
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
        path: "/cart",
        element: (
          <Private>
            <Cart></Cart>
          </Private>
        ),
        loader: () =>
          fetch("https://brand-shop-server-nine-rho.vercel.app/cart"),
      },
      {
        path: "/brands/:brand_name",
        element: <BrandProducts></BrandProducts>,
        loader: () =>
          fetch("https://brand-shop-server-nine-rho.vercel.app/brands"),
      },
      {
        path: "/brand/:brand_name/:name/:id",
        element: (
          <Private>
            <ProDetails></ProDetails>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-nine-rho.vercel.app/brands/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            ` https://brand-shop-server-nine-rho.vercel.app/brands/${params.id}`
          ),
      },
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
