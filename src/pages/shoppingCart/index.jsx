import React from 'react'
import CardShopping from '../../components/cardShopping'
import Navbar from '../../components/navbar'
import { useShoppingStore } from '../../store/shoppingStore';
import { toast } from 'react-toastify';
export default function ShoppingCart() {
  const { shopList, removeAllProductsInToCart } = useShoppingStore();
  const totalPrice = shopList.reduce((total, product) => total + product.price, 0);

  const handleBuy = () => {
    if(shopList.length > 0){
    removeAllProductsInToCart()
    toast.success("Thanks for buy in Ecommerce Page 🔥💳")
    }else{
    toast.error("Your cart is empty! Go to Products Page 🔥")

    }
  }

  return (
    <>
    <Navbar />
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-16 my-10 mx-10 sm:mx-40'>
      <div className='flex flex-col gap-4 order-last sm:order-first'>
        <p className='text-xl font-bold'>{shopList?.length ?? 0} Products</p>
        <div className='flex flex-col gap-4 max-h-96 overflow-y-scroll'>
          {
            shopList?.map(product => <CardShopping key={product.id} data={product}/>)
          }
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-3xl font-bold'>Estimated Total</p>
        <p className='text-xl'>${totalPrice}</p>
        <button onClick={handleBuy} className='w-full max-w-96 bg-indigo-500 hover:bg-indigo-400 ease-in duration-200 rounded-md shadow-lg shadow-indigo-500/50 text-white p-3'>Checkout</button>
      </div>
    </div>
    </>
    
  )
}
