import React, { useState, useEffect } from 'react';
import fetchProduct from '../lib/api';

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);    
    fetchProduct(productId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [productId]); 

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div>
          <p>Product ID: {product.id}</p>
          <p>Product Name: {product.name}</p>
          <p>Product Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;


