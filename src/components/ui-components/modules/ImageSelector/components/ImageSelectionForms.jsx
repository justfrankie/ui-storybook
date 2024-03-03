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
          <select
            value={currentCategory}
            onChange={setCurrentCategory}
            style={{
              border: "1px solid #1a2b32",
              color: "#1a2b32",
              borderRadius: "5px",
              padding: " 5px 10px",
            }}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={() => favoriteChangeHandler(currentCategory)}
            style={{
              border: "none",
              backgroundColor: "inherit",
              margin: "0 5px",
            }}
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
