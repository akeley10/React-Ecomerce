import { useState } from 'react';

import cartImg from '../assets/cart.png';
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';
import hamburguer from '../assets/hamburguer.png';
import { Outlet, Link } from "react-router-dom";
import { useCart } from '../context/Cart.context';
import { useTheme } from '../context/Theme.context';




const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [hamburguerMenu, setHamburguerMenu] = useState(false);
  const { cart } = useCart();
  return (
    <>
    <div>
    <div className='md:flex md:flex-1 md:justify-end bg-[#021431] text-white w-full dark:bg-[#414558]'>
      <p className='float-right mr-25 lg:mr-10 p-2 '><Link to="/form">Sign in / Guest</Link></p>
       <p className='md:mr-50 p-2'>example</p>
    </div>

    <div className='flex flex-1  bg-[#f0f6ff] md:p-3 list-none dark:bg-[#181921] dark:text-white'>
        <div className='lg:flex text-left dark:bg-[#ff7ca6] lg:bg-blue-500 lg:p-1 rounded-xs'>
        <Link to="/">
        <p  className='hidden lg:block cursor-pointer pr-3 pl-3 text-2xl font-medium text-white'>E</p>
        </Link>
        </div>
        <div className='block md:hidden'>
          <button onClick={() => setHamburguerMenu(!hamburguerMenu)}>
          <img className='h-10' src={hamburguer} alt="iconHamburguer" />
        </button>
      </div>
      <div className={`${window.screen.width < 700 && hamburguerMenu === false ? "hidden" : " flex flex-col absolute lg:flex-row lg:relative w-50  rounded-2xl left-10 top-23 lg:top-0 lg:left-20 bg-[#f0f6ff] dark:bg-[#181921] lg:flex flex-1 lg:justify-center lg:gap-10"}`}>
        <li className='cursor-pointer p-2  hover:bg-[#021431] hover:rounded-xl hover:text-white'>
        <Link to="/">Home</Link>
        </li>
        <li className='cursor-pointer p-2  hover:bg-[#021431] hover:rounded-xl hover:text-white'>
        <Link to="/about">About</Link>
       </li>
        <li className='cursor-pointer p-2  hover:bg-[#021431] hover:rounded-xl hover:text-white'>
        <Link to="/products">Products</Link>
          </li>
        <li className='cursor-pointer p-2  hover:bg-[#021431] hover:rounded-xl hover:text-white'>
        <Link to="/cart">Cart</Link>
        </li>
        </div>
        <div className='flex text-left right-0 '>
        <div className='flex gap-2'>
        <button onClick={() => setTheme('light')}><img src={light} className='cursor-pointer p-1 h-6 lg:h-10 invert-0 dark:invert' alt="light"></img></button>
        <button onClick={() => setTheme('dark')}><img src={dark} className='cursor-pointer p-1 h-6 lg:h-10 invert-0 dark:invert' alt="dark"></img></button>
        </div>
        <Link to="/cart" className="relative flex items-center gap-1">
        <img src={cartImg} className="cursor-pointer h-6 lg:h-10 invert-0 dark:invert" alt="cart" />
        <div className="dark:bg-[#ff7ca6] bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center mb-5">
          <p className="text-white text-xs">{cart.length}</p>
        </div>
      </Link>
    </div>
    </div>
    </div>

    <Outlet />
    </>
  )
}

export default Navbar;
