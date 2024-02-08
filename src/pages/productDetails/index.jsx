import React from 'react'
import Navbar from '../../components/navbar'
import { useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className='my-10 mx-10 sm:mx-40'>
      <button onClick={() => navigate(-1)} className='hover:underline'>Go Back</button>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 my-10 mx-10 sm:mx-40'>
      <img className='rounded-lg w-full max-h-100' alt='productId' src='https://http2.mlstatic.com/nike-hombre-tenis-D_NQ_NP_437125-MCO25390148738_022017-F.jpg' />
      <div className='flex flex-col gap-4'>
        <p className='text-3xl font-bold'>Product name</p>
        <p className='text-xl'>$Price</p>
        <p>Description</p>
        <button className='w-full max-w-96 bg-indigo-500 hover:bg-indigo-400 ease-in duration-200 rounded-md shadow-lg shadow-indigo-500/50 text-white p-3'>Add to Cart</button>
      </div>
    </div>
    </>
    
  )
}
