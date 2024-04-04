import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root.jsx";
import Error from "./pages/Error";

import Ads from "./pages/Ads.jsx";

import Favorites from "./pages/Favorites.jsx";

import Profile from "./pages/Profile.jsx";

import VehView from "./pages/VehView.jsx";
import { loader as VehViewLoader } from "./pages/VehView.jsx";

import CreateAd from "./pages/CreateAd";
import { action as CreateAdAction } from "./pages/CreateAd.jsx";

import EditAd from "./pages/EditAd";
import {
  loader as EditAdLoader,
  action as EditAdAction,
} from "./pages/EditAd.jsx";

import MyAds from "./pages/MyAds.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            path: "ads",
            element: <Ads />,
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
          },
          {
            path: "ads?/myads?/VehView/:adId",
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
