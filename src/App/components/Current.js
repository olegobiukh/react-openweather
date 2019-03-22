import React from "react";

const Current = ({ data }) => {
  return (
    <>
      {data && (
        <div className="Main border">
          <div className="Main__weather">
            <img
              src={`http://openweathermap.org/img/w/${
                data.weather[0].icon
              }.png`}
              className="Main__img"
              alt={data.weather[0].description}
            />
            <div className="Main__temperature">
              <h1>{Math.round(data.main.temp)}&#176;F</h1>

              <div className="Main__info">
                <h2>More info:</h2>
                <p>"Speed":{data.wind.speed}</p>
                <p>"Humidity":{data.main.humidity}</p>
                <p>"Pressure"{data.main.pressure}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Current;
