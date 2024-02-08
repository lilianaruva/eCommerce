import React, { useState } from 'react'
import CardProduct from '../../components/cardProduct'
import { IoFilter } from "react-icons/io5";

export default function ProductsDisplay() {
  const [order, setOrder] = useState(false)

  return (
    <div className='flex flex-col gap-4 my-10 mx-10 sm:mx-40'>
      <div className='flex justify-between w-full'>
        <button>d</button>
        <button onClick={()=> setOrder(!order)} className='w-70 h-70 p-5 bg-indigo-500 hover:bg-indigo-400 ease-in transition-all rounded-full shadow-lg shadow-indigo-500/50 text-white'>
          <IoFilter className={`${order ? 'rotate-180' : 'rotate-0'}`} />
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />

      </div>
    </div>
  )
}
