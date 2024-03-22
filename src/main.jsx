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
import MyAds from "./pages/MyAds.jsx";
import { loader as VehViewLoader } from "./pages/VehView.jsx";
import { loader as AdsLoader } from "./pages/Ads.jsx";
import { loader as MyAdsLoader } from "./pages/MyAds.jsx";
import { loader as CreateAdLoader } from "./pages/CreateAd.jsx";



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
        path: "Ads/create/:id?",
        element: <CreateAd />,
        loader: CreateAdLoader,
      },
      {
        path: "Ads/vehView/:adId",
        element: <VehView />,
        loader: VehViewLoader,
      },
      {
        path: "myads",
        element: <MyAds />,
        loader: MyAdsLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
