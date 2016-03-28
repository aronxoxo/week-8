/* =====================
Lab 1: Turf.js

"Our maps have only interpreted data in various ways; the point is to change it."


In the coming weeks, we'll be looking at ways to explore, analyze, and create data.
This will require us to build upon concepts that we've already mastered. Turf.js is a
javascript library which provides some excellent utilities for fast, in-browser
spatial analysis.

Recall that GeoJSON is a format for representing spatial objects in JSON. It encodes
not only the geometric entities themselves (Points, Lines, Polygons) but also associated
properties (these are the properties of Features) and collections thereof (FeatureGroups).

This is useful for sending spatial data over the wire (we can present these objects in text
since they are JSON). But the predictable structure of a geojson object (there are
infinitely many possible geojson objects, though they all meet the criteria specified
here: http://geojson.org/) also benefits us by offering a structure which our code can
expect.

Consider the functions you've written before: their input has depended on the type
of data they receive. If you write a function which expects an object that has an 'x' and
a 'y' property, you can access those within your function body:

function exampleFunction(someObject) {
  return someObject.x + someObject.y;
}
exampleFunction({x: 1, y: 22}) === 23

Turf leans on the predictable structure of geojson to provide its analytic functions.
Here, Turf lays out the types you can expect to find throughout its documentation:
http://turfjs.org/static/docs/global.html

Let's look to a turf function's docs: http://turfjs.org/static/docs/module-turf_average.html
==================================================================================================
name              - Type                        - Description
==================================================================================================
polygons          - FeatureCollection.<Polygon> - polygons with values on which to average
points            - FeatureCollection.<Point>   - points from which to calculate they average
field             - String                      - the field in the points features from which to
                                                  pull values to average
outputField       - String                      - the field in polygons to put results of the averages
==================================================================================================
Returns           - FeatureCollection.<Polygon> - polygons with the value of outField set to
                                                  the calculated averages
==================================================================================================

What this tells us is that turf.average takes four arguments. The first
argument is a FeatureCollection of Polygons, the second, is a FeatureCollection
of Points, the third and fourth is a bit of text.

With those inputs, a FeatureCollection of polygons is produced which has the average value
of "field" from the points (captured within a spatial join) stored on its properties' field
"outputField".

All of the functionality within turf can be similarly understood by looking to its documentation.
Turf documentation: http://turfjs.org/static/docs/
Turf examples: http://turfjs.org/examples.html


Each exercise in this lab involves the creation of GeoJSON (feel free to use geojson.io) and
the use of that GeoJSON in some turf functions.

NOTE: you can use geojson.io's table view to attach properties to your geometries!

Exercise 1: Finding the nearest point
Take a look at http://turfjs.org/static/docs/module-turf_nearest.html
Produce a Feature and a FeatureCollection (look to the in-documentation examples if this is
unclear) such that the single Point Feature is in Philadelphia and the nearest point in the
FeatureCollection (there should be at least two other points in this collection) happens
to be in New York City. Plot the NYC point and no others with the use of turf.nearest.
===================== */
$('#ex1').click(function(){
  map.setView([40.704586878965245, -74.0097427368164],14);
});
var nearestInNYC = turf.nearest(dataPhilly, dataNYC);
var lab1Ex1Marker = L.marker([nearestInNYC.geometry.coordinates[1], nearestInNYC.geometry.coordinates[0]], {icon: L.divIcon({className: 'nearest-icon'})}).addTo(map).bindPopup("This is the lab1, excercise 1 marker<br>"+[nearestInNYC.geometry.coordinates[1], nearestInNYC.geometry.coordinates[0]]).openPopup();
/* =====================
Exercise 2: Finding the average point value (a form of spatial join)
Docs here: http://turfjs.org/static/docs/module-turf_average.html
Produce one FeatureCollection of points (at least 5) and one of polygons (at least 2)
such that, by applying turf.average, you generate a new set of polygons in which one of
the polygons has the property "averageValue" with a value of 100.
===================== */
$('#ex2').click(function(){
  map.setView([39.9522, -75.1639],14);
});

var setStyle = function(colorToFill){
  return {
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: colorToFill
  };
};

var averagedInPolygons = turf.average(dataLab1Ex2Polygons, dataLab1Ex2Points, 'num', 'num_avg');
var polygonOne = averagedInPolygons.features[0];
var polygonTwo = averagedInPolygons.features[1];

var resultPolygonOne = L.geoJson(polygonOne, {style: setStyle('#ffb733')}).addTo(map).bindPopup("The average value of this Polygon is: "+ polygonOne.properties.num_avg.toString()).openPopup();
var resultPolygonTwo = L.geoJson(polygonTwo, {style: setStyle('#00ffa5')}).addTo(map).bindPopup("The average value of this Polygon is: "+ polygonTwo.properties.num_avg.toString()).openPopup();
/* =====================
Exercise 3: Tagging points according to their locations
http://turfjs.org/static/docs/module-turf_tag.html
It can be quite useful to 'tag' points in terms of their being within this or that
polygon. You might, for instance, want to color markers which represent dumpsters
according to the day that trash is picked up in that area. Create three polygons
and use properties on those polygons to color 5 points.
===================== */
$('#ex3').click(function(){
  map.setView([39.9522, -75.1639],14);
});

var taggedInPolygons = turf.tag(lab1Ex3Points, lab1Ex3Polygons, "location", "markerLocation");

var pointsCenterCity = _.chain(taggedInPolygons.features).filter(function(datum){
  return datum.properties.markerLocation === "Center City";
}).map(function(datum) {
  return L.marker([datum.geometry.coordinates[1], datum.geometry.coordinates[0]], {icon: L.divIcon({className: 'icon-center-city'})}).addTo(map);
}).value();
var pointsWestPhilly = _.chain(taggedInPolygons.features).filter(function(datum){
  return datum.properties.markerLocation === "West Philadelphia";
}).map(function(datum) {
  return L.marker([datum.geometry.coordinates[1], datum.geometry.coordinates[0]], {icon: L.divIcon({className: 'icon-west-philly'})}).addTo(map);
}).value();
var pointsNorthPhilly = _.chain(taggedInPolygons.features).filter(function(datum){
  return datum.properties.markerLocation === "North Philadelphia";
}).map(function(datum) {
  return L.marker([datum.geometry.coordinates[1], datum.geometry.coordinates[0]], {icon: L.divIcon({className: 'icon-north-philly'})}).addTo(map);
}).value();

/* =====================
*STRETCH GOAL*
Exercise 4: Calculating a destination
A species of bird we're studying is said to travel in a straight line for 500km
during a migration before needing to rest. One bird in a flock we want to track
has a GPS tag which seems to be on the fritz. We know for a fact that it started
flying from [-87.4072265625, 38.376115424036016] and that its last known coordinate
was [-87.5830078125, 38.23818011979866]. Given this information, see if you can
determine where we can expect this flock of birds to rest.
===================== */
$('#stretch').click(function(){
  map.setView([35.135086893534336, -91.29668251511623],14);
});
var bearing = turf.bearing(pointStart, pointLastKnown);
var pointDestination = turf.destination(pointStart, 500, bearing, 'kilometers');
var markerDestination = L.marker([pointDestination.geometry.coordinates[1], pointDestination.geometry.coordinates[0]], {icon: L.divIcon({className: 'icon-destination'})}).addTo(map).bindPopup("This is the destination of the flock.<br>"+[pointDestination.geometry.coordinates[1], pointDestination.geometry.coordinates[0]]).openPopup();
