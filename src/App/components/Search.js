import React from "react";

const Search = ({ cityName, onInputChange, getweather }) => {
  return (
    <div class="Search">
      <input
        className="Search__input"
        placeholder="Enter your city"
        type="text"
        name="cityname"
        id="cityname"
        value={cityName}
        onChange={onInputChange}
        autoComplete="off"
      />
      <button className="Search__btn" onClick={getweather}>
        Get Weather
      </button>
    </div>
  );
};

export default Search;
