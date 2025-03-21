import React from 'react'
import Image from "../image/Image.jsx";
const Gallery = () => {
    const images = [
        "https://img.freepik.com/free-photo/businessman-thinking-isolated-white-background_1368-4314.jpg?t=st=1741721871~exp=1741725471~hmac=36b2794c58b3fdaba14f65fdf51f23bd96897dc36b2f6e93fa4a317b2611530f&w=996",
        "https://img.freepik.com/free-photo/businessman-thinking-isolated-white-background_1368-4314.jpg?t=st=1741721871~exp=1741725471~hmac=36b2794c58b3fdaba14f65fdf51f23bd96897dc36b2f6e93fa4a317b2611530f&w=996",
        "https://img.freepik.com/free-photo/businessman-thinking-isolated-white-background_1368-4314.jpg?t=st=1741721871~exp=1741725471~hmac=36b2794c58b3fdaba14f65fdf51f23bd96897dc36b2f6e93fa4a317b2611530f&w=996",
        "https://img.freepik.com/free-photo/businessman-thinking-isolated-white-background_1368-4314.jpg?t=st=1741721871~exp=1741725471~hmac=36b2794c58b3fdaba14f65fdf51f23bd96897dc36b2f6e93fa4a317b2611530f&w=996",
        "https://img.freepik.com/free-photo/businessman-thinking-isolated-white-background_1368-4314.jpg?t=st=1741721871~exp=1741725471~hmac=36b2794c58b3fdaba14f65fdf51f23bd96897dc36b2f6e93fa4a317b2611530f&w=996",
        "https://img.freepik.com/free-photo/businessman-thinking-isolated-white-background_1368-4314.jpg?t=st=1741721871~exp=1741725471~hmac=36b2794c58b3fdaba14f65fdf51f23bd96897dc36b2f6e93fa4a317b2611530f&w=996"
      ];
  return (
    <div id="Gallery" className="flex flex-col justify-center items-center p-20">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default Gallery