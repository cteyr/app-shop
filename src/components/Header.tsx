import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="tittle">
        <h1>Shop</h1>
      </div>
      <div className="cart-icon">
        <BsCart3 size={25} color="#616161" />
      </div>
    </div>
  );
};
export { Header };
