import React, { useState, useEffect } from "react";
import "../../pages/Shop/shop.css";
import ShopList from "../../components/ShopElement/ShopList";
import PropagateLoader from "react-spinners/PropagateLoader";
import UpIcon from '../../components/Up/UpIcon.jsx'
const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState(null);
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = `http://localhost:5000/api/products.json?brand=${brand}`;
      if (type) {
        url += `&product_type=${type}`;
      }
      if (minPrice) {
        url += `&price_greater_than=${minPrice}`;
      }
      if (maxPrice) {
        url += `&price_less_than=${maxPrice}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setAllData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [brand, type]);

  const handleTagClick = (tag) => {
    setType(tag);
  };

  const handleSearch = () => {
    fetchData();
  };

  const handlePriceChange = (e, setPrice) => {
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setPrice(value);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="shop-all w-90" style={{ width: loading ? '100%' : '50%' }}>
        <div className="shop-filter">
        <div className="price-filter brand-list">
            <p className="price-title brand-title">Price Filter</p>
            <input
              type="text"
              value={minPrice}
              onChange={(e) => handlePriceChange(e, setMinPrice)}
              placeholder="Min Price"
            />
            <input
              type="text"
              value={maxPrice}
              onChange={(e) => handlePriceChange(e, setMaxPrice)}
              placeholder="Max Price"
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="brand-list">
            <p className="brand-title">Brands List</p>
            <ul className="brand-items">
              <li onClick={() => setBrand('Prada')} className={brand === 'Prada' ? 'active' : ''}>Prada</li>
              <li onClick={() => setBrand('Saint Laurent')} className={brand === 'Saint Laurent' ? 'active' : ''}>Saint Laurent</li>
              <li onClick={() => setBrand('Coach')} className={brand === 'Coach' ? 'active' : ''}>Coach</li>
              <li onClick={() => setBrand('Fendi')} className={brand === 'Fendi' ? 'active' : ''}>Fendi</li>
            </ul>
          </div>
          <div className="tag-list brand-list">
            <p className="tag-title brand-title">Tags List</p>
            <ul className="tag-items brand-items">
              <li onClick={() => handleTagClick('Bags')} className={type === 'Bags' ? 'active' : ''}>Bags</li>
              <li onClick={() => handleTagClick('Earrings')} className={type === 'Earrings' ? 'active' : ''}>Earrings</li>
              <li onClick={() => handleTagClick('Rings')} className={type === 'Rings' ? 'active' : ''}>Rings</li>
              <li onClick={() => handleTagClick('Necklaces')} className={type === 'Necklaces' ? 'active' : ''}>Necklaces</li>
              <li onClick={() => handleTagClick('Bracelets')} className={type === 'Bracelets' ? 'active' : ''}>Bracelets</li>
            </ul>
          </div>
         
        </div>
        {loading ? (
          <div style={{ position: 'absolute', top: '50%', left: '60%' }}>
            <PropagateLoader
              color='#592B2A'
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          allData.length > 0 ? (
            <div className="shop-element">
              <ShopList data={allData} />
            </div>
          ) : (
            <div className="shop-element">
              <p className='empty-wishlist font-cormor'>Məhsul tapılmadı!!!</p>
            </div>
          )
        )}
      </div>
      {/* {console.log(allData)} */}
      <UpIcon />
    
    </div>
  );
};

export default Shop;
