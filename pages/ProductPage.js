
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

const products = {
  1: { name: 'Product 1', price: 100 },
  2: { name: 'Product 2', price: 200 }
};

function ProductPage() {
  const { id } = useParams();
  const product = products[id];

  useEffect(() => {
    trackEvent('view_item', {
      item_id: id,
      item_name: product.name,
      price: product.price
    });
  }, [id, product]);

  const addToCart = () => {
    trackEvent('add_to_cart', {
      item_id: id,
      item_name: product.name,
      price: product.price
    });
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
    