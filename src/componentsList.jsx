import React from "react";
import Home from "./components/ui-components/Home";
import InputForm from "./components/ui-components/modules/InputForm/InputForm";
import LoadingSpinner from "./components/ui-components/LoadingSpinner";
import SearchBar from "./components/ui-components/SearchBar";
import ButtonList from "./components/ui-components/modules/ButtonLists/ButtonLists";

const componentsList = [
  { id: "home", name: "Home", Component: () => <Home /> },
  { id: "button", name: "Button", Component: () => <ButtonList /> },
  { id: "input-form", name: "Input Form", Component: () => <InputForm /> },
  {
    id: "loading-spinner",
    name: "Loading Spinner",
    Component: () => <LoadingSpinner />,
  },
  {
    id: "search-bar",
    name: "Search Bar",
    Component: () => (
      <SearchBar
        currentComponent={<div></div>}
        setSearchQuery={() => null}
        searchQuery={() => null}
        setCurrentComponent={() => <div></div>}
        componentsList={[]}
      />
    ),
  },
];

export default componentsList;
