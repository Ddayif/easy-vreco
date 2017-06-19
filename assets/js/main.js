function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl:false,
		zommControl:false,
		streetViewControl:false
	});


/*getCurrentPosition permite al usuario obtener su ubicacion actual, el parametro functionExito se
ejecuta solo cuando el usuario comparte su ubicacion, miestras que funcionError se ejecuta cuando
se produce un error en la geolocalizacion*/
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

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map
		});

	map.setZoom(17);
	map.setCenter({lat:latitud, lng:longitud});
}

	var funcionError = function (error) {
	alert("Tenemos un problema con encontrar tu ubicacion");
	}
}