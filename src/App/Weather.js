import React from "react";

import { getByCity, getForecastByCity } from "./api.js";
import Current from "./components/Current";
import Forecast from "./components/Forecast";

class Weather extends React.Component {
  state = {
    city: "",
    data: null,
    forecast: null,
    error: true
  };
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  async loadData() {
    const { city } = this.props.match.params;
    let error = false;

    if (city === this.state.city) {
      return;
    }

    const data = await getByCity(city);
    const forecast = await getForecastByCity(city);

    if (!data) {
      error = true;
    }

    this.setState({
      city,
      data,
      forecast,
      error
    });
  }

  render() {
    const { data, forecast, error } = this.state;
    if (data) {
      return (
        <div className="Weather">
          <div className="Weather__title border">
            <h1>{data.name}</h1>
          </div>
          <Current data={data} />
          <Forecast forecast={forecast} />
        </div>
      );
    } else if (error) {
      return <h2>Sorry, there is no such city</h2>;
    } else {
      return <h2>Loading</h2>;
    }
  }
}

export default Weather;
