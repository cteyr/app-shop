import { useState } from "react";
import { api } from "../api/api";
import { Product } from "../types/product";

const useProducts = () => {
  const [Products, setProducts] = useState<Product[]>([]);
  const [IsLoading, setIsLoading] = useState(false);

  const handleResponse = async () => {
    setIsLoading(false);
    const { response, error } = await api.getProducts();
    if (error) {
      console.log(error);
    } else {
      setIsLoading(true);
      setProducts(response);
    }
  };

  const getAllProducts = () => {
    handleResponse();
  };

  return { getAllProducts, Products, setProducts, IsLoading, setIsLoading };
};
export { useProducts };
