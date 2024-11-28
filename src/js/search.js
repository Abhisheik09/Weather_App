// Import the Places.js library styles
import 'places.js/dist/places.css';
const places = require('places.js');

function autoComplete() {
  const KEY = 'f7093e7853be493e407d46a434f9c54b';
  const ID = 'plBAKYUGY2FI';

  // Initialize Places.js with configuration
  const placesAutocomplete = places({
    appId: ID,
    apiKey: KEY,
    container: document.querySelector('#search'),
    templates: {
      value(suggestion) {
        return suggestion.name;
      },
    },
  }).configure({
    type: 'city',
    aroundLatLngViaIP: true,
  });

  return placesAutocomplete;
}

export default autoComplete;
