import './ProductList.scss';
import { ProductCard } from "./ProductCard";
import { Product } from '../types/Product';

type Props = {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
  deleteProduct: (productId: number) => Promise<void>,
};

export const ProductList: React.FC<Props> = ({ products, setProducts, deleteProduct }) => {
  return (
    <div className="productlist">
      <ul className="productlist__list">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              count={product.count}
              size={product.size}
              weight={product.weight}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </ul>
    </div>
  );
};