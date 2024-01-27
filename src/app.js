import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import UserContext from "../utils/UserContext";

import {
  Body,
  Header,
  Contact,
  Error,
  ResMenu,
  Shimmer,
} from "./components/index";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    data = {
      userName: "vTrox",
    };

    setUserName(data.userName);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "userName" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
