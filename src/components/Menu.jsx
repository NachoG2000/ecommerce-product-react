import React from 'react'

import close from '../images/icon-close.svg'
function Menu(props) {
  return (
    <>
        <div className={`absolute bg-black bg-opacity-70 w-full top-0 left-0 bottom-[-200px] z-20`}
             onClick={props.toggleMenu}
        > 
        </div>
        <div className={`absolute bg-white w-[70%] sm:w-[50%] top-0 left-0 h-[150vh] z-30 overflow-hidden`}> 
            <img src={close} className="w-[28px] h-[28px] mx-5 mt-9 object-contain cursor-pointer" onClick={props.toggleMenu}></img>
            <ul className='flex flex-col list-none ml-5 mt-10'>
                <a href="#" className="m-2 font-bold text-[#212121] hover:text-black cursor-pointer"> Home </a>
                <a href="#" className="m-2 font-bold text-[#212121] hover:text-black cursor-pointer"> About Me </a>
                <a href="#" className="m-2 font-bold text-[#212121] hover:text-black cursor-pointer"> Projects </a>
                <a href="#" className="m-2 font-bold text-[#212121] hover:text-black cursor-pointer"> Resume </a>
                <a href="#" className="m-2 font-bold text-[#212121] hover:text-black cursor-pointer"> Contact </a>
            </ul>
        </div>
    </>
  )
}

export default Menu