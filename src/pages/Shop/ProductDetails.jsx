import React, { useState, useEffect } from 'react';
import '../../pages/Shop/shop.css';
import { useParams } from 'react-router-dom';
import { useCart } from "react-use-cart";
import MoonLoader from "react-spinners/MoonLoader";
import UpIcon from '../../components/Up/UpIcon';

const ProductDetails = () => {
  const { id, name, brand, category } = useParams();
  const { addItem, items, updateItemQuantity } = useCart();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
     
      const url = `http://localhost:5000/api/products.json?brand=${brand}&`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

        // Check if result is an array
        if (Array.isArray(result)) {
          const foundProduct = result.find(product => String(product.id) === String(id));
          if (foundProduct) {
            setProduct(foundProduct);
            setLoading(false);
          } else {
            throw new Error('Product not found');
          }
        } else {
          throw new Error('API response is not an array');
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }

      console.log(url);
    };

    fetchData();
  }, [id, brand]);

  if (loading || !product) {
    return (
      <div className='White sweet-loading'>
        <MoonLoader
          color='#89BC98'
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className='shop-page'>
      <div className="quick-view container">
        <div className="quick-view-img">
          <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
            {/* <ImageGallery items={product.productImage ? [{ original: product.productImage }] : []} /> */}
          </div>
        </div>
        <div className="quick-view-info">
          <h2>{product.name}</h2>
          <del>{product.price}</del>
          <span className="discounted-price mx-2">
            <span>{product.price}</span>
          </span>
          <div className='info'>
            <p>{product.description}</p>
          </div>
          <input
            type="number"
            min="1"
            value={product.quantity || 1}
            className='count'
            onChange={(e) => setProduct({ ...product, quantity: parseInt(e.target.value) })}
          />
          <button
            className="add-to-cart text-decoration-none"
            onClick={() => {
              const existingItem = items.find(item => item.id === product.id);
              if (existingItem) {
                updateItemQuantity(product.id, product.quantity);
              } else {
                addItem(product, product.quantity);
              }
            }}
          >
            ADD TO CART
          </button>
          <p>Availability: {product.product_type}</p>
        </div>
      </div>
      <UpIcon />
    </div>
  );
};

export default ProductDetails;
