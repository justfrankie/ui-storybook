import React, { useState } from "react";
import ImageSelectionForms from "../components/ImageSelectionForms";
import ImageSlideShow from "../components/ImageSlideShow";

const ImageRenderer = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [favoriteCategory, setFavoriteCategory] = useState(null);
  const categories = [
    "Nature",
    "City",
    "Food",
    "Design",
    "Abstract",
    "People",
    "Sports",
  ];
  const src = `https://source.unsplash.com/random/250x250/?${currentCategory.toLowerCase()}`;
  const favoriteChangeHandler = (event) => {
    setFavoriteCategory(parseInt(event.target.value));
  };

  const resetFavoriteHandler = () => {
    setFavoriteCategory(null);
  };

  return (
    <>
      <ImageSlideShow
        src={src}
        isFavorite={currentCategory === favoriteCategory ? true : false}
      />
      <ImageSelectionForms
        categories={categories}
        favoriteCategory={favoriteCategory}
        onSelectFavorite={favoriteChangeHandler}
        onResetFavorite={resetFavoriteHandler}
      />
    </>
  );
};

export default ImageRenderer;
