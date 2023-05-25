import React, { useState } from 'react';

import cross from '../images/icon-close2.svg'

function Lightbox(props) {
  const [imageArray, setImageArray] = useState(props.imageArray);
  const [selectedImage, setSelectedImage] = useState(imageArray[0]);
  
  console.log(imageArray)

  const imageElements = imageArray.map((image) => (
      <img
        src={image}
        alt={image}
        className={`rounded-xl cursor-pointer h-full ${selectedImage === image ? 'border-4 border-orange-400 rounded-xl' : ''}`}
        onClick={() => setSelectedImage(image)}
      />
  ));

  return (
    <div className='absolute h-[100vh] top-0 w-full'>
      <div className='h-full bg-black bg-opacity-80' onClick={() => props.toggleLightbox([])}></div>
      <div className='h-[60%] absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col'>
        <div className='flex justify-end w-full md:w-[90%] lg:w-[80%] 2xl:w-full cursor-pointer' onClick={() => props.toggleLightbox([])}><img src={cross} alt="close" className='h-8 mb-2'/></div>
        <img src={selectedImage} alt="" className='rounded-2xl h-full' />
        <div className='h-[50%] md:w-[80%] lg:w-[60%] grid grid-rows-1 grid-cols-4 gap-3 mt-3'>
          {imageElements}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
