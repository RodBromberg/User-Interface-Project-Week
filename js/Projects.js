// if (navigator.geolocation) { //Checks if browser supports geolocation
//     navigator.geolocation.getCurrentPosition(function(position) { //This gets the
//         var latitude = position.coords.latitude; //users current
//         var longitude = position.coords.longitude; //location
//         var coords = new google.maps.LatLng(latitude, longitude); //Creates variable for map coordinates
//         var directionsService = new google.maps.DirectionsService();
//         var directionsDisplay = new google.maps.DirectionsRenderer();
//         var mapOptions = //Sets map options
//             {
//                 zoom: 15, //Sets zoom level (0-21)
//                 center: coords, //zoom in on users location
//                 mapTypeControl: true, //allows you to select map type eg. map or satellite
//                 navigationControlOptions: {
//                     style: google.maps.NavigationControlStyle.SMALL //sets map controls size eg. zoom
//                 },
//                 mapTypeId: google.maps.MapTypeId.ROADMAP //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRIAN
//             };
//         map = new google.maps.Map( /*creates Map variable*/ document.getElementById("map"), mapOptions /*Creates a new map using the passed optional parameters in the mapOptions parameter.*/ );
//         directionsDisplay.setMap(map);
//         directionsDisplay.setPanel(document.getElementById('panel'));
//         var request = {
//             origin: coords,
//             destination: 'BT42 1FL',
//             travelMode: google.maps.DirectionsTravelMode.DRIVING
//         };

//         directionsService.route(request, function(response, status) {
//             if (status == google.maps.DirectionsStatus.OK) {
//                 directionsDisplay.setDirections(response);
//             }
//         });
//     });
// }

// function initMap() {
//     var directionsService = new google.maps.DirectionsService;
//     var directionsDisplay = new google.maps.DirectionsRenderer;
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 6,
//         center: { lat: 41.85, lng: -87.65 }
//     });
//     directionsDisplay.setMap(map);

//     document.getElementById('submit').addEventListener('click', function() {
//         calculateAndDisplayRoute(directionsService, directionsDisplay);
//     });
// }

// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//     var waypts = [];
//     var checkboxArray = document.getElementById('waypoints');
//     for (var i = 0; i < checkboxArray.length; i++) {
//         if (checkboxArray.options[i].selected) {
//             waypts.push({
//                 location: checkboxArray[i].value,
//                 stopover: true
//             });
//         }
//     }

//     directionsService.route({
//         origin: document.getElementById('start').value,
//         destination: document.getElementById('end').value,
//         waypoints: waypts,
//         optimizeWaypoints: true,
//         travelMode: 'DRIVING'
//     }, function(response, status) {
//         if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//             var route = response.routes[0];
//             var summaryPanel = document.getElementById('directions-panel');
//             summaryPanel.innerHTML = '';
//             // For each route, display summary information.
//             for (var i = 0; i < route.legs.length; i++) {
//                 var routeSegment = i + 1;
//                 summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
//                     '</b><br>';
//                 summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
//                 summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
//                 summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
//             }
//         } else {
//             window.alert('Directions request failed due to ' + status);
//         }
//     });
// }