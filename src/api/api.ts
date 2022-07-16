import { Product } from "../types/product";

const BASE_API_URL = "https://fakestoreapi.com/products/";



const request = async (
    //path: string,
    method: Method = "GET"
  ): Promise<IResponse> => {
    try {
      const response = await fetch(`${BASE_API_URL}`, {
        method,
        headers: { "Content-Type": "application/json" },
      });
      const responseBody = await response.json();

      return {response:responseBody, error:null};
    } catch (error) {
      return  {response:null, error} ;
    }
  };
  
  const getProducts = () => {
    return request();
  };

  type IResponse =
   { response: Product[]; error: null }
  |{ response: null; error: Error };
  
  const api = { getProducts };
  
  type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  
export {api}