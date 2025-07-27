import Products from '../data/dataFeatured';

const FeaturedProducts = () => {
  return (
    <>
    <div className='flex p-20 gap-20'>
   <div className=''>
       <p className='max-w-2xl text-4xl font-bold tracking-tight sm:text-4xl border-b border-b-[hsl(219_44%_92%/1)] p-3'>Featured products</p>
       <div className='flex items-center space-x-4 mt-5 gap-10'>
       {Products.map((product) => (
            <div className='w-100 p-8 bg-auto rounded-md shadow-xl cursor-pointer' key={product.id}>
              <img className='h-60 w-100 rounded-lg object-cover' src={product.img} alt={product.title} />
              <h2 className='text-2xl text-center mt-5'>{product.title}</h2>
              <p className='text-center mt-4'>{product.price} $</p>
            </div>
          ))}
        </div>
    </div>
    </div>
      </>
  )
}

export default FeaturedProducts
