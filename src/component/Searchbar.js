import React, { useState } from "react";

function Searchbar(props) {
  const { handleChange, searchText } = props;

  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Hunt superheroes here..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default Searchbar;
