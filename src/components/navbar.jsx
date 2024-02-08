import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
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
              <Link to={`/shoppingCart`}><MdOutlineShoppingCart className='text-2xl' /></Link>
            </li>
          </ul>
    </nav>
  )
}
