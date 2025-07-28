import { useState } from 'react';

import cart from '../assets/cart.png';
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';
import { Outlet, Link } from "react-router-dom";



const Navbar = () => {
  const [theme, setTheme] = useState('');
  return (
    <>
    <div className='flex flex-1 bg-[#021431] text-white w-full dark:bg-[#414558]'>
      <p className='text-right mr-20 p-2'><Link to="/form">Sign in / Guest</Link></p>
       <p className='text-right mr-20 p-2'>example</p>
    </div>

    <div className={`${theme ? "dark" : ""} flex flex-1 w-full bg-[#f0f6ff] p-3 list-none dark:bg-black dark:text-white`}>
        <div className='flex text-left ml-50 mr-80 bg-blue-500 p-1 rounded-xs'>
        <Link to="/">
        <p  className='cursor-pointer pr-3 pl-3 text-2xl font-medium text-white'>E</p>
        </Link>
        </div>
        <div className='flex flex-1 gap-10'>
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
        <div className='flex text-left ml-50 w-80'>
        <div className='flex gap-2'>
        <button onClick={()=>{
          setTheme("");
        }}><img src={light} className='cursor-pointer p-1 h-10 invert-0 dark:invert' alt="light"></img></button>
        <button onClick={()=>{
          setTheme("dark");
        }}><img src={dark} className='cursor-pointer p-1 h-10 invert-0 dark:invert' alt="dark"></img></button>
        </div>
        <Link to="/cart">
        <img src={cart} className='cursor-pointer p-1 h-10 ml-5 invert-0 dark:invert' alt="cart"></img>
        </Link>
        </div>
    </div>

    <Outlet />
    </>
  )
}

export default Navbar;
