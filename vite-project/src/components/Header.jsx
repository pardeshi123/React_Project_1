import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const cart = useSelector(state => state.cart);

  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">ShoppyGlobe</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={20} /> <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
