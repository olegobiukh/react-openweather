import React from "react";

const Forecast = ({ isLoaded, forecast }) => {
  const weekDays = [0, 8, 16, 24, 32];
  const week = ["Su", "M", "T", "W", "Th", "F", "Sa"];
  return (
    <>
      {forecast && (
        <div className="Forecast border">
          <h2>Forecast</h2>
          {weekDays.map(weekDay => {
            const date = new Date(forecast.list[weekDay].dt_txt);
            const day = week[date.getDay()];
            return (
              <div key={weekDay} className="Forecast__box">
                <p>{day}</p>
                <img
                  src={`http://openweathermap.org/img/w/${
                    forecast.list[weekDay].weather[0].icon
                  }.png`}
                  alt={forecast.list[weekDay].weather[0].description}
                />
                <p>{Math.round(forecast.list[weekDay].main.temp)}&#176;C</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Forecast;
