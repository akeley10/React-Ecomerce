import Navbar from '../Navbar.js'
import Lamp from '../../Components/pages/productPage/avant-garde lamp.js'
const Cart = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='flex p-20 gap-20'>
      <p className='max-w-2xl text-4xl font-bold tracking-tight sm:text-4xl border-b border-b-[hsl(219_44%_92%/1)] p-3'>Your cart is empty</p>
      </div>
    </>
  )
}

export default Cart
