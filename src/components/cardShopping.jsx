import React from 'react'
import { useShoppingStore } from '../store/shoppingStore';

export default function CardShopping({data}) {
  const { removeProductInToCart } = useShoppingStore();
  return (
    <div className='flex gap-4 shadow-md rounded-md bg-white'>
        <img className='rounded-lg w-[120px] h-[120px]' alt='productId' src={data.image} />
        <div>
            <p>{data.label}</p>
            <p>${data.price}</p>
            <p onClick={() => removeProductInToCart(data.id)} className='hover:underline hover:cursor-pointer text-red-500'>Delete</p>
        </div>
    </div>
  )
}
