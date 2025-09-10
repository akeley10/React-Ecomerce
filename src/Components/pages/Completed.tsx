import Navbar from '../Navbar.js'

const Cancel = () => {  return ( 
      <>
      <Navbar></Navbar>
      <div className='dark:bg-[#272935] h-lvh p-5 lg:p-20'>
      <p className='dark:text-white text-4xl font-bold tracking-tight border-b border-b-[hsl(219_44%_92%/1)] p-4'>Order <span className='text-white dark:bg-[#ff7ca6] bg-blue-500 p-1 rounded-sm'>Completed</span></p>
      <p className='dark:text-white mt-4 text-lg w-full md:w-250'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
      </div>
    </>
  )
}

export default Cancel
