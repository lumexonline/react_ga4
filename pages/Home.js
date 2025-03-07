
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 }
];

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name} - ${product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
    