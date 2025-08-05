import './App.css'
import { CartProvider } from './context/Cart.context.js';
import { ThemeProvider } from './context//Theme.context.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/pages/Home.js'
import About from './Components/pages/About.js'
import Cart from './Components/pages/Cart.js'
import Form from './Components/pages/Form.js'
import Product0 from './Components/pages/productPage/avant-garde lamp.js'
import Product1 from './Components/pages/productPage/coffee-table.js'
import Product2 from './Components/pages/productPage/comfy-bed.js'
import Product3 from './Components/pages/productPage/chic chair.js'
import Products from './Components/pages/Products.js'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <ThemeProvider>
     <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/form" element={<Form />} />
        <Route path="/products/0" element={<Product0 />} />
        <Route path="/products/1" element={<Product1 />} />
        <Route path="/products/2" element={<Product2 />} />
        <Route path="/products/3" element={<Product3 />} />
      </Routes>
      </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
    
    </>
  )
}

export default App
