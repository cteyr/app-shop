import { useEffect } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { FiSearch } from "react-icons/fi";
import { useProducts } from "../hooks/useProducts";

const MainContainer = () => {
  const { getAllProducts, Products, setProducts, IsLoading, setIsLoading } =
    useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        <div className="containerInput">
          <Input placeholder="Search" />
          <FiSearch className="search-icon" />
        </div>
        <div className="product-container">
          {Products.map((product) => (
            <div key={product.id} className="item-product">
              {product.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { MainContainer };
