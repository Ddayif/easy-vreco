/*function initMap() {
  var myLatLng = document.getElementById("origen").value;
  var destination = document.getElementById("destino").value;

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {lat: -9.1191427, lng: -77.0349046},
    mapTypeControl:false,
    zommControl:false,
    streetViewControl:false
  });

  function buscar(){
  var service = new google.maps.DistanceMatrixService(funcionExito, callback);
  service.getDistanceMatrix(
  {
}

      document.getElementById("encuentrame").addEventListener("click",buscar);
        var myLatLng,destination;

  
    var funcionExito = function(posicion) {
    position: {lat:myLatLng, lng:destination},
    travelMode: 'DRIVING',
    map: map,
    avoidHighways: Boolean,
    avoidTolls: Boolean,
    title: 'Hello World!',
  }, callback);
    
  function callback(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.
}
}
*/


function initMap() {
  var myLatLng = document.getElementById("origen").value;
  var destination = document.getElementById("destino").value;

  var map = new google.maps.Map(document.getElementById("map"), {
  center: {lat: 55.53, lng: 9.4},
  zoom: 5
  });


   document.getElementById("ruta").addEventListener("click", function() {
          getDistanceMatrix(myLatLng, destination);
        });
      }



var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: myLatLng,
    destinations: destination,
    travelMode: 'DRIVING',
    drivingOptions: DrivingOptions,
    avoidHighways: Boolean,
    avoidTolls: Boolean,
  }, callback);

function callback(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.
}
}