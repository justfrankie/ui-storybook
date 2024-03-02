import React from "react";

const ImageSlideShow = ({ src, isFavorite }) => {
  return (
    <div>
      <h1>Image Slideshow</h1>
      <img alt="Image Slideshow" src={src} />
    </div>
  );
};

export default ImageSlideShow;
