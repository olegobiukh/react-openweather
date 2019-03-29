import React from "react";

const Search = ({ cityName, getweather }) => {
  return (
    <from class="Search" onClick={getweather}>
      <input
        className="Search__input"
        placeholder="Enter your city"
        type="text"
        name="cityname"
        id="cityname"
        value={cityName}
        autoComplete="off"
      />
      <button className="Search__btn">Get Weather</button>
    </from>
  );
};

export default Search;
