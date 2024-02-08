import React from 'react'
import CardShopping from '../../components/cardShopping'
import Navbar from '../../components/navbar'
export default function ShoppingCart() {
  return (
    <>
    <Navbar />
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 mx-10 sm:mx-40'>
      <div className='flex flex-col gap-4 order-last sm:order-first'>
        <p className='text-xl font-bold'>Products</p>
        <div className='flex flex-col gap-4 max-h-96 overflow-y-scroll'>
          <CardShopping />
          <CardShopping />
          <CardShopping />
          <CardShopping />
          <CardShopping />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-3xl font-bold'>Estimated Total</p>
        <p className='text-xl'>$Price</p>
        <button className='w-full max-w-96 bg-indigo-500 hover:bg-indigo-400 ease-in duration-200 rounded-md shadow-lg shadow-indigo-500/50 text-white p-3'>Checkout</button>
      </div>
    </div>
    </>
    
  )
}
