google.maps.visualRefresh = true;

var map;

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(-34.397, 150.644),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map"),
		mapOptions);
		google.maps.event.addListener(map, 'click', function(event) {
		placeMarker(event.latLng);
	});
}

function placeMarker(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
	map.setCenter(location);
}

google.maps.event.addDomListener(window, 'load', initialize);