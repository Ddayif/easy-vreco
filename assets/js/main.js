      function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 7,
          center: {lat: -33.4569400, lng: -70.6482700}
        });
        directionsDisplay.setMap(map);

       
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

    var image = "https://image.flaticon.com/icons/png/128/384/384144.png";
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

  var placeSearch, autocomplete;
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      };

      function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
      }
}
  


