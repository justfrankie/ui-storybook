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
    rawJsx: `
    <Button
    text="Primary"
    theme="primary"
    />
    <Button
    text="Secondary"
    theme="secondary"
    />
    <Button
    text="Accent"
    theme="accent"
    />`,
  },
  {
    id: "input-form",
    name: "Input Form",
    Component: () => <InputForm />,
    rawJsx: `<InputForm
    addItem={addItem}
    handleSubmit={handleSubmit}
    handleDelete={handleDelete}
    handleReset={handleReset}
    />`,
  },
  {
    id: "loading-spinner",
    name: "Loading Spinner",
    Component: () => <LoadingSpinnerList />,
    rawJsx: `<LoadingSpinner/>
    <LoadingSpinner
    size="small"
    text="Loading Text"
    />`,
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
        currentComponent={Component}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        setCurrentComponent={setCurrentComponent}
        componentsList={componentsList}
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
    rawJsx: `<GridWrapper>
    {children}
    </GridWrapper>`,
  },
  {
    id: "styled-panel",
    name: "Styled Panels",
    Component: () => <StyledPanelDemo />,
    rawJsx: `<StyledPanel theme="primary">Panel 1</StyledPanel>
    <StyledPanel theme="primary">Panel 2</StyledPanel>
    <StyledPanel theme="primary">Panel 3</StyledPanel>
    
    <StyledPanel theme="secondary">Panel 1</StyledPanel>
    <StyledPanel theme="secondary">Panel 2</StyledPanel>
    <StyledPanel theme="secondary">Panel 3</StyledPanel>
    
    <StyledPanel><p>Lorem Ipsum is...</p></StyledPanel>
    `,
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
