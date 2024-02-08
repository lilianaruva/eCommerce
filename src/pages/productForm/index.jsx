import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import TextField from '@mui/material/TextField';
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useProductsStore } from '../../store/productsStore';
import { toast } from 'react-toastify';

export default function ProductForm() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const { addProduct } = useProductsStore();

  const handleSaveProduct = () => {
    if (productName && productPrice && productImage) {
      const newProduct = {
        id: Math.random().toString(36),
        label: productName,
        price: parseFloat(productPrice),
        image: URL.createObjectURL(productImage),
      };
      addProduct(newProduct);
      setProductName('');
      setProductPrice('');
      toast.success('Product Added')
    } else {
      toast.error('Please fill in all fields.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='gap-4 sm:gap-8 my-10 mx-10 sm:mx-40 w-1/3 grid grid-cols-1'>
        <p className='text-2xl font-semibold'>Add New Product 🛒</p>
        <TextField
          type='text'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          id="label"
          label="Product Name"
        />
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="price">Amount</InputLabel>
          <OutlinedInput
            type='number'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            id="price"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <input accept='image/png, image/jpeg' type="file" onChange={(e) => setProductImage(e.target.files[0])} />
        <button onClick={handleSaveProduct} className='w-full bg-indigo-500 hover:bg-indigo-400 ease-in duration-200 rounded-md shadow-lg shadow-indigo-500/50 text-white p-3'>Save Product</button>
      </div>
    </>
  );
}
