import React, { useState } from 'react';

const Gallery = () => {
  const navStyle = {
    backgroundImage: `url('https://minare.nitrkl.ac.in/static/media/banner-bg.cc1273af450504afe755.png')`,
  };

  // Array of gallery images with proper alt text
  const galleryImages = Array(27).fill({
    src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314838/Gallery/rzgxvzww7bejisr4nvk0.jpg",
    alt: "Gallery Image" // Replace with appropriate description for each image
  });

  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const handleImageError = (index) => {
    console.error(`Failed to load image at index ${index}`);
    // You could set a placeholder image here if needed
  };

  return (
    <div className='grid-rows-4 grid grid-cols-3 gap-2 pb-5 pt-40' style={navStyle}>
      {galleryImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`${image.alt} ${index + 1}`}
          className={`w-full h-auto rounded-lg shadow-md transition-opacity duration-300 ${
            loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => handleImageLoad(index)}
          onError={() => handleImageError(index)}
        />
      ))}
    </div>
  );
};

export default Gallery;
