import React from "react";

const Search = ({ cityName, getweather, getCityName }) => {
  return (
    <form class="Search" onSubmit={getweather}>
      <input
        className="Search__input"
        placeholder="Enter your city"
        type="text"
        name="cityname"
        id="cityname"
        value={cityName}
        onChange={getCityName}
        autoComplete="off"
      />
      <button className="Search__btn">Get Weather</button>
    </form>
  );
};

export default Search;
