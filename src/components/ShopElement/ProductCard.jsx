import React from 'react';
import '../../pages/Shop/shop.css';
import { CartProvider, useCart } from "react-use-cart";
import {Link} from 'react-router-dom'
import { WishlistProvider, useWishlist } from "react-use-wishlist";
import Pagination from 'react-bootstrap/Pagination';
const ProductCard = ({ prod }) => {
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const { inWishlist } = useWishlist();
  return (
    <div className="product-card">
      <div className='prod-img'>
        <img className='w-img' src={`https://${prod.api_featured_image}`} alt="" />
      </div>
      <div className="prod-info">
        <p className='prod-name font-cormor'>
        <Link className='detail-prod' to={`${prod.product_link}`}>
        {
            prod.name ?(prod.name.length <= 25 ? prod.name : `${prod.name.substring(0, 25)}...`):('New Collection Product')
          }
          {}
     </Link>
        </p>
        <p>
          <span className='newprice font-cormo'>{prod.price>0 ? (prod.price):(14.99)}{prod.price_sign ? (prod.price_sign):('$')}</span>
        </p>
      </div>
      <div className='add-buttons'>
        <button className='add'  onClick={() => { addItem(prod) }} >Add To Basket</button>
        <button className='add' onClick={() => { inWishlist(prod.id) ? alert('Elave edilib !!!') : addWishlistItem(prod) }}>Add To Wishlist</button>
      </div>
    </div>
  );
};
export default ProductCard;
