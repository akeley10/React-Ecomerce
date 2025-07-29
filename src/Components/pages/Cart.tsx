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

  return (
    <>
      <Navbar></Navbar>
      <div className='p-20 gap-20'>
      <p className='max-w-2xl text-4xl font-bold tracking-tight sm:text-4xl border-b border-b-[hsl(219_44%_92%/1)] p-3'>Your cart is empty</p>
      {cart.length === 0 ? (
        <p className='mt-10 ml-5'>Tu carrito está vacío.</p>
      ) : (
        <ul className='mt-10 ml-5'>
          {groupedCart.map((product, i) => (
            <li className='flex p-2' key={i}>
            {<img className='h-30 w-30 rounded-xl object-cover' src={product.img}></img>} 
              {<p className='pl-10 pt-5'>{product.title}</p>} 
              {<p className='pl-10 pt-5 pr-10'>{(product.count * product.price).toFixed(2)}$</p>}
              {product.count > 1 && (
                 <p className='pl-10 pt-5 text-gray-500'>x{product.count}</p>
              )}
              {product.count > 1 ? (
                 <button className='h-10 w-20 text-white bg-[#463aa1] rounded-lg' onClick={()=> removeOneFromCart(product.id)}>Quitar</button>
              ) : (
                <button className='h-10 2-20 text-white bg-[#463aa1] rounded-lg' onClick={()=> removeFromCart(product.id)}>Eliminar</button>
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


