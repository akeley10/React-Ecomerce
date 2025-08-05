import { useCart } from '../../context/Cart.context';
import Navbar from '../Navbar.js'
const Cart = () => {
  const { cart, removeOneFromCart, removeFromCart } = useCart();
  const groupedCart = Array.from(
    cart.reduce((map, product) => {
      const existing = map.get(product.id);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(product.id, { ...product, count: 1 });
      }
      return map;
    }, new Map()).values()
  );

  const total = groupedCart.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);

  return (
    <>
      <Navbar></Navbar>
      <div className='dark:bg-[#181921] h-lvh pt-10 lg:pt-20  pl-10 lg:pl-50 gap-20'>
      {cart.length === 0 ? (
     <p className='dark:text-white w-4xl text-xl font-bold tracking-tight sm:text-4xl border-b border-b-[hsl(219_44%_92%/1)] p-3'>Your cart is empty</p>
      ) : (<p className='dark:text-white w-4xl text-xl font-bold tracking-tight sm:text-4xl border-b border-b-[hsl(219_44%_92%/1)] p-3'>Shopping cart</p> )}
     
      {cart.length === 0 ? (
        <p className='dark:text-white mt-10 ml-5'>your cart is empty</p>
      ) : (
        <ul className='mt-10 w-220'>
          <div className='bg-blue-50 rounded-xl float-right'>
              <p className="p-10 text-xs text-right">
              Total: {total.toFixed(2)}$
          </p>
          </div>
          {groupedCart.map((product, i) => (
            <li className='flex p-2 ' key={i}>
            {<img className='h-30 w-30 rounded-xl object-cover' src={product.img}></img>} 
              {<p className='pl-10 pt-5'>{product.title}</p>} 
              {<p className='pl-10 pt-5 pr-10'>{(product.count * product.price).toFixed(2)}$</p>}
              {product.count > 1 && (
                 <p className='pl-10 pr-10 pt-5 text-gray-500'>x{product.count}</p>
              )}
              {product.count > 1 ? (
                 <button className='h-10 w-20 mt-3 text-white bg-[#463aa1] rounded-lg' onClick={()=> removeOneFromCart(product.id)}>Remove</button>
              ) : (
                <button className='h-10 w-20 mt-3 text-white bg-[#463aa1] rounded-lg' onClick={()=> removeFromCart(product.id)}>Delete</button>
              )}
  
            </li>
          ))}
        </ul>
      )}
      </div>
    </>
  )
}

export default Cart


