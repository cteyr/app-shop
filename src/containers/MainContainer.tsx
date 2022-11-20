import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ItemProduct } from "../components/ItemProduct";
import { FiSearch } from "react-icons/fi";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/product";
import { Ring } from "@uiball/loaders";
import orderBy from "lodash/orderBy";

const MainContainer = () => {
  const [InputValue, setInputValue] = useState("");
  const [isActive, setisActive] = useState("");
  const {setProducts, Products, IsLoading } = useProducts();
  const [originalOrderProduct, setOriginalOrderProduct] = useState<Product[]>([]);
  const [Collapsed, setCollapsed] = useState("collapsed");
  const [CurrentCategory, setCurrentCategory] = useState("All");

  useEffect(()=>{
    setOriginalOrderProduct(Products);
  },[IsLoading])


  document.addEventListener('mouseup', function(e: MouseEvent) { // Al hacer click fuera del elemento id="archiveItems" se cierra el toogle-menu
    var container = document.getElementById('archiveItems');
    if (!container.contains(e.target as Node)) {
        setCollapsed("collapsed");
    }
  });

  const filterCategory = (): Product[] => { // Funcion que se ejecuta para filtrar por categoria 
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

  const Ordernar_asc = () => { // Ordena los productos de manera ascendente
    const newProductOrder = orderBy(Products, "price", "asc");
    setProducts(newProductOrder);
    if(isActive ==="" || isActive ==="Plus"){
      setisActive("Minus");
    }else{
      setisActive("");
      setProducts(originalOrderProduct);
    }
  };

  const Ordernar_desc = () => { // Ordena los productos de manera descendente
    const newProductOrder = orderBy(Products, "price", "desc");
    setProducts(newProductOrder);
    if(isActive ==="" || isActive ==="Minus"){
      setisActive("Plus");
    }else{
      setisActive("");
      setProducts(originalOrderProduct);  
    }
  };

  const HanleChangeSelectMenu = (category: string) => { // Muestra los productos seleccionados segun la categoria 
    if(Collapsed==="collapsed"){
      setCollapsed("");
    }else{
      setCollapsed("collapsed");
    }
    
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
      setCollapsed("collapsed");
    }
  };

  return (
    <div className="mainContainer">
      {IsLoading ? (
        <div className="container">
          <Header
            onClick={HanleChangeSelectMenu}
            collapsed={Collapsed}
            ordenar_asc={Ordernar_asc}
            ordenar_desc={Ordernar_desc}
            isActive={isActive}
          />
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
        <Ring size={80} speed={0.9} color="#1976d2" />
      )}
    </div>
  );
};
export { MainContainer };
