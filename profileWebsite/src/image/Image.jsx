import React from "react";

const Image = ({ src, alt }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
};

export default Image;
