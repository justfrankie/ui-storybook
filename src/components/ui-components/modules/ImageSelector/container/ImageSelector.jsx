import React, { useState } from "react";
import ImageSelectionForms from "../components/ImageSelectionForms";
import ImageSlideShow from "../components/ImageSlideShow";
import StyledPanel from "../../../StyledPanel";
const categories = [
  "Nature",
  "City",
  "Food",
  "Design",
  "Abstract",
  "People",
  "Sports",
];

const ImageSelector = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [favoriteCategory, setFavoriteCategory] = useState(null);
  const isFavorite = currentCategory === favoriteCategory ? true : false;
  const src = `https://source.unsplash.com/random/250x250/?${currentCategory.toLowerCase()}`;
  const favoriteChangeHandler = (currentCategory) => {
    setFavoriteCategory(
      currentCategory === favoriteCategory ? null : currentCategory
    );
  };

  const resetSelectHandler = () => {
    setFavoriteCategory(null);
  };

  return (
    <div style={{ padding: "15px" }}>
      <StyledPanel theme="primary">
        <ImageSlideShow src={src} />
        <ImageSelectionForms
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={(event) => setCurrentCategory(event.target.value)}
          resetSelectHandler={resetSelectHandler}
          isFavorite={isFavorite}
          favoriteChangeHandler={favoriteChangeHandler}
        />
      </StyledPanel>
    </div>
  );
};

export default ImageSelector;
