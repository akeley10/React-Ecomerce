import './index.css';
import { CartProvider } from './context/Cart.context.js';
import { UserProvider } from './context/User.context.js';
import { ThemeProvider } from './context/Theme.context.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/pages/Home.js'
import About from './Components/pages/About.js'
import Cart from './Components/pages/Cart.js'
import Form from './Components/pages/Form.js'
import Cancel from './Components/pages/Cancel.js'
import Completed from './Components/pages/Completed.js'
import Product1 from './Components/pages/productPage/avant-garde lamp.js'
import Product2 from './Components/pages/productPage/coffee-table.js'
import Product3 from './Components/pages/productPage/chic chair.js'
import Products from './Components/pages/Products.js'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <UserProvider>
    <ThemeProvider>
     <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/products/avant-garde-lamp" element={<Product1 />} />
        <Route path="/products/coffee-table" element={<Product2 />} />
        <Route path="/products/chic-chair" element={<Product3 />} />
      </Routes>
      </CartProvider>
      </ThemeProvider>
       </UserProvider>
    </BrowserRouter>
    
    </>
  )
}

export default App
