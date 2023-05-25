import React, {useState} from 'react'

import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import cart from '../images/icon-cart-white.svg'

function Product(props) {
    const [imageArray, setImageArray] = useState(props.imageArray)
    const [selectedImage, setSelectedImage] = useState(imageArray[0])
    const [shoppingItems, setShoppingItems] = useState(0)

    const imageElements = imageArray.map(image => <div key={image} className={`${selectedImage === image ? "border-2 md:border-4 border-orange-400 rounded-2xl" : ""}`}><img src={image} alt={image} className={`rounded-xl hover:opacity-40 cursor-pointer ${selectedImage === image ? "opacity-40" : ""}`} onClick={() => setSelectedImage(image)}/></div>)

    return (
        <div className='sm:grid sm:grid-cols-2 lg:w-[80%] p-12 gap-12 lg:gap-24 2xl:gap-48'>
            <div className='2xl:py-48'>
                <img src={selectedImage} alt="" className='rounded-2xl cursor-pointer' onClick={() => props.toggleLightbox(imageArray)}/>
                <div className='grid grid-rows-1 grid-cols-4 gap-3 mt-3'>
                    {imageElements}
                </div>
            </div>
            <div className='flex flex-col justify-center gap-y-2 md:gap-y-4 2xl:gap-y-6'>
                <h4 className='text-orange-400 font-bold text-lg text-start'>SNEAKER COMPANY</h4>
                <h2 className='text-4xl xl:text-6xl font-bold'>{props.title}</h2>
                <p className='text-gray-400'>{props.description}</p>
                <div>
                    <div className='flex gap-4 items-center'>
                        <h2 className='text-3xl font-bold'>${props.price - props.price*props.discount/100}.00</h2>
                        <div className='bg-orange-100 text-orange-400 font-bold h-min px-2 rounded-md'>{props.discount}%</div>
                    </div>
                    <h4 className='text-gray-400 line-through'>${props.price}.00</h4>
                </div>
                <div className='flex gap-4'>
                    <div className='flex items-center'>
                        <button className='bg-slate-100 h-10 px-4 rounded-l-lg' onClick={() => setShoppingItems(prevState => prevState > 0 ? prevState - 1 : 0)}><img src={minus} alt="minus" /></button>
                        <h3 className='bg-slate-100 h-10 px-4 text-center flex items-center font-bold'>{shoppingItems}</h3>
                        <button className='bg-slate-100 h-10 px-4 rounded-r-lg' onClick={() => setShoppingItems(prevState => prevState + 1)}><img src={plus} alt="plus" /></button>
                    </div>
                    <button className='flex items-center gap-4 h-10 rounded-lg text-white text-sm font-semibold bg-orange-500 hover:bg-orange-600 py-2 px-6 focus:outline-none focus:shadow-outline'><img src={cart} alt="cart" className='h-4'/> Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product