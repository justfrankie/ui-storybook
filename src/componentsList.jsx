import React from "react";
import Home from "./components/ui-components/Home";
import InputForm from "./components/ui-components/modules/InputForm/InputForm";
import SearchBar from "./components/ui-components/SearchBar";
import ButtonList from "./components/ui-components/modules/ButtonLists/ButtonLists";
import LoadingSpinnerList from "./components/ui-components/modules/LoadingSpinnerList/LoadingSpinnerList";
import MediaDashboard from "./components/ui-components/modules/MediaDashboard/MediaDashboard";
import GridWrapper from "./components/ui-components/modules/GridWrapper/GridWrapper";
import StyledPanelDemo from "./components/ui-components/modules/StyledPanelDemo/StyledPanelDemo";
import ImageSelector from "./components/ui-components/modules/ImageSelector/container/ImageSelector";

const componentsList = [
  {
    id: "home",
    name: "Home",
    Component: () => <Home />,
    rawJsx: null,
  },
  {
    id: "button",
    name: "Button",
    Component: () => <ButtonList />,
    rawJsx: `<ButtonList />`,
  },
  {
    id: "input-form",
    name: "Input Form",
    Component: () => <InputForm />,
    rawJsx: `<InputForm />`,
  },
  {
    id: "loading-spinner",
    name: "Loading Spinner",
    Component: () => <LoadingSpinnerList />,
    rawJsx: `<LoadingSpinnerList />`,
  },
  {
    id: "search-bar",
    name: "Search Bar",
    Component: () => (
      <SearchBar
        currentComponent={<div></div>}
        setSearchQuery={() => null}
        searchQuery={""}
        setCurrentComponent={() => <div></div>}
        componentsList={[]}
      />
    ),
    rawJsx: `<SearchBar
        currentComponent={<div></div>}
        setSearchQuery={() => null}
        searchQuery={() => null}
        setCurrentComponent={() => <div></div>}
        componentsList={[]}
      />`,
  },
  {
    id: "media-dashboard",
    name: "Media Dashboard",
    Component: () => <MediaDashboard />,
    rawJsx: `<MediaDashboard />`,
  },
  {
    id: "grid-wrapper",
    name: "Responsive Grid Wrapper",
    Component: () => <GridWrapper />,
    rawJsx: `<GridWrapper />`,
  },
  {
    id: "styled-panel",
    name: "Styled Panels",
    Component: () => <StyledPanelDemo />,
    rawJsx: `<StyledPanelDemo />`,
  },
  {
    id: "image-selector",
    name: "Image Selector",
    Component: () => <ImageSelector />,
    rawJsx: `<StyledPanel theme="primary">
    <ImageSlideShow src={src} />
    <ImageSelectionForms
      categories={categories}
      currentCategory={currentCategory}
      setCurrentCategory={(event) => setCurrentCategory(event.target.value)}
      resetSelectHandler={resetSelectHandler}
      isFavorite={isFavorite}
      favoriteChangeHandler={favoriteChangeHandler}
    />
  </StyledPanel>`,
  },
];

export default componentsList;
