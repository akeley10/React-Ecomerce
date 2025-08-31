import { useCart } from '../../context/Cart.context';
import Navbar from '../Navbar.js'
import { useUser } from '../../context/User.context.js';
const Cart = () => {
  const { email } = useUser();
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

  const handleCheckout = () => {
  fetch('http://localhost:3000/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cart: groupedCart, email }),
  })
    .then(res => res.json())
    .then(data => window.location.href = data.url)
    .catch(err => console.error(err));

}

  const total = groupedCart.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);


  return (
    <>
      <Navbar></Navbar>
      <div className='dark:bg-[#181921] h-lvh pt-10 lg:pt-20 pl-4 lg:pl-50 gap-20'>
      {cart.length === 0 ? (
     <p className='dark:text-white w-4xl text-xl font-bold tracking-tight sm:text-4xl border-b border-b-[hsl(219_44%_92%/1)] p-3'>Your cart is empty</p>
      ) : (<p className='dark:text-white w-4xl text-xl font-bold tracking-tight sm:text-4xl border-b border-b-[hsl(219_44%_92%/1)] p-3'>Shopping cart</p> )}
     
      {cart.length === 0 ? (
        <p className='dark:text-white mt-10 ml-5'>your cart is empty</p>
      ) : (
        <ul className='mt-10 w-30 lg:w-220'>
          {groupedCart.map((product, i) => (
            <li className='flex flex-col lg:p-2 ' key={i}>
            {<img className='lg:h-30 lg:w-30 rounded-xl object-cover' src={product.img}></img>} 
              {<p className='dark:text-white pl-5 lg:pl-10 pt-5'>{product.title}</p>} 
              {<p className='dark:text-white pl-5 lg:pl-10 pt-5 pr-10'>{(product.count * product.price).toFixed(2)}$</p>}
              {product.count > 1 && (
                 <p className='pl-10 pr-10 pt-5 text-gray-500'>x{product.count}</p>
              )}
              {product.count > 1 ? (
                 <button className='h-10 w-20 ml-3 lg:ml-0 mt-3 text-white bg-[#463aa1] rounded-lg' onClick={()=> removeOneFromCart(product.id)}>Remove</button>
              ) : (
                <button className='h-10 w-20 ml-3 lg:ml-0 mt-3 text-white bg-[#463aa1] rounded-lg' onClick={()=> removeFromCart(product.id)}>Delete</button>
              )}
  
            </li>
          ))}
        </ul>
      )}
         <div className='dark:bg-[#181921] bg-blue-50 w-50 rounded-xl lg:float-right'>
              <p className="dark:text-white text-black pt-20 lg:pt-0 lg:absolute lg:top-100 lg:p-10 text-xs text-right">
              Total: {total.toFixed(2)}$
              <br></br>
              {
              email === "Guest" ? (
                <a className='h-10 w-20 ml-3 lg:ml-0 mt-3 p-1 text-white bg-[#463aa1] rounded-lg' href="http://localhost:5173/form">
                  Login
                </a>
              ) : groupedCart.length <= 0 ? (
                <span className='h-10 w-40 ml-3 lg:ml-0 mt-3 p-1 text-white bg-[#463aa1] rounded-lg flex items-center justify-center'>
                  Tu carrito está vacío
                </span>
              ) : (
                <button onClick={handleCheckout} className='h-10 w-20 ml-3 lg:ml-0 mt-3 text-white bg-[#463aa1] rounded-lg'>
                  Pagar
                </button>
              )
              }
              </p>
          </div>
      </div>
    </>
  )
}

export default Cart


