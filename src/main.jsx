import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root.jsx";
import Error from "./pages/Error";

import Ads from "./pages/Ads.jsx";
import { loader as AdsLoader } from "./pages/Ads.jsx";

import Favorites from "./pages/Favorites.jsx";

import Profile from "./pages/Profile.jsx";

import VehView from "./pages/VehView.jsx";
import { loader as VehViewLoader } from "./pages/VehView.jsx";

import CreateAd from "./pages/CreateAd";
import {action as CreateAdAction } from "./pages/CreateAd.jsx";

import EditAd from "./pages/EditAd";
import { loader as EditAdLoader, action as EditAdAction } from "./pages/EditAd.jsx";

import MyAds from "./pages/MyAds.jsx";
import { loader as MyAdsLoader } from "./pages/MyAds.jsx";

const router = createBrowserRouter([
  {
    path: "/newVehSells",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            path: "ads",
            element: <Ads />,
            loader: AdsLoader,
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
            path: "myads",
            element: <MyAds />,
            loader: MyAdsLoader,
          },
          {
            path: "myads?/vehView/:adId",
            element: <VehView />,
            loader: VehViewLoader,
          },
          {
            path: "Ads/create",
            element: <CreateAd />,
            action: CreateAdAction,
          },
          {
            path: "myads/edit/:adId",
            element: <EditAd />,
            loader: EditAdLoader,
            action: EditAdAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
