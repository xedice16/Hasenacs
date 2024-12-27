import React from 'react'
import { useWishlist } from "react-use-wishlist";
import UpIcon from '../../components/Up/UpIcon';
import './wishList.css'
import { CartProvider, useCart } from "react-use-cart";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const WishList = () => {
    const {
        isWishlistEmpty,
        totalWishlistItems,
        items,
        removeWishlistItem,
      } = useWishlist();
    
      if (isWishlistEmpty) return <p className='empty-wishlist font-cormor'>Your wishlist is empty</p>;
    
  return (
        <div className='wishlist-all'>
      <h1 className='font-cormor'>Wishlist ({totalWishlistItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
           <div className='left'> {item.name} &mdash;</div>
         <div>
            <button className='btn-x' onClick={() => removeWishlistItem(item.id)}><FontAwesomeIcon icon={faCircleXmark} className='i' /></button>
         </div>
          </li>
        ))}
      </ul>
  <UpIcon/>
    </div>
  )
}

export default WishList