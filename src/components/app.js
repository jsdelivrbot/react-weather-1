import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        <SearchBar />
        <WeatherList/>
      </div>
    );
  }
}
