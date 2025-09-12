import Products from '../data/dataFeatured';

const FeaturedProducts = () => {
  return (
    <>
    <div className='flex md:block  dark:bg-[#272935] pt-5 lg:p-5 md:p-20 gap-20 mb-5'>
   <div className='lg:p-10'>
       <p className=' dark:text-white text-2xl md:text-4xl font-bold tracking-tight sm:text-4xl border-b border-b-[hsl(219_44%_92%/1)] p-3'>Featured products</p>
       <div className='flex flex-col lg:flex-row items-center space-x-4 mt-5 p-10 gap-10'>
       {Products.map((product) => (
            <div className='w-full p-4  lg:p-8 bg-auto rounded-md shadow-xl cursor-pointer' key={product.id}>
              <img className='h-80 w-100 md:w-140  lg:h-60 rounded-lg object-cover' src={product.img} alt={product.title} />
              <h2 className='dark:text-white text-2xl text-center mt-5'>{product.title}</h2>
              <p className='dark:text-[#bf95f9] text-center mt-4'>{product.price} $</p>
            </div>
          ))}
        </div>
    </div>
    </div>
      </>
  )
}

export default FeaturedProducts
