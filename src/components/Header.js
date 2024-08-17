import React, { useState } from "react";
import "./css/Header.css";
// import { FaSearch } from "react-icons/fa";
const Header = ({ setFilterData, setSelectedType ,selectedType}) => {
  const buttons = [
    { label: "All", type: "All" },
    { label: "Breakfast", type: "breakfast" },
    { label: "Lunch", type: "lunch" },
    { label: "Dinner", type: "dinner" },
  ];
  return (
    <div className="header_container">
      <nav className="navbar ">
        <div className="container-fluid">
          <h1>Foody Zone</h1>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setFilterData(e.target.value)}
            />
            {/* <button
              className="btn btn-outline-danger text-white border-2"
              type="submit"
            >
              <FaSearch />
            </button> */}
          </form>
        </div>
      </nav>

      {/* butns group............................................. */}
      <div className="btn_grp_container">
        {buttons?.map((btn, index) => (
          <button type="button" className={`btn btn-danger ${btn.type === selectedType ? "active" : ""}`} key={index} onClick={() => setSelectedType(btn.type)}>
            {btn.type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
