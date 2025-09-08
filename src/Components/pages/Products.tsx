import Navbar from '../Navbar.js'
import DataProducts from '../../data/dataProducts.js'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = DataProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(DataProducts.length / productsPerPage);
  return (
    <>
      <Navbar></Navbar>
    <div className='flex lg:p-20 gap-20 dark:bg-[#272935]'>
   <div className=''>
       <p className='dark:text-white  text-4xl font-bold tracking-tight border-b  border-b-[hsl(219_44%_92%/1)] p-3'>Products</p>
       <div className='flex flex-wrap gap-10 mt-5'>
       {currentProducts.map((dataProduct) => (
             <Link to={`/products/${dataProduct.id}`}>
            <div className='md:w-100 p-8 bg-auto rounded-md shadow-xl cursor-pointer' key={dataProduct.id}>
              <img className='h-60 w-100 rounded-lg object-cover' src={dataProduct.img} alt={dataProduct.title} />
              <h2 className=' dark:text-white text-2xl text-center mt-5'>{dataProduct.title}</h2>
              <p className='dark:text-[#bf95f9] text-center mt-4'>{dataProduct.price} $</p>
            </div>
            </Link>
          ))}
        </div>
    </div>
    </div>
    <div className='dark:bg-[#272935]'>
    <div className="flex gap-4 mt-8 mb-10 float-right mr-10 bg-blue-50">
  <button className='bg-blue-100 p-2'
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Anterior
  </button>

  <button className='bg-blue-100 p-2'
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Siguiente
  </button>
</div>
</div>
<Outlet />
    </>
  )
}

export default Products
