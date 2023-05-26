import React, {useState, useEffect} from 'react'
import './App.css'
import Product from './components/Product'
import Lightbox from './components/Lightbox'
import Menu from './components/Menu'
import CartMenu from './components/CartMenu'

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
  const [cartProductsArray, setCartProductsArray] = useState([])
  const [totalCartProducts, setTotalCartProducts] = useState(0)

  const [hasAlreadyPurchased, setHasAlreadyPurchased] = useState(false)
  const [isToggledLightbox, setIsToggledLightbox] = useState(false)
  const [isToggledMenu, setIsToggledMenu] = useState(false)
  const [isToggledCart, setIsToggledCart] = useState(false)

  console.log(totalCartProducts)

  function addProductToCart(product){
    if(product.amount > 0){
      setCartProductsArray(prevArray => [...prevArray, {image: product.image, title: product.title, price: product.price, amount: product.amount, id: product.id}])
    }
  }
  function deleteCartItem(id){
    setCartProductsArray(prevArray => prevArray.filter(item => item.id !== id))
  }
  function updateTotalCartProducts() {
    const count = cartProductsArray.reduce((total, product) => total + product.amount, 0);
    setTotalCartProducts(count);
  }
  function checkout(){
    setHasAlreadyPurchased(true)
    setCartProductsArray([])
  }

  function toggleLightbox(array){
    setIsToggledLightbox(prevState => !prevState)
    if(!isToggledLightbox){
      setLightboxImageArray(array)
    }
  }
  function toggleMenu(){
    setIsToggledMenu(prevState => !prevState)
  }
  function toggleCart(){
    setIsToggledCart(prevState => !prevState)
  }

  useEffect(() => {
    updateTotalCartProducts()
    if(cartProductsArray.length > 0 || !isToggledCart){
      setHasAlreadyPurchased(false)
    }
  }, [cartProductsArray, isToggledCart])
  

  return (
    <main className={`flex flex-col w-full justify-center items-center ${isToggledLightbox ? "fixed" : ""} ${isToggledMenu ? "fixed" : ""} ${isToggledCart ? "fixed" : ""}`}>
        <header className='flex justify-between h-24 items-center w-full md:w-[80%] px-4 md:px-0 border-b-2'>
          <div className='flex items-center'>
            <img src={menu} alt="menu" className='mr-4 h-4 md:hidden' onClick={() => setIsToggledMenu(true)}/>
            <img src={logo} alt="logo" className='mr-6 cursor-pointer'/>
            <ul className='hidden md:flex gap-4 text-gray-400'>
              <li className='cursor-pointer hover:text-orange-500'>Collections</li>
              <li className='cursor-pointer hover:text-orange-500'>Men</li>
              <li className='cursor-pointer hover:text-orange-500'>Women</li>
              <li className='cursor-pointer hover:text-orange-500'>About</li>
              <li className='cursor-pointer hover:text-orange-500'>Contact</li>
            </ul>
          </div>
          <div className="flex items-center relative">
            <span className={`absolute top-0 right-10 md:top-2 md:right-14 bg-orange-500 text-white rounded-full w-5 h-3 flex items-center justify-center text-xs font-bold ${totalCartProducts > 0 ? "" : "hidden"}`}>{totalCartProducts}</span>
            <img src={cart} alt="cart" className="cursor-pointer" onClick={() => setIsToggledCart(true)}/>
            <img src={avatar} alt="avatar" className="h-8 md:h-12 ml-6 cursor-pointer hover:border-2 hover:border-orange-500 hover:rounded-full" />
          </div>
        </header>
        {
          isToggledCart ?
          <CartMenu toggleCart={toggleCart} cartProductsArray={cartProductsArray} deleteCartItem={deleteCartItem} checkout={checkout} hasAlreadyPurchased={hasAlreadyPurchased}/> : 
          ""
        }
        {
          isToggledMenu ?
          <Menu toggleMenu={toggleMenu}/> :
          ""
        }
        <Product 
          imageArray={imageArray}
          title="Fall Limited Edition Sneakers"
          description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          price={250.00}
          discount={50}
          toggleLightbox={toggleLightbox}
          addProductToCart={addProductToCart}
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