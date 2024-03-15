import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Product } from './types/Product';
import { getProducts } from './api';

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log('Data successfully fetched');
      };
    }

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route index element={<MainPage products={products} setProducts={setProducts} />} />
      </Routes>
    </Router>
  );
}

export default App;
