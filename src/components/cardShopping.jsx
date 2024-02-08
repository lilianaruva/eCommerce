import React from 'react'

export default function CardShopping() {
  return (
    <div className='flex gap-4 shadow-md rounded-md bg-white'>
        <img className='rounded-lg w-[120px] h-[120px]' alt='productId' src='https://http2.mlstatic.com/nike-hombre-tenis-D_NQ_NP_437125-MCO25390148738_022017-F.jpg' />
        <div>
            <p>Product</p>
            <p>Price</p>
        </div>
    </div>
  )
}
