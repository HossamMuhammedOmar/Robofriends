import React from 'react';
import './Card.css';

const SearchBox = function ({ searchChange }) {
  return (
    <div>
      <input
        className="search-robo"
        type="search"
        placeholder="search for robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
