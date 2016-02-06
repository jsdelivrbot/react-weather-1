import axios from 'axios';
const API_KEY = '7f6cd5f9342be53cd393c1bb2ff86b54';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY;

export const FETCH_WEATHER='FETCH_WEATHER'

export function fetchWeather(city) {
  const url = ROOT_URL +'&q='+city;
  const request = axios.get(url);

  console.log('request', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
