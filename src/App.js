import React, { useState } from 'react';
import Card from './Card';
import './App.css';
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showProducts, setShowProducts] = useState(false);

  // const fetchProducts = () => {
  //   setLoading(true);
  //   setError('');

  //   fetch('https://dummyjson.com/products')
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProducts(data.products);
  //       setLoading(false);
  //       setShowProducts(true);
  //     })
  //     .catch((err) => {
  //       setError('Failed to load products.');
  //       console.error(err);
  //       setLoading(false);
  //     });
  // };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await axios.get('https://dummyjson.com/products')
      console.log(res)
      if (res?.status === 200) {
        setProducts(res?.data?.products)
        setShowProducts(true);
      }
      
    } catch (ex) {
      console.log(ex)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Thrift Store</h1>
      </header>

      {!showProducts && (
        <button className="fetch-button" onClick={fetchProducts} disabled={loading}>
          {loading ? 'Loading...' : 'Show Products'}
        </button>
      )}

      {error && <p className="error-message">{error}</p>}

      {showProducts && (
        <div className="product-grid">
          {products.map((product) => (
            // console.log(product,'product'),
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
