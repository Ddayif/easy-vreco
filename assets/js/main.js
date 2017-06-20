function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 7,
  center: {lat:-33.4569400, lng:-70.6482700}
});
  directionsDisplay.setMap(map);

  var origenAutoComp = (document.getElementById("origen"));
          var autocompletar = new google.maps.places.Autocomplete(origenAutoComp);
          autocompletar.bindTo("bounds", map);

         var destinoAutoComp = (document.getElementById("destino"));
          var autocompletar = new google.maps.places.Autocomplete(destinoAutoComp);
          autocompletar.bindTo("bounds", map);


  document.getElementById("ruta").addEventListener("click", function(){
  calculateAndDisplayRoute(directionsService, directionsDisplay);
});

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
  origin: document.getElementById("origen").value,
  destination: document.getElementById("destino").value,
  travelMode: 'DRIVING'
}, function(response, status) {
    if (status === 'OK') {
    directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

function buscar(){
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(funcionExito, funcionError);     
  }
}
  document.getElementById("encuentrame").addEventListener("click",buscar);
  var latitud,longitud;


/*Con funcionExito obtendremos nuestra latitud o longitud y ademas crearemos un marcador de nuestra ubicacion*/
  var funcionExito = function(posicion) {
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;

  var image = "https://cdn4.iconfinder.com/data/icons/48x48-free-object-icons/48/Bike.png";
  var miUbicacion = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    animation: google.maps.Animation.DROP,
    map: map,
    icon: image
  });

    map.setZoom(17);
    map.setCenter({lat:latitud, lng:longitud});
  }

  var funcionError = function (error) {
    alert("Tenemos un problema con encontrar tu ubicacion");
  }




    }



