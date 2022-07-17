import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ItemProduct } from "../components/ItemProduct";
import { FiSearch } from "react-icons/fi";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/product";
import { Ring } from "@uiball/loaders";

const MainContainer = () => {
  const [InputValue, setInputValue] = useState("");
  const { getAllProducts, Products, IsLoading } = useProducts();
  const [Collapsed, setCollapsed] = useState("collapsed");
  const [CurrentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    getAllProducts();
  }, []);

  const filterCategory = (): Product[] => {
    if (CurrentCategory !== "All") {
      const filtered = Products.filter(
        (product) => product.category === CurrentCategory
      );

      const newfiltered = filtered.filter((product) =>
        product.title.toUpperCase().includes(InputValue.toUpperCase())
      );
      return newfiltered;
    } else if (CurrentCategory === "All") {
      const filtered = Products;
      const newfiltered = filtered.filter((product) =>
        product.title.toUpperCase().includes(InputValue.toUpperCase())
      );
      return newfiltered;
    }
  };

  const HanleChangeSelectMenu = (category: string) => {
    if (category !== "") {
      const categorySelected = document.getElementById(category)?.textContent;
      if (categorySelected === "All") {
        setCurrentCategory("All");
      } else if (categorySelected === "Men's clothing") {
        setCurrentCategory("men's clothing");
      } else if (categorySelected === "Jewelery") {
        setCurrentCategory("jewelery");
      } else if (categorySelected === "Electronics") {
        setCurrentCategory("electronics");
      } else if (categorySelected === "Women's clothing") {
        setCurrentCategory("women's clothing");
      }
    }

    if (Collapsed === "") {
      setCollapsed("collapsed");
    } else {
      setCollapsed("");
    }
  };

  return (
    <div className="mainContainer">
      {IsLoading ? (
        <div className="container">
          <Header onClick={HanleChangeSelectMenu} collapsed={Collapsed} />
          <div className="containerInput">
            <Input
              placeholder="Search"
              value={InputValue}
              handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
            <FiSearch className="search-icon" />
          </div>

          <div className="product-container">
            {filterCategory().map((product) => (
              <ItemProduct product={product} key={product.id} />
            ))}
          </div>
        </div>
      ) : (
        <Ring size={80} speed={0.9} color="hsl(240, 5%, 38%)" />
      )}
    </div>
  );
};
export { MainContainer };
