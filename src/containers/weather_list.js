import React , {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


export default class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp) ;
    const press = cityData.list.map(weather => weather.main.pressure) ;
    const hums = cityData.list.map(weather => weather.main.humidity) ;
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    console.log(temps);
    return (
       <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={press} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={hums} color="green" units="%"/>
        </td>
      </tr>

    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);
