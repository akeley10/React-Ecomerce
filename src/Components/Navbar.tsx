import { useState, useRef } from 'react';
import cartImg from '../assets/cart.png';
import hamburguer from '../assets/hamburguer.png';
import Lottie from "lottie-react";
import dark from '../assets/dark.json';
import { Outlet, Link } from "react-router-dom";
import { useCart } from '../context/Cart.context';
import { useTheme } from '../context/Theme.context';
import { useUser } from '../context/User.context';

const Navbar = () => {
  const { email,deleteEmail } = useUser();
  const { theme, setTheme } = useTheme();
  const [hamburguerMenu, setHamburguerMenu] = useState(false);
  const { cart } = useCart();
  const darkLottieRef = useRef<any>(null);

  const handleClickDark = () => {
    darkLottieRef.current?.playSegments([0, 80], true);
    setTimeout(() => {
      setTheme('dark');
    }, 1000);
  };

  const handleClickLight = () => {
    darkLottieRef.current.playSegments([80, 0], true);
    setTimeout(() => {
      setTheme('light');
    }, 1000);
  };

  return (
    <>
    <div>
    <div className='md:flex md:flex-1 md:justify-end bg-[#021431] text-white md:w-full dark:bg-[#414558]'>
      <p className='float-right md:mr-25 lg:mr-10 p-2 '><Link to="/form"> {email === "Guest" ? "Sign in" : ""}  {email == "Guest" ? "" : email} </Link></p>
      {(email != "Guest") ?
      <button className='md:mr-50 p-2'  onClick={() => {   if (deleteEmail) {   deleteEmail(); 
    }   window.location.href = "/"; 
  }} >Cerrar sesión</button> : <button className='md:mr-50 p-2'>­­ </button>}
    </div>

    <div className='md:w-full flex flex-1  bg-[#f0f6ff] md:p-3 list-none dark:bg-[#181921] dark:text-white'>
        <div className='lg:flex text-left dark:bg-[#ff7ca6] lg:bg-blue-500 p-1 rounded-xs'>
        <Link to="/">
        <p  className='hidden lg:block cursor-pointer pr-3 pl-3 text-2xl font-medium text-white'>E</p>
        </Link>
        </div>
        <div className='block md:hidden'>
          <button onClick={() => setHamburguerMenu(!hamburguerMenu)}>
          <img className='h-10' src={hamburguer} alt="iconHamburguer" />
        </button>
      </div>
      <div
  className={`${
    window.screen.width < 700 && hamburguerMenu === false
      ? "hidden" 
      : "visible z-10 flex flex-col absolute md:flex-row md:relative w-50 rounded-2xl left-10 top-23 md:top-0 md:left-1/2 md:-translate-x-1/2 bg-[#f0f6ff] dark:bg-[#181921] flex-1 justify-center items-center md:gap-10"
  }`}
>
        <li className='cursor-pointer p-2 text-center transition duration-500  hover:bg-[#021431] active:bg-red dark:hover:bg-[#272935] rounded-xl hover:text-white'>
        <Link className='menu-element' to="/">Home</Link>
        </li>
        <li className='cursor-pointer text-center p-2  transition duration-500  hover:bg-[#021431] dark:hover:bg-[#272935] rounded-xl hover:text-white'>
        <Link className='menu-element' to="/about">About</Link>
       </li>
        <li className='cursor-pointer p-2 text-center transition duration-500   hover:bg-[#021431] dark:hover:bg-[#272935] rounded-xl hover:text-white'>
        <Link className='menu-element' to="/products">Products</Link>
          </li>
        <li className='cursor-pointer p-2 text-center transition duration-500   hover:bg-[#021431] dark:hover:bg-[#272935] rounded-xl hover:text-white'>
        <Link className='menu-element' to="/cart">Cart</Link>
        </li>
        </div>
        <div className='w-full flex justify-end items-center'>
          <button className='cursor-pointer w-15 h-10' onClick={theme === 'dark' ? handleClickLight : handleClickDark}>
            <Lottie
              lottieRef={darkLottieRef}
              animationData={dark}
              loop={false}
              autoplay={false}
            />
          </button>
        <Link to="/cart" className="relative">
        <img src={cartImg} className="cursor-pointer h-6 lg:h-10 invert-0 dark:invert mr-10" alt="cart" />
        <div className="absolute -top-2 right-5 dark:bg-[#ff7ca6] bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center">
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
