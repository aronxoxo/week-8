map.addControl(drawControl);

var defaultStyle = function(colorToFill){
  return {
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: colorToFill
  };
}

map.on('draw:created', function (e) {
    var layer = e.layer; // The Leaflet layer for the shape
    var id = L.stamp(layer); // The unique Leaflet ID for the layer
    var sideBar;
    var polygonLayer;

    if(polygonLayer){
      map.removeLayer(polygonLayer);
      console.log("in remove");
    }

    searchWithin = {
      "type": "FeatureCollection",
      "features": [layer.toGeoJSON()]
    };
    polygonLayer = L.geoJson(searchWithin, {style: defaultStyle('#58aab7')}).addTo(map);

    var ptsWithin = turf.within(dataPublicArt, searchWithin);

    markersHighlighted = _.map(ptsWithin.features, function(datum){
      return L.marker([datum.geometry.coordinates[1], datum.geometry.coordinates[0]], {icon: L.divIcon({className: 'highlight-icon'})}).addTo(map)
    });

    _.map(ptsWithin.features, function(datum){
      sideBar = '<div class = "shape" id = "'+ datum.id +'"><p><b>Title: '+ datum.properties.Title +'</b><br><u>Artist: ' + datum.properties.First_Name + ' ' + datum.properties.Last_Name + '</u><br><i>Category: '+datum.properties.Category + '</i><br>Location: '+datum.properties.Location+'</p></div><br>';
      $('#shapes').append(sideBar);
    });

    $('.sidebar div').click(function(){
      var clickedID;
      if(parseInt(this.id)){
        clickedID = this.id;
      }

      markerClicked = _.chain(ptsWithin.features).filter(function(datum){
        return datum.id.toString() === clickedID;
      }).map(function(datum){
        return L.marker([datum.geometry.coordinates[1], datum.geometry.coordinates[0]], {icon: L.divIcon({className: 'clicked-icon'})}).addTo(map).bindPopup("<b>About:</b><br> " + datum.properties.About).openPopup();
      }).value();
    });
});
