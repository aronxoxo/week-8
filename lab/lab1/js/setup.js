var map = L.map('map', {
  center: [40.000, -85.1639],
  zoom: 14
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var dataPhilly = {
  "type":"Feature",
  "properties":{},
  "geometry":{
    "type":"Point",
    "coordinates":[-75.15867233276367,39.946595007738985]
  }
};
var dataNYC = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.99703979492188,
          40.73867310804892
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.0097427368164,
          40.704586878965245
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.99085998535155,
          40.71005225842899
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.00390625,
          40.72176227543699
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.95000457763672,
          40.71005225842899
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.91670227050781,
          40.76208101161184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.99703979492188,
          40.762341053140275
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.97403717041016,
          40.748557450215635
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9441680908203,
          40.7475170623211
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.91532897949219,
          40.72254287000298
        ]
      }
    }
  ]
};

var dataLab1Ex2Polygons = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.17472267150879,
              39.95560922171374
            ],
            [
              -75.17472267150879,
              39.959194837859094
            ],
            [
              -75.16948699951172,
              39.959194837859094
            ],
            [
              -75.16948699951172,
              39.95560922171374
            ],
            [
              -75.17472267150879,
              39.95560922171374
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.16914367675781,
              39.95567501452881
            ],
            [
              -75.16914367675781,
              39.95916194315262
            ],
            [
              -75.16485214233398,
              39.95916194315262
            ],
            [
              -75.16485214233398,
              39.95567501452881
            ],
            [
              -75.16914367675781,
              39.95567501452881
            ]
          ]
        ]
      }
    }
  ]
};
var dataLab1Ex2Points = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "num": 110
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17184734344482,
          39.95907970631718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 90
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17060279846191,
          39.95815864700355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 120
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17244815826416,
          39.95824088494664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 80
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17257690429688,
          39.956579659317555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 130
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17176151275635,
          39.95774745580456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 70
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.17083883285522,
          39.95700730541574
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 210
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16858577728271,
          39.958849442651825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 190
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16693353652954,
          39.95824088494664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 220
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16656875610352,
          39.956908618091994
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "num": 180
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16871452331543,
          39.95633293919831
        ]
      }
    }
  ]
};

var lab1Ex3Polygons = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "location": "West Philadelphia"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.23609161376953,
              39.94541057016555
            ],
            [
              -75.23609161376953,
              39.96435911051017
            ],
            [
              -75.18819808959961,
              39.96435911051017
            ],
            [
              -75.18819808959961,
              39.94541057016555
            ],
            [
              -75.23609161376953,
              39.94541057016555
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "location": "Center City"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.17789840698242,
              39.942778413252476
            ],
            [
              -75.17789840698242,
              39.96185925653245
            ],
            [
              -75.14253616333008,
              39.96185925653245
            ],
            [
              -75.14253616333008,
              39.942778413252476
            ],
            [
              -75.17789840698242,
              39.942778413252476
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "location": "North Philadelphia"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -75.17017364501953,
              39.96383283305793
            ],
            [
              -75.17017364501953,
              39.989878703906044
            ],
            [
              -75.14459609985352,
              39.989878703906044
            ],
            [
              -75.14459609985352,
              39.96383283305793
            ],
            [
              -75.17017364501953,
              39.96383283305793
            ]
          ]
        ]
      }
    }
  ]
};

var lab1Ex3Points = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16948699951172,
          39.95409596949797
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.15935897827148,
          39.95462232189238
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.15111923217773,
          39.952122111941506
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.172061920166,
          39.948832222761844
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.15935897827148,
          39.94804262581411
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.22270202636717,
          39.95817509460007
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.21377563476562,
          39.956990857538344
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.20021438598633,
          39.956990857538344
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.19798278808594,
          39.946463404576804
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.21257400512695,
          39.94922701781798
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16107559204102,
          39.97725164260922
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.15249252319336,
          39.97462071110789
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.1655387878418,
          39.97172656947479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.16639709472656,
          39.96449067924025
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.15506744384766,
          39.963043409283806
        ]
      }
    }
  ]
};

var pointStart = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-87.4072265625,38.376115424036016]
  }
};

var pointLastKnown = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [-87.5830078125,38.23818011979866]
  }
};
