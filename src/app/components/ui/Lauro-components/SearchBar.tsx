import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
//import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Item, Valor ou Código..."
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        <FaSearch />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
