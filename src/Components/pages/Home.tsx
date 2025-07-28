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
        
    <div className='flex p-20 gap-20'>
   <div className='flex-auto p-10'>
       <p className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>We are changing the way people shop</p>
       <p className='pt-5 pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
       <Link to="/products">
       <button className='p-3 bg-[#057aff] rounded-lg text-xl text-white mx-auto cursor-pointer'>Our Products</button>
       </Link>
    </div>
    <div className='flex h-100 flex-auto overflow-hidden overflow-x-scroll scroll-smooth bg-[#021431] p-3 rounded-md'>
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
