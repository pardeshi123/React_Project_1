import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={styles.card}>
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`} style={styles.link}>View Details</Link>
      <button onClick={() => dispatch(addToCart(product))} style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    textAlign: 'center',
    background: 'white',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  link: {
    display: 'block',
    margin: '10px 0',
    color: '#007bff',
    textDecoration: 'none',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }
};

export default ProductItem;
