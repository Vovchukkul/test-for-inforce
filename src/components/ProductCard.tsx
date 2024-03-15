import { Size } from '../types/Size';
import './ProductCard.scss';

type Props = {
  id: number,
  imageUrl: string,
  name: string,
  count: number,
  size?: Size,
  weight: string,
};

export const ProductCard: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  count,
  size,
  weight,
}) => {
  return (
    <div className="productcard">
      <img src={imageUrl} alt={name} />
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
    </div>
  );
};