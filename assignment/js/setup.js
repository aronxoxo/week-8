var map = L.map('map', {
  center: [42.3736, -71.1097],
  zoom: 14
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var dataPublicArt = [];
var searchWithin = [];
var markersHighlighted = [];
var markerClicked = [];

var drawControl = new L.Control.Draw({
  draw: {
    polyline: false,
    polygon: true,
    circle: false,
    marker: false,
    rectangle: false
  }
});

$.ajax('https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/master/Landmark/Public_Art/LANDMARK_PublicArt.geojson').done(function(data) {
  dataPublicArt =  JSON.parse(data);
  console.log(dataPublicArt);
  var markersArt = _.map(dataPublicArt.features, function(datum){
    return L.marker([datum.geometry.coordinates[1], datum.geometry.coordinates[0]], {icon: L.divIcon({className: 'art-icon'})}).addTo(map)
  });
});
