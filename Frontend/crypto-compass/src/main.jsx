import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
 createBrowserRouter,
 createRoutesFromElements,
 Route,
 RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import Login from "./login/Login.jsx";
import { BrowserRouter } from "react-router-dom";
import Exchange from "./exchange/Exchange.jsx";

// const router = createBrowserRouter([
//  {
//   path: "/",
//   element: <Layout />,
//   children: [
//    {
//     path: "",
//     element: <Home />,
//    },
//    {
//     path: "portfolio",
//     element: <Portfolio />,
//    },
//    {
//     path: "login",
//     element: <Login />,
//    },
//   ],
//  },
// ]);

const router1 = createBrowserRouter(
 createRoutesFromElements(<Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="login" element={<Login />}/>
        <Route path="exchange" element={<Exchange />}/>
 </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  {/* <BrowserRouter>
        <App/>
  </BrowserRouter> */}
  <RouterProvider router={router1} />
 </React.StrictMode>
);
