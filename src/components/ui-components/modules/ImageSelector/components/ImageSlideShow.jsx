import React, { useEffect, useState } from "react";
import styles from "./ImageSlideShow.module.css";
import LoadingSpinner from "../../../LoadingSpinner";

const ImageSlideShow = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setTimeout(() => {
      setImageLoaded(true);
    }, 2000);
  }, [src]);
  return !imageLoaded ? (
    <LoadingSpinner />
  ) : (
    <div>
      <img alt="Image Slideshow" src={src} className={styles.image} />
    </div>
  );
};

export default ImageSlideShow;
