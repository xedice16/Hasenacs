import React, { useState } from 'react';
import '../Header/header.css';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "react-use-cart";

const Header = () => {
    const { totalUniqueItems } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleUserIconHover = () => {
        const userSettings = document.querySelector('.u-settings');
        userSettings.classList.toggle('show');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="header-content-bottom">
            <div className="header-bottom-all width-92">
                <div className="bottom-left">
                    <Link to="/">
                        <img className='logo' src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/logo.png" alt="Logo" />
                    </Link>
                </div>

               
                <div className="burger-menu" onClick={toggleMobileMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="nav-links">
                    <Link to="/">
                        <span>HOME</span>
                    </Link>
                    <Link to="/about">
                        <span>ABOUT</span>
                    </Link>
                    <Link to="/blog">
                        <span>BLOG</span>
                    </Link>
                    <Link to="/shop">
                        <span>SHOP</span>
                    </Link>
                    <Link to="/contact">
                        <span>CONTACT</span>
                    </Link>
                </div>

                {/* Mobile Menu Links */}
                <div className={`nav-links-mobile ${isMobileMenuOpen ? 'show' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        HOME
                    </Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                        ABOUT
                    </Link>
                    <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                        BLOG
                    </Link>
                    <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                        SHOP
                    </Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        CONTACT
                    </Link>
                </div>

                <div className="bottom-right">
                    <span className="count-of-basket">{totalUniqueItems}</span>
                    <Link to="/basket">
                        <FontAwesomeIcon icon={faCartShopping} className="basket-icon" />
                    </Link>
                    <Link to="/wishlist">
                        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                    </Link>
                    <div className="u-settings" onMouseEnter={handleUserIconHover} onMouseLeave={handleUserIconHover}>
                        <FontAwesomeIcon icon={faUser} className="heart-icon" />
                        <ul className="user-options">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
