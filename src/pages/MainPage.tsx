import './MainPage.scss';
import { useState } from "react";
import { ProductList } from "../components/ProductList";
import { Modal } from "../components/Modal";
import { Product } from '../types/Product';
import { client } from '../utils/fetchClient';

type Props = {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
};

export const MainPage: React.FC<Props> = ({ products, setProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const addProduct = async (product: Product) => {
    try {
      await client.post<Product>('/products', product);
      const updatedProducts = await client.get<Product[]>('/products');
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (productId: number) => {
    try {
      await client.delete(`/products/${productId}`);
      const updatedProducts = await client.get<Product[]>('/products');
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
};


  return (
    <div className="mainpage">
      <h1 className="mainpage__title">Product List</h1>
      <button className="mainpage__addProduct" onClick={() => handleModalOpen()}>ADD</button>
      {isModalOpen && <Modal handleCloseModal={handleCloseModal} addProduct={addProduct} products={products} />}
      <ProductList products={products} setProducts={setProducts} deleteProduct={deleteProduct} />
    </div>
  );
};