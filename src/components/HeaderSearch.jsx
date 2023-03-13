import { React, useRef } from "react";
import { getBooks } from "../asyncActions/books";
import { useDispatch } from "react-redux";


const HeaderSearch = () => {
  const dispatch = useDispatch();

  const searchInput = useRef(null);
  return (
    <div className="header">
      <div className="container">
        <div className="header__content content">
          <div className="header__item">
            <input
              type="search"
              className="input-search"
              id="site-search"
              ref={searchInput}
            />
            <button
              className="btn-search"
              onClick={() => {
                getBooks()(dispatch, searchInput.current.value);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
