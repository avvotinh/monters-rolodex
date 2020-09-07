import React from "react";
import "./searchField.css";

export const SearchField = ({ placeholder, handleChange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
