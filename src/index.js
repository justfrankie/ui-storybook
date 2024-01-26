import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskManager from "./components/ui-components/modules/TaskManager/TaskManager";
import "./global.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error 404 not found</h1>,
  },
  {
    path: "/ui-storybook",
    element: <App />,
    errorElement: <h1>Error 404 not found</h1>,
  },
  {
    path: "/todos",
    element: <TaskManager />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
