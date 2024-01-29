import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import Resmenu from "./src/Components/Resmenu";
import { lazy } from "react";
// import Grocery from "./Components/Grocery";
const Applayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(() => import("./src/Components/Grocery"));
const routerp = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading Screen.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/res_menu",
        element: <Resmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const s = ReactDOM.createRoot(document.getElementById("root"));

s.render(<RouterProvider router={routerp} />); // Important Line
