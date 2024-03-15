import { useState } from 'react';
import './Modal.scss';
import { Product } from '../types/Product';

type Props = {
  handleCloseModal: () => void,
  addProduct: (product: Product) => void,
};

export const Modal: React.FC<Props> = ({ handleCloseModal, addProduct }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState(0);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  }
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+e.target.value);
  }
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
  }
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct: Product = {
      id: Math.random(),
      imageUrl: image,
      name: name,
      count: count,
      size: {width: +size, height: +size},
      weight: weight.toString(),
    };
    addProduct(newProduct);
    handleCloseModal();
  }

  return (
    <form className="modal" onSubmit={handleSubmit}>
      <div className="modal__inputs">
        <label htmlFor="">Image</label>
        <input 
          type="text"
          className="modal__input"
          value={image}
          onChange={handleImageChange}
        />
        <label htmlFor="">Name</label>
        <input 
          type="text" 
          className="modal__input" 
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="">Count</label>
        <input 
          type="text" 
          className="modal__input" 
          value={count}
          onChange={handleCountChange}
        />
        <label htmlFor="">Size</label>
        <input 
          type="text" 
          className="modal__input" 
          value={size}
          onChange={handleSizeChange}
        />
        <label htmlFor="">Weight</label>
        <input 
          type="text" 
          className="modal__input" 
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="modal__buttons">
        <button className="modal__button" onClick={() => handleCloseModal()}>Cancel</button>
        <button className="modal__button" type='submit'>Add</button>
      </div>
    </form>
  );
};