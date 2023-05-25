import React, {useState} from 'react'
import './App.css'
import Product from './components/Product'
import Lightbox from './components/Lightbox'

import logo from './images/logo.svg'
import menu from './images/icon-menu.svg'
import cart from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'
import image1 from './images/image-product-1.jpg'
import image2 from './images/image-product-2.jpg'
import image3 from './images/image-product-3.jpg'
import image4 from './images/image-product-4.jpg'

function App() {
  const [imageArray, setImageArray] = useState([image1, image2, image3, image4])
  const [lightboxImageArray, setLightboxImageArray] = useState([])
  const [isToggledLightbox, setIsToggledLightbox] = useState(false)

  function toggleLightbox(array){
    setIsToggledLightbox(prevState => !prevState)
    // console.log(array)
    if(!isToggledLightbox){
      setLightboxImageArray(array)
    }
  }

  return (
    <main className={`flex flex-col w-full justify-center items-center ${isToggledLightbox ? "fixed" : ""}`}>
        <header className='flex justify-between h-24 items-center w-full md:w-[80%] px-4 md:px-0 border-b-2'>
          <div className='flex items-center'>
            <img src={menu} alt="menu" className='mr-4 h-4 md:hidden'/>
            <img src={logo} alt="logo" className='mr-8 cursor-pointer'/>
            <ul className='hidden md:flex gap-4 text-gray-400'>
              <li className='cursor-pointer'>Collections</li>
              <li className='cursor-pointer'>Men</li>
              <li className='cursor-pointer'>Women</li>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Contact</li>
            </ul>
          </div>
          <div className='flex items-center'>
            <img src={cart} alt="cart" className='cursor-pointer' />
            <img src={avatar} alt="avatar" className='h-8 md:h-12 ml-4 cursor-pointer'/>
          </div>
        </header>
        <Product 
          imageArray={imageArray}
          title="Fall Limited Edition Sneakers"
          description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          price={250.00}
          discount={50}
          toggleLightbox={toggleLightbox}
        />
        {
          isToggledLightbox ?
          <Lightbox
            toggleLightbox={toggleLightbox}
            imageArray={lightboxImageArray}
          /> 
          : ""
        }

    </main>
  )
}

export default App