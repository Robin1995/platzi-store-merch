import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import AppContext from '../contex/AppContex';
const Header = () => {
  const { state } = useContext(AppContext);

  const { cart } = state;
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
