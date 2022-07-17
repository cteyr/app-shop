import { Product } from "../types/product";
import { Button } from "../components/Button";

const ItemProduct = ({ product }: IProps) => {
  return (
    <div key={product.id} className="item-product">
      <img src={product.image} alt="" />
      <div className="product-info">
        <p className="product-tittle" title={product.title}>
          {product.title}
        </p>
        <span className="product-category">{product.category}</span>
        <span className="product-price">{`${product.price} €`}</span>
        <div className="button-cart-buy">
          <Button text="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

type IProps = {
  product: Product;
};

export { ItemProduct };
