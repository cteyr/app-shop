import {useReducer,useEffect } from "react";
import { BiArchiveIn } from "react-icons/bi";
import { TbPlus } from "react-icons/tb";
import { TbMinus } from "react-icons/tb";

const initialState = {
  Minus: "",
  Plus: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Minus":
      return {
        Minus: "Active",
        Plus: "",
      };
    case "Plus":
      return {
        Minus: "",
        Plus: "Active",
      };
      case "":
      return {
        Minus: "",
        Plus: "",
      };
  }
  return state;
};

const Header = ({ onClick, ordenar_asc, ordenar_desc, collapsed, isActive }: IProps) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
    dispatch({ type: isActive });
  },[isActive])

  return (
    <div className="header">
      <div className="tittle">
        <h1>Shop</h1>
      </div>

      <div className="select-container">
        <div className="select">
          <div className="selected-option">
            <span className="select-value"></span>
            <span className="select-icon">
              <TbMinus
                id="TbMinus"
                className={`svg ${state.Minus}`}
                size={28}
                height={80}
                onClick={ordenar_asc}
              />
              <TbPlus id="TbPlus" className={`svg ${state.Plus}`} size={28} onClick={ordenar_desc} />
              <BiArchiveIn
                id="archiveItems"
                className="svg"
                size={28}
                onClick={() => onClick("")}
              />
            </span>
            <div data-toggle={collapsed} className="options">
              <div id="all" className="option" onClick={() => onClick("all")}>
                All
              </div>
              <div
                id="men's clothing"
                className="option"
                onClick={() => onClick("men's clothing")}
              >
                Men's clothing
              </div>
              <div
                id="jewelery"
                className="option"
                onClick={() => onClick("jewelery")}
              >
                Jewelery
              </div>
              <div
                id="electronics"
                className="option"
                onClick={() => onClick("electronics")}
              >
                Electronics
              </div>
              <div
                id="women's clothing"
                className="option"
                onClick={() => onClick("women's clothing")}
              >
                Women's clothing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type IProps = {
  onClick(option: string): void;
  collapsed: string;
  isActive: string;
  ordenar_asc?: () => void;
  ordenar_desc?: () => void;
};

export { Header };
