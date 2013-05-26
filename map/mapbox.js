function addMarker(){
  var latitude = document.newMarker.latitude.value;
  var longitude = document.newMarker.longitude.value;
	var city = document.newMarker.markerCity.value;
	var url = document.newMarker.markerUrl.value;
	var image = document.newMarker.markerImage.value;

   if (latitude && longitude) {
      var geojson = map.markerLayer.getGeoJSON();
      console.log(geojson);
      geojson.features.push(
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [latitude, longitude]
          },
          properties: {
            image: image,
            url: url,
            city: city
          }
        }
      );
      map.markerLayer.setGeoJSON(geojson);
      loadPopUp(map.markerLayer);
      document.newMarker.reset();
   }
}

function loadPopUp(markerLayer){
   markerLayer.eachLayer(function(marker) {
    var feature = marker.feature;

    // Create custom popup content
		var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
			'<img src="' + feature.properties.image + '">' +
      '   <h2>' + feature.properties.city + '</h2>' +
      '</a>';
    
		// http://leafletjs.com/reference.html#popup
		marker.bindPopup(popupContent,{
			closeButton: false,
			minWidth: 320
		});

	});
}

function getData(callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status === 0)) {
      callback(xhr.responseXML);
    }
  };
  xhr.open("GET", "http://bouncetrip.com/map/request.php", false); 
  xhr.send(null);
}
function parseData(sData){
  var collection = sData.getElementsByTagName("FeatureCollection");
  var object = { type: collection[0].nodeName, features: [] };
  var children = collection[0].childNodes;
  for (var i=0; i<children.length; i++) {
    object.features.push(
      {
        type: children[i].nodeName,
        geometry: {
          type: children[i].childNodes[0].getAttribute('type'),
          coordinates: [
            children[i].childNodes[0].childNodes[0].getAttribute('latitude'),
            children[i].childNodes[0].childNodes[0].getAttribute('longitude')
          ]
        },
        properties: {
          image: children[i].childNodes[1].getAttribute('image'),
          url: children[i].childNodes[1].getAttribute('url'),
          "marker-symbol": children[i].childNodes[1].getAttribute('symbol'),
          city: children[i].childNodes[1].getAttribute('city')
        }
      }
    );
  }
  geojson = object;
}

var map = L.mapbox.map('map', 'bouncetrip.map-m59hwe9h');
var geojson;

getData(parseData);

console.log(geojson);

map.markerLayer.setGeoJSON(geojson);

map.markerLayer.on('ready', function(e) {
  loadPopUp(this);
});

map.setView([45.908, -78.525], 4);