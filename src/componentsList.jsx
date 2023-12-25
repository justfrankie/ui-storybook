import React from "react";
import Home from "./components/ui-components/Home";
import Buttons from "./components/ui-components/Buttons";
import InputForm from "./components/ui-components/modules/InputForm/InputForm";
import LoadingSpinner from "./components/ui-components/LoadingSpinner";

const componentsList = [
  { id: "home", name: "Home", Component: () => <Home /> },
  { id: "button", name: "Button", Component: () => <Buttons /> },
  { id: "input-form", name: "Input Form", Component: () => <InputForm /> },
  {
    id: "loading-spinner",
    name: "Loading Spinner",
    Component: () => <LoadingSpinner />,
  },
];

export default componentsList;
