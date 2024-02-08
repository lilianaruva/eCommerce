import React from 'react'

export default function CardShopping({data}) {
  return (
    <div className='flex gap-4 shadow-md rounded-md bg-white'>
        <img className='rounded-lg w-[120px] h-[120px]' alt='productId' src={data.image} />
        <div>
            <p>{data.label}</p>
            <p>${data.price}</p>
        </div>
    </div>
  )
}
