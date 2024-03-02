import React from "react";
import Button from "../../../Button";

const ImageSelectionForms = ({
  categories,
  favoriteCategory,
  onSelectFavorite,
  onResetFavorite,
}) => {
  return (
    <div>
      <label>
        Choose Your Favorite Photo Category:
        <select value={favoriteCategory} onChange={onSelectFavorite}>
          {categories.map((category, index) => (
            <option key={index} value={index}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <Button onClick={onResetFavorite}>Reset Favorite</Button>
    </div>
  );
};

export default ImageSelectionForms;
