import React from "react";
import { Route } from "react-router-dom";

import Search from "./components/Search";
import Weather from "./Weather";

class App extends React.Component {
  state = {
    data: null,
    isLoading: false,
    cityname: ""
  };

  getweather = event => {
    event.preventDefault();
    const cityname = document.getElementById("cityname").value;

    const { history } = this.props;
    history.push(cityname.toLowerCase());
  };

  getCityName = city => {
    this.setState({ cityname: city });
  };

  render() {
    const { cityName } = this.state;

    return (
      <div className="App">
        <div className="Catalog">
          <Search cityname={cityName} getweather={this.getweather} />
          <Route exact path="/:city" component={Weather} />
        </div>
      </div>
    );
  }
}

export default App;
