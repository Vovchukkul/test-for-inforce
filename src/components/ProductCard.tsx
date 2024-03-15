import { useState } from 'react';
import { Size } from '../types/Size';
import './ProductCard.scss';
import { Deletemodal } from './Deletemodal';

type Props = {
  id: number,
  imageUrl: string,
  name: string,
  count: number,
  size?: Size,
  weight: string,
  deleteProduct: (productId: number) => Promise<void>,
};

export const ProductCard: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  count,
  size,
  weight,
  deleteProduct,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
  };

  const handleReset = () => {
    setIsPressed(false);
  };

  return (
    <div className="productcard">
      <img src={imageUrl} alt={name} className='imagecard' />
      <h3>{name}</h3>
      <div className="productcard-info">
        <div className="productcard-info-item">
          <span>Count:</span>
          <span>{count}</span>
        </div>
        <div className="productcard-info-item">
          <span>Size:</span>
          <span>{size?.width}</span>
          <span>{size?.height}</span>
        </div>
        <div className="productcard-info-item">
          <span>Weight:</span>
          <span>{weight}</span>
        </div>
      </div>
      <div className="icon-close" onClick={handleClick} />
      {isPressed && <Deletemodal id={id} handleReset={handleReset} deleteProduct={deleteProduct} />}
    </div>
  );
};