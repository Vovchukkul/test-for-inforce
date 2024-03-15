import './MainPage.scss';
import { useState } from "react";
import { ProductList } from "../components/ProductList";
import { Modal } from "../components/Modal";
import { Product } from '../types/Product';

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

  return (
    <div className="mainpage">
      <h1 className="mainpage__title">Product List</h1>
      <button className="mainpage__addProduct" onClick={() => handleModalOpen()}>ADD</button>
      {isModalOpen && <Modal handleCloseModal={handleCloseModal} />}
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};