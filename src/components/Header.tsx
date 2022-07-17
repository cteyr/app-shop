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
              <div id="All" className="option" onClick={() => onClick("All")}>
                All
              </div>
              <div
                id="Men's clothing"
                className="option"
                onClick={() => onClick("Men's clothing")}
              >
                Men's clothing
              </div>
              <div
                id="Jewelery"
                className="option"
                onClick={() => onClick("Jewelery")}
              >
                Jewelery
              </div>
              <div
                id="Electronics"
                className="option"
                onClick={() => onClick("Electronics")}
              >
                Electronics
              </div>
              <div
                id="Women's clothing"
                className="option"
                onClick={() => onClick("Women's clothing")}
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
