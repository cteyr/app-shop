import { BiArchiveIn } from "react-icons/bi";
import { useState } from "react";
const Header = ({ onClick, collapsed }: IProps) => {
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
              <BiArchiveIn
                size={28}
                color="#616161"
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
};

export { Header };
