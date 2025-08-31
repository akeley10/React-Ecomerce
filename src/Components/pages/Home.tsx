import imagen1 from '../../assets/imagen1.webp'
import imagen2 from '../../assets/imagen2.webp'
import imagen3 from '../../assets/imagen3.webp'
import Navbar from '../Navbar.js'
import FeaturedProducts from '../FeaturedProducts.js'
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
      <>
        <Navbar></Navbar>
        
    <div className='md:flex md:p-20 md:gap-20 dark:bg-[#272935]'>
   <div className='flex-auto p-5 md:p-10'>
       <p className='text-3xl w-60 lg:w-full dark:text-white md:max-w-2xl  font-bold tracking-tight  md:text-6xl'>We are changing the way people shop</p>
       <p className='w-70 md:w-full pt-5 pb-5 pr-20 dark:text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
       <Link to="/products">
       <button className='p-3 dark:bg-[#ff7ca6] dark:text-[#301c27] bg-[#057aff] rounded-lg text-xl text-white mx-auto cursor-pointer'>Our Products</button>
       </Link>
    </div>
    <div className='hidden md:flex lg:flex  h-80 md:h-100 flex-auto overflow-hidden overflow-x-scroll scroll-smooth bg-[#021431] dark:bg-[#414558] p-3 rounded-md'>
        <img className='w-auto p-1 rounded-lg' alt="imagen1" src= {imagen1}></img>
        <img className='w-auto p-1 rounded-lg' alt="imagen2" src={imagen2}></img>
        <img className='w-auto p-1 rounded-lg' alt="imagen3" src={imagen3}></img>
    </div>
    </div>
    <FeaturedProducts></FeaturedProducts>
    <Outlet />
      </>
    )
  }
  
  export default Home;
