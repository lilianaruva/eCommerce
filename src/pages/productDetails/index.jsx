import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import { useNavigate, useParams } from 'react-router-dom';
import { useProductsStore } from '../../store/productsStore';
import { useShoppingStore } from '../../store/shoppingStore';
import { toast } from 'react-toastify';

export default function ProductDetails() {
  let { productId } = useParams();
  const { productList } = useProductsStore();
  const { addProductInToCart } = useShoppingStore();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productList.find(item => item.id === productId);
    setProduct(foundProduct);
  }, [productId, productList]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className='my-10 mx-10 sm:mx-40'>
          <button onClick={() => navigate(-1)} className='hover:underline'>Go Back</button>
        </div>
        <div className='my-10 mx-10 sm:mx-40'>
          <p>Product not found</p>
        </div>
      </>
    );
  }

  const handleAddToCart = () =>{
    addProductInToCart(product)
    toast.success("Product Added !", {
      position: "top-center"
    });
  }

  return (
    <>
    <Navbar />
    <div className='my-10 mx-10 sm:mx-40'>
      <button onClick={() => navigate(-1)} className='hover:underline'>Go Back</button>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 my-10 mx-10 sm:mx-40'>
      <img className='rounded-lg w-full max-h-100' alt='productId' src='https://http2.mlstatic.com/nike-hombre-tenis-D_NQ_NP_437125-MCO25390148738_022017-F.jpg' />
      <div className='flex flex-col gap-4'>
        <p className='text-3xl font-bold'>{product?.label}</p>
        <p className='text-xl'>${product?.price}</p>
        <p>Description</p>
        <p>{product?.description}</p>
        <button onClick={handleAddToCart} className='w-full max-w-96 bg-indigo-500 hover:bg-indigo-400 ease-in duration-200 rounded-md shadow-lg shadow-indigo-500/50 text-white p-3'>Add to Cart</button>
      </div>
    </div>
    </>
    
  )
}
