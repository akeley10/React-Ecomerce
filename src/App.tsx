import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/pages/Home.js'
import About from './Components/pages/About.js'
import Cart from './Components/pages/Cart.js'
import Products from './Components/pages/Products.js'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
