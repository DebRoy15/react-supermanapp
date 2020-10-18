import React from "react";
import SearchResultItems from "./SearchResultItems";

function SearchResults(props) {
  const { superheroData = [] } = props;

  console.log("superheroData", superheroData);
  return (
    <div>
      {superheroData.map((superhero) => (
        <SearchResultItems data={superhero} />
      ))}
    </div>
  );
}

export default SearchResults;
