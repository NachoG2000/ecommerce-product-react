import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid';

import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import cart from '../images/icon-cart-white.svg'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'

function Product(props) {
    const [imageArray, setImageArray] = useState(props.imageArray)
    const [selectedImage, setSelectedImage] = useState(imageArray[0])
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [shoppingItems, setShoppingItems] = useState(0)

    const imageElements = imageArray.map(image => <div key={image} className={`${selectedImage === image ? "border-2 md:border-4 border-orange-400 rounded-2xl" : ""}`}><img src={image} alt={image} className={`rounded-xl hover:opacity-40 cursor-pointer ${selectedImage === image ? "opacity-40" : ""}`} onClick={() => setSelectedImage(image)}/></div>)

    function addProductToCart(){
        props.addProductToCart({image: imageArray[0], title: props.title, price: props.price - props.price*props.discount/100, amount: shoppingItems, id: nanoid()})
        setShoppingItems(0)
    }
    function changeSelectedImage(button) {
        if (button === 'next') {
          setSelectedImageIndex(prevState => prevState + 1);
        }
        if (button === 'prev') {
          setSelectedImageIndex(prevState => prevState - 1);
        }
      }
      
      useEffect(() => {
        setSelectedImage(imageArray[selectedImageIndex]);
      }, [selectedImageIndex]);

    return (
        <div className='sm:grid sm:grid-cols-2 lg:w-[80%] sm:p-12 gap-12 lg:gap-24 2xl:gap-48'>
            <div className='w-full sm:hidden'>
                <div className='absolute top-60 flex justify-between w-full px-3'>
                    <button onClick={() => changeSelectedImage('prev')}><img src={previous} alt="previous" className={`bg-white rounded-full py-2 px-[11px] ${selectedImageIndex > 0 ? "" : "hidden"}`} /></button>
                    <button onClick={() => changeSelectedImage('next')}><img src={next} alt="next" className={`bg-white rounded-full py-2 px-[10.5px] ${selectedImageIndex < imageArray.length - 1 ? "" : "hidden"}`} /></button>
                </div>
                <img src={selectedImage} alt="image" className='h-80 w-full object-cover'/>
            </div>
            <div className='2xl:py-48 hidden sm:block'>
                <img src={selectedImage} alt="image" className='rounded-2xl cursor-pointer' onClick={() => props.toggleLightbox(imageArray)}/>
                <div className='grid grid-rows-1 grid-cols-4 gap-3 mt-3'>
                    {imageElements}
                </div>
            </div>
            <div className='flex flex-col justify-center p-8 sm:p-0 gap-y-2 md:gap-y-4 2xl:gap-y-6'>
                <h4 className='text-orange-400 font-bold text-lg text-start'>SNEAKER COMPANY</h4>
                <h2 className='text-4xl xl:text-6xl font-bold'>{props.title}</h2>
                <p className='text-gray-400'>{props.description}</p>
                <div className='flex flex-row justify-between items-center sm:flex-col sm:justify-start sm:items-start'>
                    <div className='flex gap-4 items-center'>
                        <h2 className='text-3xl font-bold'>${props.price - props.price*props.discount/100}.00</h2>
                        <div className='bg-orange-100 text-orange-400 font-bold h-min px-2 rounded-md'>{props.discount}%</div>
                    </div>
                    <h4 className='text-gray-400 line-through'>${props.price}.00</h4>
                </div>
                <div className='flex gap-4 flex-col sm:grid sm:grid-cols-5 sm:gap-2'>
                    <div className='grid grid-cols-3 items-center w-full sm:col-span-2'>
                        <button className='bg-slate-100 h-10 md:h-14 px-auto rounded-l-lg flex items-center justify-center' onClick={() => setShoppingItems(prevState => prevState > 0 ? prevState - 1 : 0)}><img src={minus} alt="minus" /></button>
                        <h3 className='bg-slate-100 h-10 md:h-14 px-4 text-center font-bold flex items-center justify-center'>{shoppingItems}</h3>
                        <button className='bg-slate-100 h-10 md:h-14 px-auto rounded-r-lg flex items-center justify-center' onClick={() => setShoppingItems(prevState => prevState + 1)}><img src={plus} alt="plus" /></button>
                    </div>
                    <button className='flex items-center justify-center gap-4 sm:col-span-3 h-10 md:h-14 rounded-lg text-white text-sm font-semibold bg-orange-500 hover:bg-orange-600 py-2 px-6 focus:outline-none focus:shadow-outline'
                            onClick={addProductToCart}
                    >
                        <img src={cart} alt="cart" className='h-4'/> Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product