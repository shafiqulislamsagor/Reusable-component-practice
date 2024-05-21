import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./layout/main/MainPage";
import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import Dashboard from "./layout/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/product',
        element:<Product/>
      }
    ]
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
