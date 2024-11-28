/* eslint-disable no-alert */
/* eslint-disable no-console */
import dom from './dom';

const events = (function () {
  async function showFlow(data) {
    dom().clearForms();
    dom().fillCard(data);
    dom().imageSwitch(data, 'image');
    dom().show('search');

    const farCel = document.getElementById('farCel');
    farCel.onclick = async function changeTemp() {
      const data2 = await dom().converter(data);
      dom().fillCard(data2);
    };
  }

  async function forecastFlow(data) {
    dom().clearForms();
    dom().createCard(data);
    dom().show('forecast');
  }

  async function getSearch(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=903507f17d707fecd352d38301efba77&units=metric`;
      const response = await fetch(url, { mode: 'cors' });
      const cityData = await response.json();
      await showFlow(cityData);
    } catch (error) {
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }

  async function getLocation(searchBar) {
    const city = (document.getElementById(searchBar).value).toLowerCase();
    await getSearch(city);
  }

  async function getForecast() {
    try {
      const value = (document.getElementById('search').value).toLowerCase();
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=903507f17d707fecd352d38301efba77`;
      const response = await fetch(url, { mode: 'cors' });
      const cityData = await response.json();
      await forecastFlow(cityData);
    } catch (error) {
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }

  return {
    getSearch, showFlow, getForecast, getLocation,
  };
})();

export default events;
