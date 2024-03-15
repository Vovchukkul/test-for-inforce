import React, { useState } from 'react';
import './Modal.scss';
import { Product } from '../types/Product';

type Props = {
  handleCloseModal: () => void,
  addProduct: (product: Product) => void,
  products: Product[],
};

export const Modal: React.FC<Props> = ({ handleCloseModal, addProduct, products }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [sizeWidth, setSizeWidth] = useState('');
  const [sizeHeight, setSizeHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  }
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value);
  }
  const handleSizeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSizeWidth(e.target.value);
  }
  const handleSizeHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSizeHeight(e.target.value);
  }
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (image.trim().length === 0 || name.trim().length === 0) {
      setError('Please fill out all fields');
      return;
    }

    if (!image || !name || !count || !sizeWidth || !sizeHeight || !weight) {
      setError('Please fill out all fields');
      return;
    }

    if (+count <= 0 || +sizeWidth <= 0 || +sizeHeight <= 0 || +weight <= 0) {
      setError('Please enter valid values for count, size, and weight');
      return;
    }

    const prevProductId = products.length > 0 ? products[products.length - 1].id : 0;
    const newProductId = prevProductId + 1;
  
    const newProduct: Product = {
      id: newProductId,
      imageUrl: image,
      name: name,
      count: +count,
      size: { width: +sizeWidth, height: +sizeHeight },
      weight: weight.toString(),
    };
    addProduct(newProduct);
    handleCloseModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form className="modal__form" onSubmit={handleSubmit}>
          <h2>Add New Product</h2>
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            className="modal__input"
            value={image}
            onChange={handleImageChange}
            placeholder='Url'
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="modal__input"
            value={name}
            onChange={handleNameChange}
            placeholder='Name'
          />
          <label htmlFor="count">Count:</label>
          <input
            type="number"
            id="count"
            className="modal__input"
            value={count}
            onChange={handleCountChange}
            placeholder='Count'
          />
          <div className="modal__size-inputs">
            <label htmlFor="size">Size:</label>
            <input
              type="number"
              id="sizeWidth"
              className="modal__input"
              value={sizeWidth}
              onChange={handleSizeWidthChange}
              placeholder='Width'
            />
            <input
              type="number"
              id="sizeHeight"
              className="modal__input"
              value={sizeHeight}
              onChange={handleSizeHeightChange}
              placeholder='Height'
            />
          </div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            className="modal__input"
            value={weight}
            onChange={handleWeightChange}
            placeholder='Weight'
          />
          <div className="modal__buttons">
            <button className="modal__button" onClick={handleCloseModal}>Cancel</button>
            <button className="modal__button" type='submit'>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};
