import React, { useEffect, useState } from 'react';
import { getProducts } from '../Api/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;