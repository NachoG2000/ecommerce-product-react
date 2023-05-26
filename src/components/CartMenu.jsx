import React from 'react'

import trash from '../images/icon-delete.svg'

function CartMenu(props) {

    const productElements = props.cartProductsArray.map(item => {
        return (
        <div className="h-20 w-full flex items-center justify-around gap-2 p-2 my-2" key={item.id} id={item.id}> 
            <img src={item.image} className='h-full rounded-md' alt="product image" />
            <div className='flex flex-col'>
                <h2>{item.title}</h2>
                <div className='flex gap-2'>
                    <h3 className='text-gray-500'>${item.price}.00 x {item.amount}</h3>
                    <h3 className='font-bold'>${item.price * item.amount}.00</h3>
                </div>
            </div>
            <img src={trash} alt="trash icon" className='cursor-pointer' onClick={() => props.deleteCartItem(item.id)}/>        
        </div>
        )
        }
    )
    return (
        <div className=''>
            <div className={`absolute bg-black bg-opacity-70 w-full top-0 left-0 bottom-[-200px] z-20`} onClick={() => props.toggleCart()}> 
            </div>
            <div className={`absolute bg-white shadow-2xl right-2 left-2 md:right-[10%] min-[425px]:left-auto min-[425px]:w-[400px] top-[104px] h-80 z-30 rounded-xl overflow-hidden`}> 
                <div className='flex items-center px-4 border-b-2 h-16'>
                    <h3 className='font-bold text-xl'>Cart</h3>
                </div>
                <div className='overflow-y-auto h-44'>
                    {productElements}
                    {
                        !props.hasAlreadyPurchased ?
                        (
                            props.cartProductsArray.length > 0 ?
                            "" :
                            <div className='flex h-full justify-center items-center'>
                                <h2 className={` font-bold text-xl text-gray-600 w-[70%] sm:w-full text-center`}> Your cart is empty. </h2>
                            </div>
                        ) :
                        <div className='flex h-full justify-center items-center'>
                            <h2 className={`font-bold text-2xl text-black w-[70%] sm:w-full text-center`}> Thanks for choosing us! 🤩 </h2>
                        </div>
                    }
                </div>
                <div className='flex items-center justify-center px-6 my-4'>
                    <button className={`flex items-center justify-center w-full h-12 rounded-lg text-white text-sm font-semibold bg-orange-500 hover:bg-orange-600 py-2 px-6 focus:outline-none focus:shadow-outline
                                    ${props.cartProductsArray.length > 0 ? "" : "hidden"}`}
                            onClick={props.checkout}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartMenu