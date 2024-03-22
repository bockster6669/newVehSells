import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root.jsx";
import Ads from "./pages/Ads.jsx";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";
import VehView from "./pages/VehView.jsx";
import CreateAd from "./pages/CreateAd";

import { loader as VehViewLoader } from "./pages/VehView.jsx";
import { loader as AdsLoader } from "./pages/Ads.jsx";

import { action as createAdAction } from "./pages/Ads";

const router = createBrowserRouter([
  {
    path: "/newVehSells",
    element: <Root />,
    children: [
      {
        index: true,
        path: "ads",
        element: <Ads />,
        loader: AdsLoader,
        action: createAdAction,
      },
      {
        path: "fav",
        element: <Favorites />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "Ads/create",
        element: <CreateAd />,
      },
      {
        path: "Ads/vehView/:adId",
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
