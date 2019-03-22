import React from "react";

import { getByCity, getForecastByCity } from "./api.js";
import Current from "./components/Current";
import Forecast from "./components/Forecast";

class Weather extends React.Component {
  state = {
    city: "",
    data: null,
    forecast: null
  };
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  async loadData() {
    const { city } = this.props.match.params;
    if (city === this.state.city) {
      return;
    }

    const data = await getByCity(city);
    const forecast = await getForecastByCity(city);

    this.setState({
      city,
      data,
      forecast
    });
  }

  render() {
    const { data, forecast } = this.state;
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
    } else {
      return <h2>Loading</h2>;
    }
  }
}

export default Weather;
