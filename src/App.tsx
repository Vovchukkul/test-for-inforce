import React, { useEffect } from 'react';
import './App.scss';
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Product } from './types/Product';
import { getProducts } from './api';
import { useLocalStorage } from './utils/useLocalStorage';

export const App = () => {
  const [products, setProducts] = useLocalStorage<Product[]>('products', []);

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
  }, [setProducts]);

  return (
    <Router>
      <Routes>
        <Route index element={<MainPage products={products} setProducts={setProducts} />} />
      </Routes>
    </Router>
  );
}

export default App;
