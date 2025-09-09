import Navbar from '../../Navbar.js'
import product2 from '../../../assets/producto2.jpeg'
import { Outlet, Link } from "react-router-dom";
import { useCart } from '../../../context/Cart.context';
import dataProducts from '../../../data/dataProducts';
const coffee = () => {
  const { addToCart } = useCart();
  const product = dataProducts.find(p => p.id === 1);
  return (
    <>
     <Navbar></Navbar>
     <div className='dark:bg-[#272935] dark:text-white pt-5 pl-5 lg:pt-20 lg:pl-50 pb-5 flex gap-2'>
     <Link to="/">Home</Link><p>{'>'}</p><Link to="/products">Products</Link>
     </div>
     <div className='dark:bg-[#272935] flex flex-col lg:flex-row flex-1'>
      <img className='h-80 w-80 m-auto lg:h-100 lg:w-130 lg:ml-50 lg:mr-10 object-cover rounded-xl' src={product2}></img> 
      <div className='flex flex-col'>
      <h1 className='dark:text-white mt-5 lg:mt-0 text-3xl ml-10 pb-5 font-bold'>Coffee Table</h1>
      <p className='dark:text-white text-xl ml-10 pb-5'>10$</p>
      <p className='dark:text-white ml-10 mr-5 lg:w-120 leading-8'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
      <button className='text-xs w-30 text-white font-bold uppercase bg-[#463aa1] rounded-lg p-3 mt-5 lg:mt-10 ml-10 cursor-pointer' onClick={() => product && addToCart(product)}>
      Add to cart
    </button>  
      </div>    
     </div>
    <Outlet />
    </>
  )
}

export default coffee
