import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CardProduct({data}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/products/${data.id}`)} key={data.id} className='hover:cursor-pointer bg-white rounded-md hover:scale-105 transition-all shadow-md'>
        <img className='rounded-lg w-full h-[200px] object-cover' alt='productId' src={data.image} />
        <div className='flex flex-col gap-4 p-8'>
            <p className='font-semibold text-lg'>{data.label}</p>
            <p>${data.price}</p>
        </div>
    </div>
  )
}
