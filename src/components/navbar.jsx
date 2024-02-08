import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from '@mui/material';
import { useShoppingStore } from '../store/shoppingStore';

export default function Navbar() {
  const { shopList } = useShoppingStore();
  return (
    <nav>
        <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/products`}>Products</Link>
            </li>
            <li>
              <Link to={`/shoppingCart`}><Badge badgeContent={shopList.length} color="primary"><MdOutlineShoppingCart className='text-2xl' /></Badge></Link>
            </li>
          </ul>
    </nav>
  )
}
