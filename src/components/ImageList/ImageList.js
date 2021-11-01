import "./ImageList.css";
import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageList = (props) => {
  const images = props.images.map(({ id, ...image }) => (
    <ImageCard image={image} key={id} />
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;
