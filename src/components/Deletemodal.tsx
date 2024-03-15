import React from 'react';
import './Deletemodal.scss';

type Props = {
  deleteProduct: (productId: number) => Promise<void>,
  id: number,
  handleReset: () => void,
};

export const Deletemodal: React.FC<Props> = ({ deleteProduct, id, handleReset }) => {
  return (
    <div className="deletemodal-overlay">
      <div className="deletemodal">
        <div className="deletemodal__buttons">
          <button className="deletemodal__button" onClick={handleReset}>Cancel</button>
          <button className="deletemodal__button" onClick={() => {
            deleteProduct(id);
            handleReset();
          }}>Delete</button>
        </div>
      </div>
    </div>
  );
};