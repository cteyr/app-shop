import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { FiSearch } from "react-icons/Fi";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        <div className="containerInput">
          <Input placeholder="Search" />
          <FiSearch className="search-icon" />
        </div>
        <div className="product-container"></div>
      </div>
    </div>
  );
};
export { MainContainer };
