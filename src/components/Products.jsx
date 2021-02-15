import React, { useContext } from 'react';
import Loader from '../utils/Loader';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../contex/AppContex';
const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  }

  if (products.length === 0) {
    return <Loader />
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
