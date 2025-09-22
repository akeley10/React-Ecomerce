import Navbar from '../Navbar.js'
import { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
}

const Products = () => {
  
    const [product, setProduct] = useState<Product[]>([]);
      useEffect(()=>{
        fetch("http://localhost:3000/send-products", {
          method: "POST"
        })

        .then(res => res.json())
        .then (data =>{
          console.log("Productos recibidos:", data); 
          setProduct(data);  
        })

      }, [])

  return (
    <>
      <Navbar></Navbar>
    <div className='flex lg:p-20 gap-20 dark:bg-[#272935]'>
   <div className=''>
       <p className='dark:text-white  text-4xl font-bold tracking-tight border-b  border-b-[hsl(219_44%_92%/1)] p-3'>Products</p>
       <div className='flex flex-wrap gap-10 mt-5'>
       {product.map((p) => (
             <Link to={`/products/${p.name}`} key={p.id}>
            <div className='md:w-100 p-8 bg-auto rounded-md shadow-xl cursor-pointer' key={p.id}>
            <img className='h-60 w-100 rounded-lg object-cover' src={p.image} alt={p.name} />
              <h2 className=' dark:text-white text-2xl text-center mt-5'>{p.name}</h2>
              <p className='dark:text-[#bf95f9] text-center mt-4'>{p.price / 100} $</p>
            </div>
            </Link>
          ))}
        </div>
    </div>
    </div>
    <div className='dark:bg-[#272935]'>
    <div className="flex gap-4 mt-8 mb-10 float-right mr-10">

</div>
</div>
<Outlet />
    </>
  )
}

export default Products
