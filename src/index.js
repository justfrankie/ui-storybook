import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Error404 = () => {
  return <h1>404 Error not found!</h1>;
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    element: <App />,
  },
  {
    path: "/home",
    errorElement: <Error404 />,
    element: <App />,
  },
  {
    path: "/docs",
    element: <div>hi</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
