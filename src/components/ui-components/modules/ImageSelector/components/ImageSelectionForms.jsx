import React from "react";
import Button from "../../../Button";

const ImageSelectionForms = ({
  categories,
  currentCategory,
  setCurrentCategory,
  isFavorite,
  favoriteChangeHandler,
  resetSelectHandler,
}) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <label>
        Choose a photo category:
        <div
          style={{
            margin: "20px 0",
            display: "flex",
            width: "100px",
            margin: "10px auto",
          }}
        >
          <select value={currentCategory} onChange={setCurrentCategory}>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={() => favoriteChangeHandler(currentCategory)}
            style={{ border: "none", backgroundColor: "inherit" }}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>
      </label>
      <Button onClick={resetSelectHandler}>Reset Favorite</Button>
    </div>
  );
};

export default ImageSelectionForms;
