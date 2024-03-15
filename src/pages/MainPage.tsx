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
      setProducts(prevProducts => [...prevProducts, product]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (productId: number) => {
    try {
      await client.delete(`/products/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  return (
    <div className="mainpage">
      <h1 className="mainpage__title">Product List</h1>
      <button className="mainpage__addProduct" onClick={() => handleModalOpen()}>ADD</button>
      {isModalOpen && <Modal handleCloseModal={handleCloseModal} addProduct={addProduct} />}
      <ProductList products={products} setProducts={setProducts} deleteProduct={deleteProduct} />
    </div>
  );
};