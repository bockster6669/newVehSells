import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Root from "./Root.jsx";
import Home from "./pages/Home.jsx";
import Favourites from "./pages/Favourites.jsx";
import Profile from "./pages/Profile.jsx";
import VehView from "./pages/VehView.jsx";
import { loader as VehViewLoader } from "./pages/VehView.jsx";
const router = createBrowserRouter([
  {
    path: "/newVehSells",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "fav",
        element: <Favourites />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "vehView/:adId",
        element: <VehView />,
        loader: VehViewLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
