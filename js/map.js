	mapboxgl.accessToken = 'pk.eyJ1IjoiYnVpbGRuYXRpb24iLCJhIjoiY2tnOW5uaDhuMHBkZzJybHNxcHFhcGl3byJ9.EyACNlZ0SsTLfDPHff_rKA';

 var geojson = {
      type: 'FeatureCollection',
        features: [{
          type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [72.931251, 19.141659]
          },
        },
        
        ]
      };

      var map = new mapboxgl.Map({
        container: 'map-canvas',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [72.931251, 19.141659],
        zoom: 14
      });

      // add markers to map
      geojson.features.forEach(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });


