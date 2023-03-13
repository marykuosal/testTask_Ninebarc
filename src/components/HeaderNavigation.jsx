import { useDispatch } from "react-redux";
import React from "react";

const HeaderNavigation = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="container">
        <div className="header__content content">
          <div className="header__item">
            <span
              className="link"
              onClick={() => {
                dispatch({type: "search"});
              }}
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
